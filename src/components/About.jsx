import React from "react";
import vellas from "../assets/vellas.png"

const About = () => {

    return ( 
      
       
     <div className="container text-left mb-16">
       <div className="hero min-h-[600px] rounded-tl-lg bg-gradient-to-r from-[#FFE4C4]">
        <div className="hero-content mr-16 p-2 flex-col md:flex-row-reverse justify-center items-center gap-6">
        <img src={vellas}  className="p-10 ml-14" />
            <div className="flex flex-col ml-14 max-w-full md:flex-col justify-center items-center gap-6 text-center md:text-start">
            <h1 className="text-4xl font-bold mb-4 ">Sobress nós</h1>
            <p className="py-6 font-semibold">Provident cupiditate vopiditate voluptatem et in cupiditate voluptatem etcupiditate voluptatem etcupiditate voluptatem et . Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
        </div>
      </div>
    )
}

export default About