import { CssBaseline, ThemeProvider } from '@mui/material';

import { AppRoutes } from './routes';

import { useAppSelector } from './store';
import { darkTheme, lightTheme } from './theme';
import { ThemeModeEnum } from './types';

export const App = () => {
  const { themeMode } = useAppSelector((state) => state.ui);

  return (
    <ThemeProvider theme={themeMode === ThemeModeEnum.LIGHT ? lightTheme : darkTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};
