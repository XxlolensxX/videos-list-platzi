import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent { 
  
  render() {
    
    return (
      <div className="Media" onClick={this.props.handleOpenModal}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

//validation
Media.PropTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['video','audio'])
}

export default Media;

