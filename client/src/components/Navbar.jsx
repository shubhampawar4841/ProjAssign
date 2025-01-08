import { Bell } from 'lucide-react'
import { navigationItems } from '../data/navigation'
import NavItem from './NavItem'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#2a3441]">
      <div className="flex items-center space-x-8">
        <div className="text-teal-400 text-2xl font-semibold">Firstbench</div>
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <NavItem key={item.text} {...item} />
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-400 cursor-pointer" />
        <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-1 cursor-pointer">
          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white">
            P
          </div>
          <span className="text-white">Profile</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

