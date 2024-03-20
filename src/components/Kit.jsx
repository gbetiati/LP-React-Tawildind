import React from "react";
import kit from "../assestsespeciais/KIT.jpg"

const Kit = () => {
    return (

<div className="hero  max-w-screen-sm bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={kit} className="max-w-sm rounded-lg shadow-2xl" />
 <div>
      <h1 className="text-5xl font-bold p-8 text-primary">Kits para presente</h1>
      <p className="py-6 font-semibold">

            1 Difusor de varetas e 1 vela aromática 200g - 190,00  
                <br /><br />
            1 Difusor de parede e 1 vela aromática 200g - 150,00
                <br /><br />
            1 Difusor de parede, 1 difusor de varetas e 1 vela aromática 200g - 220,00

      </p>
      <button className="btn btn-secondary m-8 shadow-lg"> <a href="#footer">Saiba mais</a></button>
    </div>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    )
}

export default Kit