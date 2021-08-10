import React, {Fragment, useState} from 'react';
import Hamburger from 'hamburger-react'
import logo from '../images/logo.svg'

export default function Navbar(){
    const [isOpen, setOpen] = useState(false);

    return(
        <Fragment>
            <nav>
                <a href="/" className="navLink logo">
                    <img style={{height:'36px'}} src={logo} alt="mareSi"/>
                </a>
                <div className="navRight">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>
            {isOpen ?
            <div className="openMenu">
                <a href="/">
                    Home
                </a>
                <a href="/readme">
                    ReadMe
                </a>
            </div>
            :null}
        </Fragment>
        
    )
}