import React from "react";
import raw from "../assetsgalery/raw.jpg"
import rosa from "../assetsgalery/rosa emb.jpg"
import azulemb from "../assetsgalery/azulembalagem.jpg"
import pinkraw from "../assetsgalery/pinkraw.jpg"
import velas from "../assetsgalery/velas.jpg"
import velac from "../assetsgalery/velac.png"
import embdourada from "../assetsgalery/embdourada.jpg"

const Gal = () => {
    return (
        <>
        <div className="container">
        
        <section class="text-center mt-32">

        <div className='text-center'>
           
           <h2 className=' text-3xl text-primary sm:text-5xl font-bold mb-8'> 
            Conheça as Velas aromáticas </h2>
            <p className='text-lgsm:text-2xl mb-1 md:mb-1'>
            As velas aromáticas são uma maneira fácil e agradável de incorporar a aromaterapia ao seu dia a dia. Com suas fragrâncias delicadas, elas podem ajudar a relaxar, aliviar o estresse, promover o sono tranquilo, aumentar a concentração e até mesmo estimular a criatividade.            </p>
          </div>
  <div class=" py-4 mx-auto flex flex-wrap">   
    </div>
    <div class="flex flex-wrap md:-m-1 -m-1 ">
      <div class="flex flex-wrap w-1/2 ">
        <div class="md:p-2 p-1 w-1/2 ">
          <img alt="gallery" class="w-full object-cover h-full object-center block rounded-tl-lg" src={azulemb}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={velac}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={rosa}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block rounded-tr-lg" src={velas}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={raw}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={pinkraw}/>
        </div>

        
      </div>
      
      <div class=" sm: flex flex-wrap w-full">
        <div class=" md:h-screen sm:p-2 p-1 w-full h-[22em]">
          <img alt="gallery" class="w-full h-full object-cover object-center block rounded-b-lg" src={embdourada}/>
        </div>
        
       
        
      </div>



      
   
  </div>
</section>




</div>

        
        </>
    )
}

export default Gal