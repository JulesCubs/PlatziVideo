import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState/';

const App = () => {
    const initialState = useInitialState(API); //Uso custom hook
    /* React Hooks useState y use Effect
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);*/

    /* podemos validar que exista myList agregando un “?” posterior a la propiedad, se llama Optional Chaining */
    return (
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist?.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                        {initialState.mylist?.map(item =>
                            <CarouselItem key={item.id} { ...item }/>
                        )}
                    </Carousel>
                </Categories>
            )}
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends?.map(item =>
                        <CarouselItem key={item.id} { ...item }/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {initialState.originals?.map(item =>
                        <CarouselItem key={item.id} { ...item }/>
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    );
}

export default App;