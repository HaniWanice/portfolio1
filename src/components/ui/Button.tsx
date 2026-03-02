import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export function Button({
    variant = 'primary',
    size = 'md',
    asChild = false,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
        primary: 'bg-slate-900 text-white hover:bg-slate-800',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        outline: 'border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900',
        ghost: 'hover:bg-slate-100 hover:text-slate-900',
    };

    const sizes = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-12 px-8 text-base',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (asChild && React.isValidElement(props.children)) {
        const child = props.children as React.ReactElement<any>;
        const { children, ...rest } = props;
        return React.cloneElement(child, {
            ...rest,
            ...child.props,
            className: `${combinedClassName} ${child.props.className || ''}`.trim()
        } as any);
    }

    return (
        <button
            className={combinedClassName}
            {...props}
        />
    );
}
