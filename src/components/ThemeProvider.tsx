'use client';
import { useEffect } from 'react';
import { theme } from '@/config/theme';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // Set CSS custom properties dynamically from environment variables
        const root = document.documentElement;

        Object.entries(theme.cssVariables).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
    }, []);

    return <>{children}</>;
};

export default ThemeProvider;
