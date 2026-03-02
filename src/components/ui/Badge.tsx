import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'outline';
    children: React.ReactNode;
}

export function Badge({
    variant = 'default',
    className = '',
    children,
    ...props
}: BadgeProps) {
    const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2';

    const variants = {
        default: 'border-transparent bg-slate-900 text-white hover:bg-slate-800',
        secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200',
        outline: 'text-slate-900 border-slate-200',
    };

    return (
        <div
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
