import React from 'react';
import { render } from 'react-dom';

import data from './src/api.json';
import Playlist from './src/playlist/components/playlist.jsx';

// console.log('Hola mundo!')

const app = document.getElementById('app')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(<Playlist data={data}/> , app);

