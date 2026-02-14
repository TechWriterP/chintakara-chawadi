export default function Contact() {
    return (
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl text-center mb-12">
                ಸಂಪರ್ಕಿಸಿ
            </h1>

            <div className="bg-neutral-50 dark:bg-neutral-800/50 p-8 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100">
                            ಹೆಸರು
                        </label>
                        <div className="mt-2">
                            <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-neutral-900 dark:text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6 bg-white dark:bg-neutral-900" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100">
                            ಇಮೇಲ್
                        </label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-neutral-900 dark:text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6 bg-white dark:bg-neutral-900" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100">
                            ಸಂದೇಶ
                        </label>
                        <div className="mt-2">
                            <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-0 py-1.5 text-neutral-900 dark:text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6 bg-white dark:bg-neutral-900"></textarea>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-red-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900">
                            ಕಳುಹಿಸಿ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
