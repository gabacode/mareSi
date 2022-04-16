import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Input, Textarea } from 'theme-ui';
import axios from 'axios';
interface FormProps {
  subject: string;
  email: string;
  text: string;
}
const initialFields: FormProps = {
  subject: '',
  email: '',
  text: '',
};
export const Form = () => {
  const [fields, setFields] = useState(initialFields);
  const [sending, setSending] = useState(false);
  const handleInput = (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = input.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios
        .post(process.env.GATSBY_MAIL_ENDPOINT ?? '', {
          ...fields,
        })
        .then(res => {
          if (res.status === 200) {
            setFields(initialFields);
            window.alert('Messaggio Inviato!');
            setSending(false);
          }
        });
    } catch (error) {
      setFields(initialFields);
      window.alert(error);
      setSending(false);
    }
  };

  return (
    <Box
      bg="white"
      mx="auto"
      sx={{
        borderRadius: 23,
        padding: [4, 4, 4],
      }}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="subject"
          value={fields.subject}
          placeholder="Nome"
          onChange={handleInput}
          required
        />
        <Input
          type="email"
          name="email"
          value={fields.email}
          placeholder="E-mail"
          onChange={handleInput}
          required
        />
        <Textarea
          rows={8}
          cols={30}
          name="text"
          value={fields.text}
          onChange={handleInput}
          placeholder="Why do you want join? Tell us about your love for the sea!"
        />
        <Button
          bg={sending ? 'lightgray' : 'primary'}
          sx={{
            float: 'right',
            cursor: 'pointer',
            marginTop: 2,
          }}
          disabled={sending}
          type="submit"
        >
          Send!
        </Button>
      </form>
    </Box>
  );
};
