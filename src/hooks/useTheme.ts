import { useMemo } from 'react';
import { theme } from '@/config/theme';

export const useTheme = () => {
    const colors = useMemo(() => theme.colors, []);

    return { colors };
};
