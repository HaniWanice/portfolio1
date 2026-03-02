import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ className = '', children, ...props }: CardProps) {
    return (
        <div
            className={`group relative rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] overflow-hidden flex flex-col text-center ${className}`}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            {children}
        </div>
    );
}

export function CardHeader({
    className = '',
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`flex flex-col space-y-2 p-8 pb-4 relative z-10 ${className}`}
            {...props}
        />
    );
}

export function CardTitle({
    className = '',
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={`text-2xl font-bold tracking-tight text-slate-800 ${className}`}
            {...props}
        />
    );
}

export function CardDescription({
    className = '',
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={`text-base text-slate-600 ${className}`}
            {...props}
        />
    );
}

export function CardContent({
    className = '',
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`p-8 pt-0 flex-1 relative z-10 flex flex-col items-center ${className}`} {...props} />;
}

export function CardFooter({
    className = '',
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`flex items-center justify-center gap-4 p-8 pt-0 relative z-10 ${className}`}
            {...props}
        />
    );
}
