import React from "react";

const Her = () => {
    return (
        <>
        <div className="container">
        <div className="hero rounded-xl h-screen sm:min-h-[28em] max-h-screen mb-8" style={{backgroundImage: 'url(https://terrawellness.eco/cdn/shop/files/packvelas-_1.png?v=1699374931&width=493)'}}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-8 text-4xl font-bold text-neutral">Seja bem vindo</h1>
                <p className="mb-8 font-semibold text-primary">As velas aromáticas são uma maneira fácil e agradável de incorporar a aromaterapia ao seu dia a dia. Com suas fragrâncias delicadas, elas podem ajudar a relaxar, aliviar o estresse, promover o sono tranquilo, aumentar a concentração e até mesmo estimular a criatividade. </p>
                

                <button className="btn btn-neutral"> <a href="https://wa.me/5547999366122"></a>Fale conosco</button>
              </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default Her