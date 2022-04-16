import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Input, Textarea } from 'theme-ui';
interface FormProps {
  name: string;
  email: string;
  message: string;
}
export const Form = () => {
  const [fields, setFields] = useState({} as FormProps);
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
  return (
    <Box
      bg="white"
      mx="auto"
      sx={{
        borderRadius: 23,
        padding: [4, 4, 4],
      }}
    >
      <form>
        <Input
          type="text"
          name="name"
          value={fields.name}
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
          name="message"
          value={fields.message}
          onChange={handleInput}
          placeholder="Why do you want join? Tell us about your love for the sea!"
        />
        <Button
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
