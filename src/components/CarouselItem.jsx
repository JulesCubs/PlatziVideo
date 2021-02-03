import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/circled-play.png';
import addIcon from '../assets/static/add--v2.png';
import deleteIcon from '../assets/static/trash-logo.png';

const CarouselItem = (props) => {  
    const { id, cover, title, year, contentRating, duration, isList } = props; 
    /*Tambien se puede realizar asi el llamado a props, como inicio de la funcion 
    const CarouselItem = ({ cover, title, year, contentRating, duration }) => {  */ 

    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return (
        <div className="carrusel-item">
            <img className="carrusel-item__img" src={cover} alt="caballos" />
            <div className="carrusel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img src={playIcon} alt="playlogo" />
                    </Link>
                    {isList
                        ? <img src={deleteIcon} alt="deletelogo" onClick={() => handleDeleteFavorite(id)} />
                        : <img src={addIcon} alt="addlogo" onClick={handleSetFavorite} />
                    }
                </div>
                <p className="carrusel-item__details--title">{title}</p>
                <p className="carrusel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);
