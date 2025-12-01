import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-12 w-full px-8 py-3 bg-[#241436] border-[#f5f5f5] border-b">
        <li>Home</li>
        <li>Content</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
