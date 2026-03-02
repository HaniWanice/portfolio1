import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    children: React.ReactNode;
}

export function Section({ id, className = '', children, ...props }: SectionProps) {
    return (
        <section id={id} className={`py-24 md:py-32 flex flex-col items-center justify-center relative ${className}`} {...props}>
            <div className="mx-auto w-full max-w-5xl px-6 md:px-8 flex flex-col items-center text-center">
                {children}
            </div>
        </section>
    );
}
