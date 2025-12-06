  "use client"

  import React from 'react'
  import { useTheme } from "next-themes"
  import { Header } from '@/components/header'
  import { Languages, BellRing, Shield, HelpCircle, Info } from 'lucide-react'
  import { Card, List } from 'antd';
  import { useLanguage } from '@/lib/language-context'
  import { ThemeToggleButton } from '@/components/theme-toggle-button'

  export default function SettingsPage() {
    const { theme, setTheme } = useTheme()
    const { t } = useLanguage()

    const settingKeys = ['language', 'theme', 'notifications', 'privacy', 'help', 'about'];

    const settings = settingKeys.map(key => {
      switch (key) {
        case 'theme':
          return {
            key,
            title: t('theme'), // Changed to generic 'theme' as the toggle button handles text
            icon: <ThemeToggleButton />, // Render the ThemeToggleButton directly
            action: () => {}, // Action handled by the ThemeToggleButton internally
          };
        default:
          return {
            key,
            title: t(key),
            icon: {
              language: <Languages />,
              notifications: <BellRing />,
              privacy: <Shield />,
              help: <HelpCircle />,
              about: <Info />,
            }[key],
            action: null,
          };
      }
    });

    return (
      <div>
        <Header />
        <div className="p-5 bg-background text-foreground min-h-screen">
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={settings}
            renderItem={item => (
              <List.Item>
                {item.key === 'theme' ? (
                  <div className="flex items-center justify-center flex-col h-full bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    {item.icon}
                    <span className='mt-2'>{item.title}</span>
                  </div>
                ) : (
                  <Card hoverable onClick={item.action ? () => item.action() : undefined} className="bg-card text-foreground">
                    <div className='flex items-center justify-center flex-col h-full'>
                      {item.icon}
                      <span className='mt-2'>{item.title}</span>
                    </div>
                  </Card>
                )}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }