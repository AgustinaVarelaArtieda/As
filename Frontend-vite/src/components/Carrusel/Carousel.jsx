import Slider from 'react-slick'
import { useState, useEffect } from 'react';

import infoProductos from '../../utils/infoProductos';

function Carousel(){
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        
    }

    //busqueda de informacion de las 'cards'
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await infoProductos(6); 
            setCards(data);
        } catch (error) {
            console.error(error);
            alert('error al traer la info para las cards')
        }
        };

        fetchData();
    }, []);
    
    console.log(cards)
    return (
        <Slider {...settings}>
            {cards.map((card,index)=>(
                <div key={index}>
                    <h3>{card.nombre}</h3>
                    <img src={card.imagen} alt={card.nombre} width={100} height={100}/>
                </div>
            ))}
        </Slider>
    )
}

export default Carousel