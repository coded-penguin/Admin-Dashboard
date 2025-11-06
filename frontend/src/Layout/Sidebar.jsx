import React, { useState } from 'react'
import Logo from '../components/Logo'
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  ChevronDown
} from 'lucide-react'

const MenuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permission" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ]
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
]

export default function Sidebar({ collapsed, currentPage, onPageChange }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpanded = (item_id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(item_id)) {
      newExpanded.delete(item_id);
    } else {
      newExpanded.add(item_id);
    }

    setExpandedItems(newExpanded);
  }

  return (
    <div className={`${collapsed ? 'w-20' : 'w-72'} transition-all duration-300 ease-in-out
      bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50
      flex flex-col relative z-10`}
    >
      {/* Logo */}
      <Logo collapsed={collapsed} />

      {/* Navigation */}
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar'>
        {MenuItems.map((item) => {
          return (
            <div key={item.id}>
              <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors
                                ${currentPage === item.id
                                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}
                      onClick={() => {
                        if (item.submenu) {
                          toggleExpanded(item.id);
                        } else {
                          onPageChange(item.id);
                        }
                      }}
              >
                <div className='flex items-center space-x-3 max-h-5'>
                  <item.icon className={`w-5 h-5`} />
                  {/* Conditional Rendering */}
                  {!collapsed && (
                    <>
                      <span className='font-medium ml-2 whitespace-nowrap'>{item.label}</span>

                      {item.badge && (
                        <span className='px-2 py-1 text-xs bg-red-500 text-white rounded-full'>
                          {item.badge}
                        </span>
                      )}

                      {item.count && (
                        <span className='px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700
                          text-slate-600 dark:text-slate-300 rounded-full'
                        >
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown className='w-4 h-4 text-slate-700 dark:text-slate-200 transition-transform' />
                )}
              </button>

              {/* Submenus */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className='ml-8 mt-2 space-y-1'>
                  {item.submenu.map((subitem) => {
                    return (
                      <button
                        className='w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400
                          hover:text-slate-800 dark:hover:text-slate-200
                          hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all'
                        key={subitem.id}
                      >
                        {subitem.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className='py-4 px-1.5 border-t border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
          <img
            src=""
            alt="user"
            className='w-10 h-10 min-w-10 rounded-full ring-2 ring-blue-500'
          />

          {!collapsed && (
            <div className='flex-1 min-w-0'>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Name Surname</p>
                <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>Administrator</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
