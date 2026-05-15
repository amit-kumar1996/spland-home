import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-800">
            <section className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-sky-600 text-white shadow-md">
                        <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                        >
                            <path
                                d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold">About this Weather App</h1>
                        <p className="mt-1 text-sm text-slate-600">
                            Lightweight, responsive weather app built with React and Tailwind CSS.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <article className="p-6 rounded-xl bg-white shadow-sm border border-slate-100">
                        <h2 className="text-lg font-medium">What it does</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Fetches current weather and forecast data, presents them in a clean and
                            mobile-friendly UI, and supports search by city or current location.
                        </p>

                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-[10px] font-semibold">
                                    ✓
                                </span>
                                Real-time weather and forecast
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-[10px] font-semibold">
                                    ✓
                                </span>
                                Responsive UI built with Tailwind
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-[10px] font-semibold">
                                    ✓
                                </span>
                                Minimal, accessible components
                            </li>
                        </ul>
                    </article>

                    <aside className="p-6 rounded-xl bg-white shadow-sm border border-slate-100">
                        <h2 className="text-lg font-medium">Developer notes</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            This component uses Tailwind utility classes for spacing, layout, and
                            color. Customize tokens in your tailwind.config.js to match your brand.
                        </p>

                        <h3 className="mt-4 text-sm font-medium">Usage tips</h3>
                        <ol className="mt-2 text-sm list-decimal list-inside text-slate-600 space-y-2">
                            <li>Provide an API key via environment variables</li>
                            <li>Throttle requests and cache results where possible</li>
                            <li>Keep the UI accessible: aria labels and semantic HTML</li>
                        </ol>
                    </aside>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-slate-600">
                        Built with React • Tailwind CSS • OpenWeatherMap (or similar)
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/allinone"
                            className="inline-block px-4 py-2 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-700 transition"
                        >
                            Back to Home
                        </Link>
                        <a
                            href="mailto:you@example.com"
                            className="text-sm text-slate-600 hover:text-slate-800"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}