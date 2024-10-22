import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const heading = style({
  color: '#333',
  textAlign: 'center',
  marginBottom: '20px',
});

export const info = style({
  fontSize: '16px',
  lineHeight: '1.5',
});

export const backLink = style({
  display: 'inline-block',
  marginTop: '20px',
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  textDecoration: 'none',
  borderRadius: '4px',
  transition: 'background-color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});
