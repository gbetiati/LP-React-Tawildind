import React from "react";

const CTA = () => {
    return (
        <section className='py-12 md:py-24 bg-primary'>
        <div className='container'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
            <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-secondary'>Let's make something <br className='hidden sm:inline' /> great together.</span>
            <button className='btn btn-neutral rounded-full sm:btn-lg'>Let's connect</button>
          </div>
        </div>
      </section>
    )

}

export default CTA