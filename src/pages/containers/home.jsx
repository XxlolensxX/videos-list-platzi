import React, { Component } from 'react';
import HomeLayout from '../components/homelayout.jsx';
import Categories from '../../categories/components/categories.jsx';
import Related from '../components/related.jsx';
import ModalContainer from '../../widgets/containers/modal.jsx';
import Modal from '../../widgets/components/modal.jsx';
import HandleError from '../../errors/containers/errors.jsx';
import VideoPlayer from '../../player/containers/videoplayer.jsx';

class Home extends Component {
    state = {
        modalVisible: false,
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }

    handleOpenModal = (event) => {
        this.setState({
            modalVisible: true
        })
    }

    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related /> 
                    <Categories 
                    categories={this.props.data.categories}
                    handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleCloseModal={this.handleCloseModal}
                            >
                                <VideoPlayer autoplay />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;