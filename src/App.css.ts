import { style } from '@vanilla-extract/css';

export const app = style({
  fontFamily: 'Arial, sans-serif',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f0f2f5',
});

export const heading = style({
  color: '#333',
  textAlign: 'center',
  marginBottom: '30px',
});

export const list = style({
  listStyleType: 'none',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '20px',
});

export const card = style({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
});

export const diseaseName = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#1a1a1a',
});

export const diseaseInfo = style({
  fontSize: '14px',
  color: '#666',
  marginBottom: '5px',
});

export const fatalityRate = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#e74c3c',
  marginTop: 'auto',
});

export const diseaseLink = style({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});
