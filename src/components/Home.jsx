import React from "react";
import { Link } from "react-router-dom";

/**
 * Common card component for microfrontend apps.
 * Use this to add new apps with the same styles.
 */
const AppCard = ({ title, subtitle, icon, path }) => {
    return (
        <Link
            to={path}
            className="flex flex-col items-center justify-center p-6 bg-white/60 dark:bg-gray-800/60 shadow-sm rounded-lg hover:shadow-md transition-shadow duration-150 border border-gray-100 dark:border-gray-700"
        >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 text-white mb-4">
                {icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
        </Link>
    );
};

export default function Home() {

    const WeatherIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h1.26A6 6 0 1118 16H7a4 4 0 01-4-1z" />
        </svg>
    );

    return (
        <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">All Applications</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Click on respective icon to launch your application.</p>
                </header>

                <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <AppCard
                        title="Weather"
                        subtitle="Weather microfrontend"
                        icon={WeatherIcon}
                        path="weather"
                    />

                    {/* Add more AppCard instances for other microfrontends here using the same AppCard component */}
                </section>
            </div>
        </div>
    );
}