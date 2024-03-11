import React from "react"

      const Card = ({ nome, imagem, descricao}) => {
        return (
            <div className="card flex p-1.5 w-full bg-gradient-to-r from-[#e7d8a759] from-10% via-secondary via-30% to-[#e7d8a759] to-90% hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-[32em] w-full rounded-xl md:h-auto md:w-40" src={imagem} alt="Modern building architecture"/>
              </div>
              <div className="p-6 text-left">
                <a href="#" className=" mt-4 text-lg leading-tight font-medium text-black hover:underline">{nome}</a>
                <p className="mt-2 font-thin">{descricao}</p>
              </div>
            </div>
          </div>
        )
    }

    export default Card