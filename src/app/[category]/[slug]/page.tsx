import { notFound } from "next/navigation";
import { poems, stories, articles } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const params: { category: string; slug: string }[] = [];
    poems.forEach((p) => params.push({ category: "poems", slug: p.slug }));
    stories.forEach((s) => params.push({ category: "stories", slug: s.slug }));
    articles.forEach((a) => params.push({ category: "articles", slug: a.slug }));
    return params;
}

export default async function Post({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = await params;

    let item;
    if (category === "poems") {
        item = poems.find((p) => p.slug === slug);
    } else if (category === "stories") {
        item = stories.find((s) => s.slug === slug);
    } else if (category === "articles") {
        item = articles.find((a) => a.slug === slug);
    }

    if (!item) {
        notFound();
    }

    // Determine layout class based on type
    const isPoem = category === "poems";
    const contentClass = isPoem
        ? "text-xl leading-loose whitespace-pre-line text-center font-serif max-w-2xl mx-auto"
        : "prose prose-neutral dark:prose-invert mx-auto text-lg leading-8";

    return (
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
            <div className="mb-8">
                <Link href={`/${category}`} className="text-sm font-semibold leading-6 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> ಹಿಂದೆ ಹೋಗಿ
                </Link>
            </div>
            <article>
                <header className="mb-10 text-center">
                    <div className="flex items-center justify-center gap-x-4 text-xs mb-4">
                        <time dateTime={item.date} className="text-neutral-500">
                            {item.date}
                        </time>
                        <span className="relative z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 font-medium text-neutral-600 dark:text-neutral-300">
                            {category === 'poems' ? 'ಕವನ' : category === 'stories' ? 'ಕಥೆ' : 'ಲೇಖನ'}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl font-serif">
                        {item.title}
                    </h1>
                </header>

                <div className={contentClass}>
                    {item.content}
                </div>
            </article>
        </div>
    );
}
