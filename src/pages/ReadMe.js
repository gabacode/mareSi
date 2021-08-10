import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ReadMe(){

    const [markdown, setMarkdown] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gabacode/mareSi/main/README.md')
        .then(res => res.text())
        .then(text => setMarkdown(text))
        setIsLoading(false);
    },[])

    return(
        <div className="markdown">
            <div className="container">
                {
                    isLoading ? <h1>Caricamento...</h1>
                    :
                    <ReactMarkdown children={markdown} /> 
                }
            </div>
        </div>
    )
}
