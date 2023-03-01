import './style.scss';
import { useState } from 'react'
import Header from '../../components/Header/Header';
import moh from '../../assets/videos/VID_46010923_234457_536.mp4'

export default function Coracao () {
  const [count, setCount] = useState(0)

    return (
        <div className='container-coracao'>
            <header>
                <Header />
            </header>
            <main>
                <h2>
                    {count == 0? 'Clica ai no coração amor': console.log(count)}
                    {count == 1? <span>Devagar amor!!! 🙁 <br /> Clica de novo ai oxente <br /> 🤦‍♂️</span>: console.log(count)}
                    {count == 2? 'Eu te amo de mais minha gostosa!!!': console.log(count)}

                </h2>
                {/* <button onClick={() => setCount((count) => count < 10? count + 1: count + 0)}>Continue...</button> */}

                <div
                    onClick={() => setCount((count) => count < 2? count + 1: count + 0)}
                >
                    {count == 0? 
                        <img src="https://magiagifs.com.br/wp-content/uploads/2019/08/gifs-coracao-pulsando-apaixonado2.gif" alt="" />
                        : console.log(count)
                    }

                    {count == 1? 
                        <img className='coracao-partido' src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52878/broken-heart-emoji-clipart-md.png" alt="" />
                        : console.log(count)
                    }

                    {count == 2? 
                        <video className='video' width="100%" height="240"  autoplay="autoplay">
                            <source src={moh} type="video/mp4" />
                        </video>
                        : console.log(count)
                    }
                    
                </div>
                

                <p className='text-one'>{count == 2?
                    <span>Vc é meu grande amor e a mulher que sempre vou querer ter ao meu lado!!! <br /> <br /> <strong>Eu te amo muito minha princesa <br /> 😍💍</strong> <br /><br /><br /> Sei que ficou meio simples... mas saiba que meu amor por vc vai muito além do que apenas uma demonstração de afeto <br /> 🥹🥹🥹</span>
                    
                    : console.log(count)
                }</p>
                

            </main>
        </div>

    )
}