import React from "react"

const Services = () => {
    return (
        <>    
        <section className='py-10 md:py-16'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='text-3xl sm:text-5xl font-bold mb-4'>What We Do</h2>
            <p className='text-lg sm:text-2xl mb-6 md:mb-14'>
              Save time managing advertising & Content for your business.
            </p>
          </div>
  
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
              
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>

                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-chat-left-dots text-4xl'></i>
                <h2 className="card-title">Social Content</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-badge-ad text-4xl'></i>
                <h2 className="card-title">Creative ads</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-card-checklist text-4xl'></i>
                <h2 className="card-title">Brand Identity</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                <i className='bi bi-wallet2 text-4xl'></i>
                <h2 className="card-title">Budget & Marketing</h2>
                <p>
                  This is a wider card with <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
                </p>
              </div>
            </div>
  
            <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
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