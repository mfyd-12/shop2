'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { useTheme } from 'next-themes'
import { ConfigProvider, theme } from 'antd'

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { theme: currentTheme } = useTheme()

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark'
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <AntdConfigProvider>{children}</AntdConfigProvider>
    </NextThemesProvider>
  )
}
