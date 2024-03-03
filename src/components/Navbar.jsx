import React from "react"
import vellas from "../assets/vellas.png"



const Navbar = () => {
  return (
  <div className="container">
  <div className="navbar bg-secondary w-full">
  <div className="flex-1">


  <img 
      className="h-12 sm:h-14" 
      src={vellas} alt="a"
  />


  
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-[16px] font-light">
      <li><a>Sobre nós</a></li>
      <li><a>Contatos </a></li>
    </ul>
  </div>
</div>
</div>
)
}

export default Navbar