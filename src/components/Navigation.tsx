'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/query', label: '合规查询' },
  { href: '/about', label: '关于我们' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-white/95 backdrop-blur dark:bg-slate-900/95 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">合规雷达</span>
        </Link>

        <nav className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? 'default' : 'ghost'}
                className={cn(
                  'text-sm',
                  pathname === item.href
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}