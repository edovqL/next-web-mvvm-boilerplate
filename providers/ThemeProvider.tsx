import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
};
