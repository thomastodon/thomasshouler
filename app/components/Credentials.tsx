const CREDENTIALS = [
  'B.S. Civil and Environmental Engineering, Cornell University',
  'M.Eng. Structural Engineering, Cornell University',
  'P.E., State of California, License #C83831'
];

const credentialStyle = {
  color: '#424242',
  lineHeight: '1.6',
  textAlign: 'left' as const,
  marginTop: '1rem',
  fontStyle: 'italic' as const
};

export default function Credentials() {
  return (
    <div style={{ marginTop: 'auto', paddingTop: '2rem', paddingBottom: '1rem' }}>
      {CREDENTIALS.map((credential, index) => (
        <p key={index} style={credentialStyle}>
          {credential}
        </p>
      ))}
    </div>
  );
}

