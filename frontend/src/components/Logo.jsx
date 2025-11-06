import React from 'react'
import { Activity } from 'lucide-react'

function Logo({ collapsed }) {
  return (
    <div className='py-6 px-4 border-b border-slate-200/50 dark:border-slate-700/50'>
      <div className='flex items-center space-x-3'>
        <div className='w-11 h-11 min-w-11  bg-linear-to-r from-blue-600 to-purple-600 rounded-xl
          flex items-center justify-center shadow-lg'
        >
          <Activity className='w-5 h-5 text-white'/>
        </div>

        {/* Conditional Rendering */}
        {!collapsed && (
          <div className='transition-all max-h-11'>
            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
              Pulse
            </h1>
            <p className=' whitespace-nowrap text-xs text-slate-500 dark:text-slate-400'>
              Admin Panel
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Logo
