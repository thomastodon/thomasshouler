import Image from "next/image";

const SOCIAL_LINKS = [
  { icon: 'git', url: 'http://github.com/thomastodon' },
  { icon: 'linkd', url: 'http://www.linkedin.com/in/thomasshouler' },
  { icon: 'strava', url: 'http://www.strava.com/athletes/thomasshouler' }
];

export default function SocialIcons() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {SOCIAL_LINKS.map(({ icon, url }) => (
        <a
          key={icon}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`/${icon}.png`}
            alt={icon}
            width={24}
            height={24}
            className="opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          />
        </a>
      ))}
    </div>
  );
}

