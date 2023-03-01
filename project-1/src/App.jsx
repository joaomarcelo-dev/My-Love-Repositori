import { useState } from 'react'
import { To } from 'react-router-dom'

import './App.css'
import Coracao from './view/Coracao'
import Header from './components/Header/Header'

function App() {



  return (

  
    <div className='content-app'>
      <header>
        <Header />
      </header>
      <main>
        <h2>Feito com muito carinho para vc meu amor 🥰</h2>
        <img className='gif-moh' src="https://media.tenor.com/KMNpADKiJwYAAAAC/heart-love.gif" alt="" />
        <div className='text-one'>
          <p>
            Meu amor, vc é muito importante para mim. confesso para vc que nunca tinha sentido
            tanto amor por outra pessoa assim como sinto por vc... Vc é a luz que me ilumina a 
            flor mais linda de todo o mundo!!! Sua delicadeza, suas loucuras ksksks, seus sorrisos, 
            seu textos diários que vc me manda... tudo isso meu amor, contribuem para mim ser a 
            pessoa que sou hoje... hoje eu sou uma pessoa muito melhor graças a sua presença, graças 
            a sua perseverança e motivação... Não consigo nem imaginar o quanto sou grato amor, por 
            ter vc na minha vida... Akele nosso primeiro encontro, já me mostrou que era vc a pessoa 
            certa... E eu sou grato por ele ter acontecido... sou grato por vc ter me mandado mensagem 
            nakele dia que eu estava quase botando os bofes para fora ksksks, sou grato por vc aturar 
            minhas crises... e mais ainda... Sou muito grato por ter vc em minha vida. 
            <div>EU TE AMO MUITO!!!!</div>
          </p>
        </div>
        
        <To href={<Coracao />}>
          Continue...
        </To>
      </main>
    </div>
    
  )
}

export default App
