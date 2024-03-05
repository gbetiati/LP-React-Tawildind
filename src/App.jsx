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
      nome: 'ola',
      descricao: 'desccccc',
      aroma: 'cheiro bom',
    },
    {
      nome: 'hello',
      descricao: 'This is  wider card with supporting text below as a natural content.',
      aroma: 'aromaa bom',
    },
    {
      nome: 'ola',
      descricao: 'desccccc',
      aroma: 'cheiro bom',
    },
    {
      nome: 'ola',
      descricao: 'desccccc',
      aroma: 'cheiro bom',
    },
  ]


  

  return (
    <>
        <Navbar/>
        <Her/>
        <Services/>

        <div className='container mb-16'>
        <div className="divider divider-primary my-16 text text-4xl font-bold">Catálago</div>
        <div class="my-4 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-34">
        {itens.map(item => <Card
          key={item.nome}
          nome={item.nome}
          imagem={vellasop}
          descricao={item.descricao}  
          aroma={item.aroma}        
        />)}
        </div>
        </div>
      
        <About/>
        <CTA/> 
        <Footer/>
    </>
  )
}

export default App
