import {ReactNode} from "react";

export interface Props {
  children: ReactNode;  // 指定children属性
  showFooter?: boolean;
}

export interface switchTheme {
  theme: 'light' | 'dark';
  setTheme: (theme: string) => void;
}
