import React from 'react';
import Playlist from '../../playlist/components/playlist.jsx';
import './category.css';

const Category = (props) => {
   return(
       <div className="Category">
        <p className="Category__description">{props.description}</p>
        <h2 className="Category__title">{props.title}</h2>
        <Playlist 
        playlist={props.playlist} 
        handleOpenModal={props.handleOpenModal}
        />
       </div>
   )

}

export default Category;