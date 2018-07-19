import React from 'react';
import { render } from 'react-dom';
import data from '../api.json';
import Home from '../pages/containers/home.jsx';

const app = document.getElementById('app')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(<Home data={data}/> , app);