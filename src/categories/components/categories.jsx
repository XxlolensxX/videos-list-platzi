import React from 'react';
import Category from './category.jsx';
import './categories.css';
import SearchContainer from '../../widgets/search/containers/searchcontainer.jsx';

const Categories = (props) => {
    console.log(props);
    return(
    <div className="Categories">
        <SearchContainer />
        {
            props.categories.map( (item) => {
                return (
                <Category 
                {...item} 
                key={item.id}
                handleOpenModal={props.handleOpenModal}
                />
            )
            })           
        }
    </div>
    )
}

export default Categories