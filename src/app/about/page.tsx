import { author } from "@/lib/data";

export default function About() {
    return (
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl text-center mb-12">
                ಸೋಮಶೇಖರ ಇಟಗಿ
            </h1>

            <div className="prose prose-neutral dark:prose-invert mx-auto">
                <p>
                    ನಾನು ಬಾಲ್ಯದಿಂದಲೂ ಸಾಹಿತ್ಯದಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೆ.
                    ಪ್ರಕೃತಿ, ಸಮಾಜ ಮತ್ತು ಮಾನವೀಯ ಮೌಲ್ಯಗಳ ಬಗ್ಗೆ ಬರೆಯಲು ಇಷ್ಟಪಡುತ್ತೇನೆ.
                    ನನ್ನ ಬರಹಗಳು ಓದುಗರಿಗೆ ಸ್ಫೂರ್ತಿ ನೀಡಲಿ ಎಂಬುದು ನನ್ನ ಆಶಯ.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-red-900 dark:text-red-400">ಸಾಹಿತ್ಯ ಕೃಷಿ</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>2018 - ಮೊದಲ ಕವನ ಸಂಕಲನ "ಭಾವ ಲಹರಿ" ಪ್ರಕಟ.</li>
                    <li>2020 - ಕಥಾ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ರಾಜ್ಯ ಮಟ್ಟದ ಪ್ರಶಸ್ತಿ.</li>
                    <li>2022 - "ಜೀವನ ದರ್ಶನ" ಅಂಕಣ ಬರಹಗಳ ಸಂಗ್ರಹ.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-red-900 dark:text-red-400">ಬರೆಯುವ ವಿಷಯಗಳು</h3>
                <p>
                    ನಾನು ಹೆಚ್ಚಾಗಿ ಈ ಕೆಳಗಿನ ವಿಷಯಗಳ ಬಗ್ಗೆ ಬರೆಯುತ್ತೇನೆ:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>ಸಿಸರ್ಗ ಮತ್ತು ಪರಿಸರ</li>
                    <li>ಮಾನವ ಸಂಬಂಧಗಳು</li>
                    <li>ಸಾಮಾಜಿಕ ಕಳಕಳಿ</li>
                    <li>ಆಧ್ಯಾತ್ಮಿಕ ಚಿಂತನೆಗಳು</li>
                </ul>
            </div>
        </div>
    );
}
