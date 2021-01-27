import React from 'react'
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/circled-play.png'
import addIcon from '../assets/static/add--v2.png'

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carrusel-item">
        <img className="carrusel-item__img" src={cover} alt="caballos" />
        <div className="carrusel-item__details">
            <div>
                <img src={playIcon} alt="playlogo"/>
                <img src={addIcon} alt="addlogo"/>
            </div>
            <p className="carrusel-item__details--title">{title}</p>
            <p className="carrusel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

export default CarouselItem;
