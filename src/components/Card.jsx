import React from "react"

      const Card = ({ nome, imagem, descricao}) => {
        return (
            <div className="card flex p- w-full bg-[rgba(199,187,144,0.3)] to-90% shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-auto w-full rounded-xl md:h-auto md:w-40" src={imagem} alt="architecture"/>
              </div>
              <div className="p-6 text-left">
                <a className=" mt-4 text-lg leading-tight font-bold text-black hover:underline">{nome}</a>
                <p className="mt-4 font-semibold">{descricao}</p>
              </div>
            </div>
          </div>
        )
    }

    export default Card