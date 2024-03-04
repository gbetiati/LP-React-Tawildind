import React from "react"

const Services = () => {
    return (
        <>    
      <section className='py-10 md:py-16'>
        <div className='container'>
          <div className='text-center'>
            <h2 className=' text-3xl sm:text-5xl font-bold mb-4'> 
            O que fazemos </h2>
            <p className='text-lg sm:text-2xl mb-6 md:mb-14'>
              Produção de velas com material 100% orgânico
            </p>
          </div>
  
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
            <div className="card bg-gradient-to-r from-[#6e6138] to-[#FFFAF0] hover:from-[#FFFAF0] hover:to-[#6e6138] border-2 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
              
              

                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-neutral border-2 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-chat-left-dots text-4xl'></i>
                <h2 className="card-title">Social Content</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-neutral border-2 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-badge-ad text-4xl'></i>
                <h2 className="card-title">Creative ads</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-neutral border-2 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-card-checklist text-4xl'></i>
                <h2 className="card-title">Brand Identity</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-neutral border-2 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-wallet2 text-4xl'></i>
                <h2 className="card-title">Budget & Marketing</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-neutral border-2 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-funnel text-4xl'></i>
                <h2 className="card-title">Optimize conversions</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}

export default Services