module.exports = {
  colors: {
    background: '#FFF',
    text: '#373737',
    primary: '#3399CC',
    secondary: '#FFF',
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  sizes: {
    container: 960,
  },
  forms: {
    input: {
      fontFamily: 'body',
      backgroundColor: 'background',
      borderWidth: 3,
      borderColor: 'primary',
      borderRadius: 8,
      marginBottom: 2,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      fontFamily: 'body',
      backgroundColor: 'background',
      borderWidth: 3,
      borderColor: 'primary',
      borderRadius: 8,
      marginBottom: 2,
      resize: 'none',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
  buttons: {
    padding: 5,
    cursor: 'pointer',
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'background',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: [1, 2, 3],
      color: 'text',
      bg: 'background',
    },
  },
};
