export function Footer() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12 mt-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {/* Placeholder for social links */}
                    <span className="text-neutral-500 text-sm">ಲೇಖಕರನ್ನು ಸಂಪರ್ಕಿಸಿ</span>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-neutral-500">
                        &copy; {new Date().getFullYear()} ಕನ್ನಡ ಲೇಖಕ. ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.
                    </p>
                </div>
            </div>
        </footer>
    );
}
