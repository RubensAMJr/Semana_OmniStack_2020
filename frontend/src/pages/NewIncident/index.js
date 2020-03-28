import React , {useState} from 'react';

import './styles.css'

import  { Link , useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api' 

export default function NewIncident(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setvalue] = useState('');

    const ongId = localStorage.getItem('ondId')
    const history = useHistory();

    async function handleNewIncident(e){
         e.preventDefault();

         const data = {
           title,
           description,
           value,
         };

         console.log(data);

         try {
            const response = await api.post('incidents',data , {
              headers: {
                Authorization: ongId,
              }
           })

          console.log(response)
         } catch (err) {
           alert('Erro ao cadastrar caso, tente novamente.')
         }
    }

    return <div className="new-incident">
    <div className="content">
      <section>
         <img src={ logoImg } alt="Be the hero"/>

         <h1>Cadastarar novo caso</h1>
         <p>Descreva o caso detalahdamente</p>

         <Link to="/profile" className=".back-link">
                  <FiArrowLeft />  
                  Voltar para Home
         </Link>
      </section>

      <form>
        <input 
          placeholder="Titulo do caso"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Descrição"
          value={description}  
          onChange={e => setDescription(e.target.value)}
        />
        <input
          placeholder="Valor em reais"
          value={value}
          onChange={e => setvalue(e.target.value)}
        />

        <button onClick={handleNewIncident} className="button" type="submit">Cadastrar </button>
      </form>

    </div>
   </div>
}