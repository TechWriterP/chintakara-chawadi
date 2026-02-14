import { author, featuredPoem, recentItems, quotes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
// import { ArrowRight } from "lucide-react"; // Import commented out until package is guaranteed installed

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-10">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-48 h-48 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center text-neutral-500 overflow-hidden">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl font-serif">
            {author.name}
          </h1>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300 max-w-2xl">
            {author.bio}
          </p>
        </div>
      </section>

      {/* Featured Poem */}
      <section className="bg-neutral-50 dark:bg-neutral-800/50 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold leading-7 text-red-900 dark:text-red-400">ವಿಶೇಷ ಕವನ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            {featuredPoem.title}
          </p>
          <div className="mt-8 text-xl leading-loose whitespace-pre-line text-neutral-700 dark:text-neutral-300 font-serif">
            {featuredPoem.content}
          </div>
          <div className="mt-10">
            <Link href={`/poems/${featuredPoem.slug}`} className="text-sm font-semibold leading-6 text-red-900 dark:text-red-400">
              ಪೂರ್ತಿ ಓದಿ <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Writings */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">ಇತ್ತೀಚಿನ ಬರಹಗಳು</h2>
          <p className="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            ಕವನ, ಕಥೆ ಮತ್ತು ಲೇಖನಗಳ ಸಂಗ್ರಹ
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recentItems.map((item) => (
            <article key={item.slug} className="flex max-w-xl flex-col items-start justify-between border-l-2 border-neutral-100 dark:border-neutral-800 pl-6 hover:border-red-900/50 transition-colors">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.date} className="text-neutral-500">
                  {item.date}
                </time>
                <span className="relative z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200">
                  {item.type === 'poem' ? 'ಕವನ' : item.type === 'story' ? 'ಕಥೆ' : 'ಲೇಖನ'}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600">
                  <Link href={`/${item.type}s/${item.slug}`}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/poems" className="rounded-md bg-red-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            ಎಲ್ಲಾ ಬರಹಗಳನ್ನು ನೋಡಿ
          </Link>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-neutral-900 text-white py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl font-serif italic leading-relaxed">
            &quot;{quotes[0]}&quot;
          </blockquote>
        </div>
      </section>

      {/* Subscribe */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center pb-10">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">ಚಂದಾದಾರರಾಗಿ</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">ಹೊಸ ಬರಹಗಳ ಬಗ್ಗೆ ಇಮೇಲ್ ಮೂಲಕ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.</p>
        <form className="mt-6 flex max-w-md mx-auto gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-neutral-100/50 dark:bg-neutral-800/50 px-3.5 py-2 text-neutral-900 dark:text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6" placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ" />
          <button type="submit" className="flex-none rounded-md bg-red-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900">
            ಸಲ್ಲಿಸಿ
          </button>
        </form>
      </section>
    </div>
  );
}
