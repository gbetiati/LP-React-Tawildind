import React from "react";
import kit from "../assestsespeciais/KIT.jpg"

const Kit = () => {
    return (
<div className="container">
<div className="hero min-h-auto bg-base-50">
  <div className="hero-content  p-8 flex-col lg:flex-row-reverse">
    <img src={kit} className="max-w-auto min-w-[22em] md: max-w-[20em] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold p-8 text-primary">Kits para presente</h1>
      <p className="py-6 font-semibold">

            1 Difusor de varetas e 1 vela aromática 200g - 190,00  
                <br /><br />
            1 Difusor de parede e 1 vela aromática 200g - 150,00
                <br /><br />
            1 Difusor de parede, 1 difusor de varetas e 1 vela aromática 200g - 220,00

      </p>
      <button className="btn btn-secondary m-8 shadow-lg"> <a href="#footer">Saiba mais</a></button>
    </div>
   </div> 
  </div>
</div>
    )
}

export default Kit