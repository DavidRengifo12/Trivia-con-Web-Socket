import { useState, useEffect } from 'react';
import "./styles/StylesSlider.css";
import { useNavigate } from 'react-router-dom';
import { CgArrowLongLeft,CgArrowLongRight } from "react-icons/cg";

import img1 from './img/fonodtriviadash.webp'
import img2 from './img/triviass2.jpg'
import img3 from './img/fonodtrivihome.webp'

export default function SliderHome() {
  const navegar = useNavigate();

  const images= [
    `url(${img1})`,
    `url(${img2})`,
    `url(${img3})`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (direction) => {
    const totalSlides = images.length;
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = totalSlides - 1;
      if (newIndex >= totalSlides) newIndex = 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section
      id="home"
      className="hero-section-home"
      style={{ backgroundImage: images[currentIndex] }}
    >
      <div className="container-home">
        <div className="hero-content-home">
          <div className="hero-subtitle-home">
            <span>Juguemos un Rato</span>
          </div>
          <h1 className="hero-title-home h1-home">
            ¿Que Esperas para Jugar?<span className="highlight-home">Diviértete</span> Jugando TriviaQuest
          </h1>
          <div className="hero-actions-home">
            <button className="bg-teal-700 text-white rounded-full w-35 h-15 cursor-pointer m-1  hover:bg-white hover:text-teal-500 " onClick={() => navegar('/namemoderador')}>Sala</button>
            <button className="bg-teal-700 text-white rounded-full w-35 h-15 cursor-pointer  hover:bg-white hover:text-teal-500" onClick={() => navegar('/unirsesala')}>Unirse a la Sala</button>
          </div>
        </div>
      </div>

      <div className="hero-controls-home">
        <button
          className="hero-control-home prev-home"
          id="btn-prev-home"
          onClick={() => moveSlide(-1)}
        >
          <i className="icon-arrow-left-home"><CgArrowLongLeft /></i>
        </button>
        <button
          className="hero-control-home next-home"
          id="btn-next-home"
          onClick={() => moveSlide(1)}
        >
          <i className="icon-arrow-right-home i-home"><CgArrowLongRight /></i>
        </button>
      </div>
    </section>
  );
}
