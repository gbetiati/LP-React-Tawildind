import React from "react";

const Her = () => {
    return (
        <>
     <div className='container'>
        <div className="hero h-98 md:h-[650px] rounded-box overflow-hidden mb-16 mt-[3em]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1602607203559-d38903b80507?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                 Você merece o que a vida tem de melhor
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
               Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo
              </p>
             
              <button className="btn bg-gradient-to-r from-neutral via-secondary to-neutral border-none hover:bg-gradient-to-t p-2 bg-grad sm:btn-sm md:btn-md lg:btn-lg">Fale conosco</button>


             
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Her