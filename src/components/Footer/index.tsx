import React from 'react';
import { FooterColumn, LocationBadge, SocialIcon } from './FooterLink';
import { facebook, instagram, youtube, linkedin, twitter } from '@/assets/icons';
import { NewsletterForm } from './NewsLetterForm';

const Footer: React.FC = () => {
  const companyLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Offshore Developers', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Our Expertise', href: '#' },
    { label: 'Technologies', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const servicesLinks = [
    { label: 'Software Development', href: '#' },
    { label: 'Mobile App Development', href: '#' },
    { label: 'Application Modernization', href: '#' },
    { label: 'CRM Development Services', href: '#' },
    { label: 'ERP Software', href: '#' },
    { label: 'Data Analytics', href: '#' },
    { label: 'DevOps Services', href: '#' },
    { label: 'Cloud Consulting', href: '#' },
    { label: 'Staff Augmentation', href: '#' },
    { label: 'Hire Developers', href: '#' },
  ];

  const industriesLinks = [
    { label: 'FinTech', href: '#' },
    { label: 'Insurtech', href: '#' },
    { label: 'Proptech', href: '#' },
    { label: 'EdTech', href: '#' },
    { label: 'Media & Entertainment', href: '#' },
    { label: 'Healthcare', href: '#' },
    { label: 'Retail', href: '#' },
    { label: 'Facility Management', href: '#' },
    { label: 'Supply Chain & Logistics', href: '#' },
    { label: 'Telecom', href: '#' },
    { label: 'Travel & Hospitality', href: '#' },
  ];

  const offshoreDevelopersLinks = [
    { label: 'Hire Backend Developer', href: '#' },
    { label: 'Hire Frontend Developer', href: '#' },
    { label: 'Hire App Developer', href: '#' },
    { label: 'Hire DevOps Engineer', href: '#' },
    { label: 'Hire AI Engineer', href: '#' },
    { label: 'Hire Full Stack Developer', href: '#' },
    { label: 'Hire Salesforce Developer', href: '#' },
    { label: 'Hire PowerApps Developers', href: '#' },
  ];

  const resourcesLinks = [
    { label: 'Portfolio', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Our Team', href: '#' },
    { label: 'Interns', href: '#' },
  ];

  const locations = [
    { country: 'India', city: 'India', flag: '🇮🇳' },
    { country: 'USA', city: 'New York', flag: '🇺🇸' },
    { country: 'Australia', city: 'Sydney', flag: '🇦🇺' },
    { country: 'UAE', city: 'Dubai', flag: '🇦🇪' },
    { country: 'UK', city: 'London', flag: '🇬🇧' },
    { country: 'Italy', city: 'Milan', flag: '🇮🇹' },
    { country: 'Thailand', city: 'Thailand', flag: '🇹🇭' },
    { country: 'South Africa', city: 'South Africa', flag: '🇿🇦' },
    { country: 'Canada', city: 'Canada', flag: '🇨🇦' },
  ];

  const socialLinks = [
    { icon: instagram, href: '#', label: 'Instagram' },
    { icon: linkedin, href: '#', label: 'LinkedIn' },
    { icon: facebook, href: '#', label: 'Facebook' },
    { icon: twitter, href: '#', label: 'Twitter' },
    { icon: youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <NewsletterForm />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={servicesLinks} />
          <FooterColumn title="Industries" links={industriesLinks} />
          <FooterColumn title="Offshore Developers" links={offshoreDevelopersLinks} />
          <FooterColumn title="Resources" links={resourcesLinks} />
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {locations.map((location, index) => (
            <LocationBadge key={index} {...location} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Follow Us:</span>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-400 text-center">
            © 2016 - 2025 Alpion Technologies Private Limited All Rights Reserved
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
             <div className="h-6 w-px bg-gray-700 transform -translate-x-1/2"></div>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              SITEMAP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;