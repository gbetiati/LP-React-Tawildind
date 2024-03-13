import React from "react";

const Her = () => {
    return (
        <>
        <div className="container">
        <div className="hero rounded-xl min-h-[42em]" style={{backgroundImage: 'url(https://terrawellness.eco/cdn/shop/files/packvelas-_1.png?v=1699374931&width=493)'}}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-8 text-4xl font-bold">Seja bem vindo</h1>
                <p className="mb-8 font-semibold">As velas aromáticas são uma maneira fácil e agradável de incorporar a aromaterapia ao seu dia a dia. Com suas fragrâncias delicadas, elas podem ajudar a relaxar, aliviar o estresse, promover o sono tranquilo, aumentar a concentração e até mesmo estimular a criatividade. </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default Her