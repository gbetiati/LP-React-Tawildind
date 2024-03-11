import React from "react"
import vellas from "../assets/vellas.png"



const Navbar = () => {
  return (
  <div className="container">
  <div className="navbar w-full">
  <div className="flex-1">


  <img 
      className="h-14 sm:h-16" 
      src={vellas} alt="a"
  />


  
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal font-semibold px-1 text-[14px]  sm:text-[16px] ">
      <li><a href="#sobrenos">Sobre nós</a></li>
      <li><a>Contatos </a></li>
    </ul>
  </div>
</div>
</div>
)
}

export default Navbar