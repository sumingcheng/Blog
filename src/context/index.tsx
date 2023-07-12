import React from 'react';
import {switchTheme} from "@/types/layout.ts";

export const ThemeContext = React.createContext<switchTheme>({
  theme: 'light', // 默认主题
  setTheme: () => {
  }
});

