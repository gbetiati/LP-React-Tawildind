import React from "react"

const Services = () => {
    return (
        <>    
      <section className='py-10 md:py-16'>
        <div className='container'>
          <div className='text-center mt-12'>
            <h2 className=' text-3xl text-primary sm:text-5xl font-bold mb-4'> 
            O que fazemos </h2>
            <p className='text-lg sm:text-2xl mb-6 md:mb-14'>
              Produção de velas com material 100% orgânico
            </p>
          </div>
  
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:gap-8 xl:gap-10'>
            <div className="card card-normal bg-gradient-to-r from-[#e7d8a759] via-amber-50 to-[#e7d8a759] transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
                

              <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
              </svg>
              </p>

                <h2 className="card-title">Foco e Concentração: Inspirando sua Produtividade</h2>
                <p>
                Quando você precisa de um impulso de energia e foco, certos aromas de velas podem ajudar. Acenda uma vela aromática antes de começar uma tarefa importante e deixe que seu aroma revigore sua mente.
               </p>
              </div>
            </div>

            <div className="card card-normal bg-gradient-to-r from-[#e7d8a759] via-amber-50 to-[#e7d8a759] transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">
              
                <p className="mb-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                </svg>
                </p>

                <h2 className="card-title">Decoração e Estilo: Elegância em Cada Detalhe</h2>
                <p>
                Além dos benefícios terapêuticos, as velas aromáticas também adicionam um toque de beleza e estilo à decoração de qualquer ambiente. Com uma variedade de tamanhos, cores e designs, você pode escolher velas que se adaptem ao seu estilo pessoal e completem a atmosfera desejada.
                </p>
              </div>
            </div>
            <div className="card card-normal bg-gradient-to-r from-[#e7d8a759] via-amber-50 to-[#e7d8a759] transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center text-center gap-4">

              <p className="mb-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              </p>

                <h2 className="card-title">Relaxamento e Alívio do Estresse: Um Momento de Puro Descanso</h2>
                <p>
                Acender uma vela aromática pode ser um convite para um momento de relaxamento profundo, ajudando a acalmar a mente e o corpo. Crie seu próprio ritual de relaxamento com velas aromáticas e desfrute de momentos de tranquilidade em meio à agitação do dia a dia. São excelentes para ajudar na hora da medição ou trazer mais conforto emocional e prazer na hora do banho.
                </p>
              </div>
            </div>

                       
          </div>
        </div>
      </section>
        
        </>
    )
}

export default Services