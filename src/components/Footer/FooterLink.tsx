import React, {FC, ReactNode} from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}
 export const FooterLink: FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block text-gray-300 hover:text-white transition-colors py-1 text-sm"
    >
      {children}
    </a>
  );
};

interface FooterColumnItem {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterColumnItem[];
}

export const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4 text-base">{title}</h3>
      <div className="space-y-2">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  );
};


interface LocationBadgeProps {
  country: string;
  city: string;
  flag: string;
}

export const LocationBadge: FC<LocationBadgeProps> = ({ country, city, flag }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
      <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs">
        {flag}
      </div>
      <span className="text-white text-sm whitespace-nowrap">
        {city}, {country}
      </span>
    </div>
  );
};

interface SocialIconProps {
  href: string;
  icon: StaticImageData | string; // image
  label: string;
}

export const SocialIcon: FC<SocialIconProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
    >
      <Image
        src={icon}
        alt={label}
        width={18}
        height={18}
        className="object-contain"
      />
    </a>
  );
};