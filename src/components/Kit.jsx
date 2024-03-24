import React from "react";
import kit from "../assestsespeciais/KIT.jpg"

const Kit = () => {
    return (   
        <>
      <div className="container"> 
      <div className="divider divider-primary">
              
          <h2 className=' text-3xl text-black my-5  sm:text-5xl font-bold'> 
          Kits </h2>
      </div>

      <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mt-8">
        <img
          width={380} 
           src={kit}
           className="max-w-sm rounded-md shadow-2xl" />
        </div>
        <div>
          
        <h1 className="text-3xl font-bold p-8 text-primary">Escolha seu pacote</h1>
      <p className="py-6 font-semibold">

            1 Difusor de varetas e 1 vela aromática 
            <br />
            200g - 190,00  
            <br /><br />

            1 Difusor de parede e 1 vela aromática 
            <br />
            200g - 150,00
            <br /><br />

            1 Difusor de parede, 1 difusor de varetas e 1 vela aromática
            <br />
             200g - 220,00

      </p>

         
        </div>
      </div>
    </div>
    </div>
    </>
    )
}

export default Kit