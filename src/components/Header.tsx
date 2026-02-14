'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const navigation = [
    { name: 'ಮುಖಪುಟ', href: '/' },
    { name: 'ಲೇಖಕರ ಬಗ್ಗೆ', href: '/about' },
    { name: 'ಕವನಗಳು', href: '/poems' },
    { name: 'ಕಥೆಗಳು', href: '/stories' },
    { name: 'ಲೇಖನಗಳು', href: '/articles' },
    { name: 'ಸಂಪರ್ಕ', href: '/contact' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 font-bold text-xl text-neutral-900 dark:text-white">
                        ಚಿಂತಕರ ಚಾವಡಿ
                    </Link>
                </div>
                <div className="flex lg:hidden items-center gap-4">
                    <Link href="/search" className="p-2.5 text-neutral-700 dark:text-neutral-200">
                        <Search className="h-6 w-6" />
                    </Link>
                    <ThemeToggle />
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 items-center">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-100 hover:text-red-900 dark:hover:text-red-400 transition-colors">
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 pl-4 border-l border-neutral-200 dark:border-neutral-800">
                        <Link href="/search" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100" aria-label="Search">
                            <Search className="h-5 w-5" />
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50 bg-black/20" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 shadow-xl">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 font-bold text-xl text-neutral-900 dark:text-white" onClick={() => setMobileMenuOpen(false)}>
                                ಲೇಖಕ
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-neutral-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
