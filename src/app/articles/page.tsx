import Link from "next/link";
import { articles } from "@/lib/data";

export default function Articles() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">ಲೇಖನಗಳು</h1>
                <p className="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                    ವಿಚಾರ, ವಿಮರ್ಶೆ ಮತ್ತು ಚಿಂತನೆ.
                </p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {articles.map((article) => (
                    <article key={article.slug} className="flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={article.date} className="text-neutral-500">
                                {article.date}
                            </time>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-bold leading-6 text-neutral-900 dark:text-neutral-100 group-hover:text-red-900 dark:group-hover:text-red-400">
                                <Link href={`/articles/${article.slug}`}>
                                    <span className="absolute inset-0" />
                                    {article.title}
                                </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                {article.excerpt}
                            </p>
                        </div>
                        <div className="mt-4">
                            <Link href={`/articles/${article.slug}`} className="text-sm font-semibold text-red-900 dark:text-red-400">
                                ಓದಿ &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
