import React, { useState } from 'react';
import Form from '../components/Form';
import '../styles/home.css';
import List from '../components/List'






const Home = () => {

  return (
    <div className="container-form">
        <h1>Sua Lista de Tarefas</h1>
        <Form/>
        <List>
        </List>
    </div>

  )
}

export default Home;
