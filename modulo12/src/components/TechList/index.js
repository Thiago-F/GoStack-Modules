import React, {useState, useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux'

// import { Container } from './styles';

export default function TechList() {
  const dispatch = useDispatch();
  const [newTech , setNewTech] = useState('')

  const techs = useSelector(state => state.techs);
  
  function handleAddTechs() {
    dispatch({type : '@ADD_TECH' , payload : {tech : newTech}});
    setNewTech('')
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTechs}>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)}/>

      <button onClick={handleAddTechs}>Adicionar</button>
    </form>
  );
}