import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <nav>
        <div>
          <h1>My app</h1>

          <button onClick={()=>setOpen(!open)}>
            {open ? "close" : "menu"}
          </button>

          {
            open && (
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Products</li>
              </ul>
            )
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
