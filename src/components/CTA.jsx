import React from "react";

const CTA = () => {
    return (
        <section className='py-12 mt-12 md:py-24b bg-gradient-to-r from-[#e4e3e19a] via-zinc-50 to-[#e4e3e19a]'>
        <div className='container'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
            <span className='flex-grow text-4xl m-8 md:text-4xl xl:text-5xl font-bold text-black'> Fale conosco <br className='hidden sm:inline' /> <p className="text text-black"> Canal de atendimento via WhatsApp </p></span>
            <button className='btn border-none shadow-mdbg-gradient-to-r from-[#f0f0f08e] via-white to-[#ececec59] rounded-full sm:btn-lg'>            
              <a href="https://wa.me/5547999366122"> Whatsapp 1 </a>           
            </button>
            <button className='btn border-none shadow-mdbg-gradient-to-r from-[#f0f0f08e] via-white to-[#ececec59] rounded-full sm:btn-lg'>
              <a href="https://wa.me/5547997205614"> Whatsapp 2 </a>
            </button>
          </div>
        </div>
      </section>
    )

}

export default CTA