function NavItem({ icon: Icon, text, active = false, isHighlighted = false }) {
    return (
      <div
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer
        ${active ? 'text-white' : 'text-gray-400'}
        ${isHighlighted ? 'text-teal-400' : ''}`}
      >
        <Icon size={18} />
        <span>{text}</span>
      </div>
    )
  }
  
  export default NavItem
  
  