"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes"

export const ThemeProvider = ({ children, ...props }) => {
    return (
        <NextThemeProvider {...props}>
        {children}
        </NextThemeProvider>
    )
}