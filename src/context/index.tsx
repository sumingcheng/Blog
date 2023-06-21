import React from 'react';
import {MenuTheme} from "@/types/layout.ts";

export const ThemeContext = React.createContext<MenuTheme>({
  theme: 'light', // 默认主题
  setTheme: () => {
  },
});

