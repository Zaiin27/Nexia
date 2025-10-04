// Theme configuration with environment variables
// This approach allows for easy color management and theming

export const theme = {
    colors: {
        // Primary brand colors
        primary: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#00B9B9',
        primaryDark: process.env.NEXT_PUBLIC_PRIMARY_DARK || '#008B8B',
        primaryLight: process.env.NEXT_PUBLIC_PRIMARY_LIGHT || '#20C9C9',

        // Secondary colors
        secondary: process.env.NEXT_PUBLIC_SECONDARY_COLOR || '#F59E0B',
        accent: process.env.NEXT_PUBLIC_ACCENT_COLOR || '#10B981',

        // Text colors
        textPrimary: process.env.NEXT_PUBLIC_TEXT_PRIMARY || '#111827',
        textSecondary: process.env.NEXT_PUBLIC_TEXT_SECONDARY || '#6B7280',
        textLight: process.env.NEXT_PUBLIC_TEXT_LIGHT || '#9CA3AF',

        // Background colors
        bgPrimary: process.env.NEXT_PUBLIC_BG_PRIMARY || '#FFFFFF',
        bgSecondary: process.env.NEXT_PUBLIC_BG_SECONDARY || '#F9FAFB',
        bgDark: process.env.NEXT_PUBLIC_BG_DARK || '#1F2937',
    },

    // CSS custom properties mapping for ThemeProvider
    cssVariables: {
        '--color-primary': process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#00B9B9',
        '--color-primary-dark': process.env.NEXT_PUBLIC_PRIMARY_DARK || '#008B8B',
        '--color-primary-light': process.env.NEXT_PUBLIC_PRIMARY_LIGHT || '#20C9C9',
        '--color-secondary': process.env.NEXT_PUBLIC_SECONDARY_COLOR || '#F59E0B',
        '--color-accent': process.env.NEXT_PUBLIC_ACCENT_COLOR || '#10B981',
        '--color-text-primary': process.env.NEXT_PUBLIC_TEXT_PRIMARY || '#111827',
        '--color-text-secondary': process.env.NEXT_PUBLIC_TEXT_SECONDARY || '#6B7280',
        '--color-text-light': process.env.NEXT_PUBLIC_TEXT_LIGHT || '#9CA3AF',
        '--color-bg-primary': process.env.NEXT_PUBLIC_BG_PRIMARY || '#FFFFFF',
        '--color-bg-secondary': process.env.NEXT_PUBLIC_BG_SECONDARY || '#F9FAFB',
        '--color-bg-dark': process.env.NEXT_PUBLIC_BG_DARK || '#1F2937',
    }
};
