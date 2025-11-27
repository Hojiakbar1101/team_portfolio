// components/layout/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Bosh sahifa' },
  {
    label: 'Biz haqimizda',
    submenu: [
      { href: '/about', label: 'Umumiy' },
      { href: '/about/history', label: 'Tarix' },
      { href: '/about/mission', label: 'Missiya' },
      { href: '/about/achievements', label: 'Yutuqlar' }
    ]
  },
  { href: '/services', label: 'Xizmatlar' },
  { href: '/projects', label: 'Loyihalar' },
  { href: '/team', label: 'Jamoa' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Aloqa' }
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl">DF</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900 leading-none">
                DUALFORGE LABS
              </h1>
              <p className="text-xs text-gray-600">Innovation & Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() =>
                  link.submenu && setActiveSubmenu(link.label)
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors relative',
                      pathname === link.href
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                ) : (
                  <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                    {link.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}

                {/* Submenu */}
                {link.submenu && activeSubmenu === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {link.submenu.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button size="md">Bog'lanish</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-2 text-base font-medium transition-colors',
                        pathname === link.href
                          ? 'text-blue-600'
                          : 'text-gray-700'
                      )}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === link.label ? null : link.label
                          )
                        }
                        className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-700"
                      >
                        {link.label}
                        <svg
                          className={cn(
                            'w-5 h-5 transition-transform',
                            activeSubmenu === link.label && 'rotate-180'
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeSubmenu === link.label && link.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.submenu.map((sublink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sublink.href}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Link href="/contact" className="mt-4">
                <Button fullWidth>Bog'lanish</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};