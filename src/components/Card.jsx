import React from "react"

      const Card = ({ nome, imagem, descricao}) => {
        return (
            <div className="card flex w-full bg bg-gradient-to-r from-[#99999925] via-[#ffffffe1] to-[#9999994d] to-82% shadow-md transition-shadow">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-auto w-full rounded-xl md:h-auto md:w-40" src={imagem} alt="architecture"/>
              </div>
              <div className="p-6 text-center md:text-left">
                <a className=" mt-4 text-2xl leading-tight font-bold text-black hover:underline">{nome}</a>
                <p className="mt-4 font-semibold">{descricao}</p>
                <br />
                <div className="badge badge-accent opacity-90"> R$ 80,00</div>
                
              </div>
            </div>
          </div>
        )
    }

    export default Card