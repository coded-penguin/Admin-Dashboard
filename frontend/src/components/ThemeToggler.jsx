import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function ThemeToggler() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) return localStorage.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  })

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <button
      className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
        hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Moon className='w-5 h-5' />
      ) : (
        <Sun className='w-5 h-5' />
      )}
    </button>
  )
}

export default ThemeToggler
