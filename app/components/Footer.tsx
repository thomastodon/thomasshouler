import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full p-4">
      <div className="max-w-7xl mx-auto" style={{ overflow: 'hidden', height: '4px', marginBottom: '0.5rem' }}>
        <Image 
          src="/single_line.png" 
          alt="Single line" 
          width={1200} 
          height={10}
          style={{ width: '100%', height: 'auto', transform: 'scaleY(0.4)', transformOrigin: 'top' }}
        />
      </div>
      <SocialIcons />
    </footer>
  );
}

