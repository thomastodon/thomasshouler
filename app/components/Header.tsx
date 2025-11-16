import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full p-2 md:p-4">
      <nav style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <p style={{ 
          fontFamily: 'var(--font-roboto), sans-serif',
          margin: 0,
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#424242'
        }}>Thomas Shouler</p>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', overflow: 'visible', minHeight: '6px' }}>
        <Image 
          src="/double_line.png" 
          alt="Double line" 
          width={1200} 
          height={10}
          style={{ width: '100%', height: 'auto', transform: 'scaleY(0.6)', transformOrigin: 'top' }}
        />
      </div>
    </header>
  );
}

