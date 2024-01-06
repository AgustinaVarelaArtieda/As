import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from 'react';

import infoProductos from '../../utils/infoProductos';

function Carousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1600,
        centerMode: true,
        centerPadding: '1rem',
        
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    }
  
    //busqueda de informacion de las 'cards'
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await infoProductos(9); 
            setCards(data);
        } catch (error) {
            console.error(error);
            alert('error al traer la info para las cards')
        }
        };

        fetchData();
    }, []);

    return (
        <div style={{ backgroundColor: 'aquamarine',margin: '20px', justifyContent: 'center', width: '90%' }}>
            <Slider {...settings}>
                {cards.map((card,index)=>(
                    <div key={index}>
                        <img src={card.imagen} alt={card.nombre} title={card.nombre} width-max={200} height={300}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel