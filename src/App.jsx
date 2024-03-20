import './App.css'
import Navbar from './components/Navbar'
import Her from './components/Her'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Card from './components/Card'
import londres from "./assets/LONDRES.jpg"
import canela from "./assets/CANELA.jpg"
import cancun from "./assets/CANCUN.jpg"
import lavandaf from "./assets/LAVANDA FRANCESA.jpg"
import florc from "./assets/florCerejeira.jpg"
import florl from "./assets/florLaranjeira.jpg"
import vanilla from "./assets/VANILLA.jpg" 

import Gal from './components/Gal'
import Especiais from './components/Especiais'
import Kit from './components/Kit'

function App() {
 
  const itens = [ 
    {
      nome: 'LONDRES ',
      descricao: 'O aroma Londres, Jasmim Real foi inspirado nos passeios pelas gramados verdes dos diferentes parques londrinos, trazendo o encanto das lindas paisagens dos lagos, flores e plantas das mais diferentes espécies. Perfeito para escritório, quartos e sala de estar!',
      imagem: londres,
    },
    {
      nome: 'CANELA',
      descricao: 'Este aroma é ótimo para os casais mais que apaixonados, perfeita para criar climas de intimidades deixando-os mais conectados do que nunca. É um aroma intenso, quente, que atrai boas energias proporcionando o equilibro emocional, e afastando energias negativas, cansaço. Ótimo para aliviar a ansiedade!',
      imagem: canela,
    },
    {
      nome: 'CANCUN ',
      descricao: 'O aroma que expressa a calma e o calor das praias. Aroma este inspirado nas praias de Cancún que possuem climas tropicais únicos, ele nos traz frescor e doçura, e sensação maravilhosa da brisa do mar. Ótimo para sala de estar!',
      imagem: cancun,
    },
    {
      nome: 'FLOR DE LARANJEIRA',
      descricao: 'Essa essência possui um suave aroma frutal ideal para ser utilizado em ambientes de confraternização durante o dia. Aconchegante e acolhedor, essa fragrância proporciona sensações de alegria, prosperidade e alivia tensões.',
      imagem: florl,
    },
    {
      nome: 'FLOR DE CEREJEIRA',
      descricao: 'Essência floral frutado com notas balsâmicas com teor levemente amadeirado, uma essência top de vendas que remete à harmonia e à paz. É maravilhosa para concentração!',
      imagem: florc,
    },
      {
      nome: 'LAVANDA FRANCESA',
      descricao: 'A essência tem um aroma relaxante e tranquilizante capaz de tornar qualquer espaço mais sofisticado. Traz notas de lavanda com notas cítricas superficiais que harmonizam com os aromas mais marcantes de corpo e fundo. Esse cheirinho cria uma atmosfera pacífica, com toques de requinte e elegância.',
      imagem: lavandaf,
    },
    {
      nome: 'VANILLA',
      descricao: 'A baunilha (ou vanilla) Seu cheirinho traz mais doçura e energia ao ambiente. A Essência Vanilla é docemente aconchegante. As notas de baunilha proporcionam ao ambiente uma energia moderna e marcante. Por suas características estimulantes, eleva o bem-estar. É ideal para ser utilizado em ambientes residenciais, como hall de entrada ou dormitórios.',
      imagem: vanilla
    },
  ]


  

  return (
    <>
        <Navbar/>
        <Her/>

        
        <Gal/>
        <Services/>
        <Especiais/>

        <div className='mb-16' id='catalago'>     
        <div className='bg-gradient-to-r from-[hsla(47,100%,95%,1)] from-10% via-secondary via-30% to-[rgba(255,241,189,0.35)] p-5'>
        <h2 className="divider divider-primary mb-16 text-3xl sm:text-5xl font-bold my-16 text">Catálago</h2>
        <div class="my-4 grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-3">
        {itens.map(item => <Card
          key={item.nome}
          nome={item.nome}
          imagem={item.imagem}
          descricao={item.descricao}       
        />)}
        </div>
        </div>
        </div>
      
      
        <div id ="sobrenos">
          <About/>
        </div>
        

        <div id="cta">
          <CTA/>
        </div>
        
        <div className="footer">
          <Footer/>
        </div>
        
    </>
  )
}

export default App
