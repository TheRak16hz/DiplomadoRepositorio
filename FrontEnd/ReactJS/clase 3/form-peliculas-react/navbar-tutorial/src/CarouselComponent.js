import React from "react";
import { Carousel } from "react-bootstrap";
import './App.css'


const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/image1.jpeg"
                    alt="Primera Imagen"
                />
                <Carousel.Caption>
                    <h3>Primera imagen</h3>
                    <p>Descripcion de la primera imagen</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/image2.jpeg"
                    alt="Segunda Imagen"
                />
                <Carousel.Caption>
                    <h3>Segunda imagen</h3>
                    <p>Descripcion de la segunda imagen</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/image3.jpeg"
                    alt="Tercera Imagen"
                />
                <Carousel.Caption>
                    <h3>Tercera imagen</h3>
                    <p>Descripcion de la tercerae imagen</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/image4.jpeg"
                    alt="Cuarta Imagen"
                />
                <Carousel.Caption>
                    <h3>Cuarta imagen</h3>
                    <p>Descripcion de la cuarta imagen</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;