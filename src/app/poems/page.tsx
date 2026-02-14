import Link from "next/link";
import { poems } from "@/lib/data";

export default function Poems() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">ಕವನಗಳು</h1>
                <p className="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                    ಭಾವನೆಗಳ ಅಭಿವ್ಯಕ್ತಿಯೇ ಕವನ.
                </p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {poems.map((poem) => (
                    <article key={poem.slug} className="flex max-w-xl flex-col items-start justify-between border-b border-neutral-200 dark:border-neutral-800 pb-8">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={poem.date} className="text-neutral-500">
                                {poem.date}
                            </time>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 dark:text-neutral-100 group-hover:text-red-900 dark:group-hover:text-red-400">
                                <Link href={`/poems/${poem.slug}`}>
                                    <span className="absolute inset-0" />
                                    {poem.title}
                                </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                {poem.excerpt}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
