import { useState } from 'react';
import  { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api'
function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  async function handleSearch () { 
        if(input === ''){
           alert('preencha algum cep')
           return
        }

        try { 
            const res = await api.get(`${input}/json`)
            setCep(res.data)
            setInput('')
        }catch { 
           alert('erro ao buscar')
         }
  }
 
  
  return (

     
    <div className="container">
           <h1 className="title">Teste Projeto</h1>

           <div className="containerInput">
                <input type="text" placeholder="Digite seu Cep"  value={input} onChange={(e) => setInput(e.target.value)}/>
            
                <button onClick={handleSearch} className='buttonsearch'>
                   <FiSearch size={25}/>
                </button>
           </div>
           {Object.keys(cep).length > 0 && (
                  <main className='main'>
                  <h2>CEP: {cep.cep}</h2>
                  <span>Cidade:{cep.localidade}</span>
                  <span>UF:{cep.uf}</span>
                  <span>DDD:{cep.ddd}</span>
                  <span>Bairro:{cep.bairro}</span>
                   
                  </main>

           )}
                      

          
         
    </div>
  );
}

export default App;
