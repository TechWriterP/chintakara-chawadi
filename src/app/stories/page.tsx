import Link from "next/link";
import { stories } from "@/lib/data";

export default function Stories() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">ಕಥೆಗಳು</h1>
                <p className="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                    ಕಲ್ಪನೆ ಮತ್ತು ವಾಸ್ತವದ ಸಂಗಮ.
                </p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {stories.map((story) => (
                    <article key={story.slug} className="flex max-w-xl flex-col items-start justify-between bg-neutral-50 dark:bg-neutral-800/50 p-6 rounded-lg">
                        <div className="flex items-center gap-x-4 text-xs w-full justify-between">
                            <time dateTime={story.date} className="text-neutral-500">
                                {story.date}
                            </time>
                            <span className="text-neutral-500">{story.readingTime} ಓದು</span>
                        </div>
                        <div className="group relative mt-4">
                            <h3 className="text-xl font-bold leading-6 text-neutral-900 dark:text-neutral-100 group-hover:text-red-900 dark:group-hover:text-red-400">
                                <Link href={`/stories/${story.slug}`}>
                                    <span className="absolute inset-0" />
                                    {story.title}
                                </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                {story.excerpt}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
