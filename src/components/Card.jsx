import React from "react"

      const Card = ({ nome, imagem, descricao, aroma }) => {
        return (
            <div className="card flex p-1.5 w-full bg-base-100 hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={imagem} alt="Modern building architecture"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{aroma}</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{nome}</a>
                <p className="mt-2 text-slate-500">{descricao}</p>
              </div>
            </div>
          </div>
        )
    }

    export default Card