import React from "react";

import bubq from "../assestsespeciais/bubq.jpg"
import bubr from "../assestsespeciais/bubr.jpg"
import esp from "../assestsespeciais/especial.jpg"
import esp1 from "../assestsespeciais/especial1.jpg"


const Especiais = () => {
    return(
    <section className='py-10 mb-10 md:py-16'>
            <div className='container'>
              <div className='text-center mt-12'>
                <div className="divider divider-primary">
                    
                <h2 className=' text-3xl text-black my-5 sm:text-5xl font-bold'> 
                Especiais </h2>
                    </div>
              </div>
              
              <div class="container mx-auto px-5 py-10">

    <div class="grid grid-cols-2 md:grid-cols-4">
      
  
  
 
   <div class="w-full p-4 md:w-1/ lg:w-full">
    <a class="relative block h-48 overflow-hidden rounded">
      <img alt="ecommerce" class="block h-full w-full object-cover object-center" src={esp} />
    </a>
    <div class="mt-4">
      <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">Vela aromática</h3>
      <h2 class="title-font text-lg font-medium text-gray-900">Molde flor</h2>
      <p class="mt-1">R$ 40,00</p>
    </div>
  </div>

   <div class="w-full p-4 md:w-1/ lg:w-full">
    <a class="relative block h-48 overflow-hidden rounded">
      <img alt="ecommerce" class="block h-full w-full object-cover object-center" src={bubr} />
    </a>
    <div class="mt-4">
      <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">Vela aromática</h3>
      <h2 class="title-font text-lg font-medium text-gray-900">Molde Bubble</h2>
      <p class="mt-1">R$ 50,00</p>
    </div>
  </div>


  <div class="w-full p-4 md:w-1/ lg:w-full">
    <a class="relative block h-48 overflow-hidden rounded">
      <img alt="ecommerce" class="block h-full w-full object-cover object-center" src={bubq} />
    </a>
    <div class="mt-4">
      <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">Vela aromática</h3>
      <h2 class="title-font text-lg font-medium text-gray-900">Molde Bubble Coração</h2>
      <p class="mt-1">R$ 50,00</p>
    </div>
  </div>

  <div class="w-full p-4 md:w-1/ lg:w-full">
    <a class="relative block h-48 overflow-hidden rounded">
      <img alt="ecommerce" class="block h-full w-full object-cover object-center" src={esp1}/>
    </a>
    <div class="mt-4">
      <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">Vela aromática</h3>
      <h2 class="title-font text-lg font-medium text-gray-900">Vela em Cerâmica</h2>
      <p class="mt-1"> Consultar valor </p>
    </div>
  </div>


  </div>
  </div>
         

       
  </div>
  </section>




    )
}

export default Especiais