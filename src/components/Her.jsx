import React from "react";

const Her = () => {
    return (
        <>
     <div className='container'>
        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1679822641172-d75e65b32dae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Let's make your
                product a success
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <button className="btn btn-warning sm:btn-wide">Get Started</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Her