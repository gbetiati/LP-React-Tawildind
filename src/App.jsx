import './App.css'
import Navbar from './components/Navbar'
import Her from './components/Her'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Card from './components/Card'
import vellasop from "./assets/sop.png"

function App() {
 
  const itens = [ 
    {
      nome: 'LONDRES ',
      descricao: 'O aroma Londres, Jasmim Real foi inspirado nos passeios pelas gramados verdes dos diferentes parques londrinos, trazendo o encanto das lindas paisagens dos lagos, flores e plantas das mais diferentes espécies. Perfeito para escritório, quartos e sala de estar!',
    },
    {
      nome: 'CANELA',
      descricao: 'Este aroma é ótimo para os casais mais que apaixonados, perfeita para criar climas de intimidades deixando-os mais conectados do que nunca. É um aroma intenso, quente, que atrai boas energias proporcionando o equilibro emocional, e afastando energias negativas, cansaço. Ótimo para aliviar a ansiedade!',
    },
    {
      nome: 'CANCUN ',
      descricao: 'O aroma que expressa a calma e o calor das praias. Aroma este inspirado nas praias de Cancún que possuem climas tropicais únicos, ele nos traz frescor e doçura, e sensação maravilhosa da brisa do mar. Ótimo para sala de estar!',
    },
    {
      nome: 'FLOR DE LARANJEIRA',
      descricao: 'Essa essência possui um suave aroma frutal ideal para ser utilizado em ambientes de confraternização durante o dia. Aconchegante e acolhedor, essa fragrância proporciona sensações de alegria, prosperidade e alivia tensões.',
    },
    {
      nome: 'FLOR DE CEREJEIRA',
      descricao: 'Essência floral frutado com notas balsâmicas com teor levemente amadeirado, uma essência top de vendas que remete à harmonia e à paz. É maravilhosa para concentração!'},
    {
      nome: 'LAVANDA FRANCESA',
      descricao: 'A essência tem um aroma relaxante e tranquilizante capaz de tornar qualquer espaço mais sofisticado. Traz notas de lavanda com notas cítricas superficiais que harmonizam com os aromas mais marcantes de corpo e fundo. Esse cheirinho cria uma atmosfera pacífica, com toques de requinte e elegância.',
    },
    {
      nome: 'VANILLA',
      descricao: 'A baunilha (ou vanilla) Seu cheirinho traz mais doçura e energia ao ambiente. A Essência Vanilla é docemente aconchegante. As notas de baunilha proporcionam ao ambiente uma energia moderna e marcante. Por suas características estimulantes, eleva o bem-estar. É ideal para ser utilizado em ambientes residenciais, como hall de entrada ou dormitórios.',
    },
  ]


  

  return (
    <>
        <Navbar/>
        <Her/>
        <Services/>

        <div className='container mb-16'>
          
        <h2 className="divider divider-primary mb-16 text-3xl sm:text-5xl font-bold my-16 text">Catálago</h2>
        <div class="my-4 grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-3">
        {itens.map(item => <Card
          key={item.nome}
          nome={item.nome}
          imagem={vellasop}
          descricao={item.descricao}       
        />)}
        </div>
        </div>
      
        <div id ="sobrenos">
          <About/>
        </div>
        
        <CTA/> 
        <Footer/>
    </>
  )
}

export default App
