import React from "react";
import vellas from "../assets/vellas.png"

const About = () => {

    return (    
     <div className="container text-left mb-4">
       <div className="hero min-h-[600px] rounded-tl-lg bg-gradient-to-r from-[#FFE4C4]">
        <div className="hero-content mr-20 p-8 flex-col md:flex-row-reverse">
        <img src={vellas}  className="p-10 ml-14" />
    
            <div>
            <h1 className="text-5xl font-bold mb-4">Sobress nós</h1>
            <p className="py-6">Provident cupiditate voluptatem et in cupiditate voluptatem etcupiditate voluptatem etcupiditate voluptatem et . Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
        </div>
      </div>
    )
}

export default About