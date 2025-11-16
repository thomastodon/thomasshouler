import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full p-2 md:p-4">
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', overflow: 'hidden', height: '4px', marginBottom: '0.5rem' }}>
        <Image 
          src="/single_line.png" 
          alt="Single line" 
          width={1200} 
          height={10}
          style={{ width: '100%', height: 'auto', transform: 'scaleY(0.4)', transformOrigin: 'top' }}
        />
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <SocialIcons />
      </div>
    </footer>
  );
}

