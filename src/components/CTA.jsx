import React from "react";

const CTA = () => {
    return (
        <section className='py-12 md:py-24 bg-primary'>
        <div className='container'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
            <span className='flex-grow text-4xl m-8 md:text-5xl 2xl:text-6xl font-bold text-secondary'> Fale conosco para saber mais <br className='hidden sm:inline' /> Canal de atendimento via WhatsApp.</span>
            <button className='btn btn-neutral  rounded-full sm:btn-lg'>            
              <a href="https://wa.me/5547999366122"> Whatsapp 1 </a>           
            </button>
            <button className='btn btn-neutral rounded-full sm:btn-lg'>
              <a href="https://wa.me/5547997205614"> Whatsapp 2 </a>
            </button>
          </div>
        </div>
      </section>
    )

}

export default CTA