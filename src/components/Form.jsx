import React, { useState } from 'react';
import '../styles/form.css'

const Form = () => {

  const [codigo, setCodigo] = useState("");
  const [titulo, setTitulo] = useState("");

  const criarTarefa = async () => {
    await fetch("http://localhost:3002/tarefas", 
    {
        method : "POST", 
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({"codigo" : codigo,
                               "titulo" : titulo})
    }).then(response =>  response.json())
      .then(json => alert(json))
}

  const [text, setText] = useState(null);


  return (
    <div className='input-tarefa'>
      <div className="form-floating">
          <input type="text" className="form-control bg-custom" id="floatingInputValue" placeholder='Digite a sua tarefa' onChange={(e) => setText(e.target.value)}/>
          <label for="floatingInputValue">Qual é a tarefa de hoje?</label>
          <button className="btn btn-primary me-md-2" type="submit" onClick={() => criarTarefa()}>Add</button>
      </div>
    </div>

  )
}

export default Form;
