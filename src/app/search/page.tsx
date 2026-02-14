'use client';

import { useState } from 'react';
import { poems, stories, articles } from '@/lib/data';
import Link from 'next/link';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
    const [query, setQuery] = useState('');

    const allItems = [
        ...poems.map(p => ({ ...p, type: 'poems', typeLabel: 'ಕವನ' })),
        ...stories.map(s => ({ ...s, type: 'stories', typeLabel: 'ಕಥೆ' })),
        ...articles.map(a => ({ ...a, type: 'articles', typeLabel: 'ಲೇಖನ' }))
    ];

    const filteredItems = query
        ? allItems.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return (
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl text-center mb-8">
                ಹುಡುಕಿ
            </h1>

            <div className="max-w-xl mx-auto mb-12 relative">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-neutral-400" />
                    </div>
                    <input
                        type="text"
                        id="search"
                        className="block w-full rounded-md border-0 py-3 pl-10 pr-4 text-neutral-900 dark:text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-lg sm:leading-6 bg-white dark:bg-neutral-900"
                        placeholder="ಕವನ, ಕಥೆ ಅಥವಾ ಲೇಖನಗಳನ್ನು ಹುಡುಕಿ..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-8">
                {query && filteredItems.length === 0 && (
                    <p className="text-center text-neutral-500">ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ.</p>
                )}

                {filteredItems.map((item) => (
                    <article key={item.slug} className="flex flex-col items-start justify-between border-b border-neutral-200 dark:border-neutral-800 pb-8 last:border-0">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={item.date} className="text-neutral-500">
                                {item.date}
                            </time>
                            <span className="relative z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 font-medium text-neutral-600 dark:text-neutral-300">
                                {item.typeLabel}
                            </span>
                        </div>
                        <div className="group relative mt-2">
                            <h3 className="text-lg font-semibold leading-6 text-neutral-900 dark:text-neutral-100 group-hover:text-red-900 dark:group-hover:text-red-400">
                                <Link href={`/${item.type}/${item.slug}`}>
                                    <span className="absolute inset-0" />
                                    {item.title}
                                </Link>
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                {item.excerpt}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
