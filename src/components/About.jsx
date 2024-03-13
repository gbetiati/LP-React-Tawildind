import React from "react";
import vellas from "../assets/vellas.png"

const About = () => {

    return ( 
      
       
     <div className="container text-left mb-36 mt-36">
       <div className="hero min-h-[38em] rounded-tl-lg bg-gradient-to-r from-[#FFE4C4]">
        <div className="hero-content mr-16 p-1 flex-col md:flex-row-reverse justify-center items-center gap-6">
        <img src={vellas}  className="p-10 ml-14" />
            <div className="flex flex-col ml-14 w-full md:flex-col justify-center items-center gap-6 text-center md:text-start">
            <h1 className="text-5xl font-bold mb-8 mt-10">Sobre nós</h1>
            <p className="mb-12 mt-4 font-medium"> Somos uma empresa de velas aromáticas, produzidas com ceras <strong>100% vegetais, sem adição de parafina</strong>, o que garante a você e sua família segurança durante a queima. Trabalhamos com diversos modelos exclusivos, sempre aperfeiçoando nossas ideias, deixando cada vez mais sofisticado para <strong>decorar e perfumar sua casa!</strong> Escolha um modelo para viajar e aproveite cada segundo do aconchego que ela irá entregar. Será um prazer atendê-lo! <p className="text-xl"> Vellas Essence SN. </p> </p>
            </div>
        </div>
        </div>
      </div>
    )
}

export default About