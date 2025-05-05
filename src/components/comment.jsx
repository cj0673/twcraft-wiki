export default function Comment({children}) {
  return (
    <div style={{
      fontSize: '0.75em',
      color: '#888888',
    }}>
      {children}
    </div>
  );
}