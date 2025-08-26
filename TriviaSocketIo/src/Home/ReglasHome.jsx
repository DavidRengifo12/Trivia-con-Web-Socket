import "./styles/StylesReglas.css"

import imgTrivia from './img/triviaOrginal11.jpg'

export default function ReglasHome() {
  return (
    <section id="about" className="about-section-home">
      <div className="container-home">
        <h2 className="section-title-home h3-home">Reglas TriviaQuest</h2>
        
        <div className="about-content-home">
          <div className="about-image-home">

           <img src={imgTrivia} alt="trivia" className='img-home' />

      
          </div>
          <div className="about-text-home">
            <h3 className='h3-home'><strong>De que trata el Juego</strong></h3>
            <p className='p-home'>Trivia Quest es un juego de preguntas y respuestas diseñado para poner a prueba tus conocimientos en diferentes áreas. ¿Te consideras un experto en historia, ciencia, cine o deportes? Este es el juego perfecto para ti.</p>
             
             <h3 className='h3-home'><strong>¿Como Jugar?</strong></h3>
            <p className='p-home'>En Trivia Quest, deberás responder a una serie de preguntas que aumentan en dificultad a medida que avanzas. Tendrás que elegir entre varias opciones de respuesta, pero solo una es la correcta. ¡No te preocupes! Si te atoras, siempre podrás seguir adelante y mejorar en la siguiente ronda.</p>
            
            
            <div className="about-features-home">
              <div className="feature-item-home">
                <div className="feature-icon-home">
                  <i className="icon-check-home"></i>
                </div>
                <div className="feature-text-home">
                  <h4 className='h3-home'><strong>Caracteristicas del Juego</strong></h4>
                  <p className='p-home'><strong>Variedad de Categorías:</strong> Preguntas de diferentes temas: cultura general, ciencia, arte, tecnología y mucho más.</p>
                  <p className='p-home'><strong>Desafíos Interactivos:</strong> Responde rápidamente para ganar más puntos. ¿Podrás batir tu propio récord?</p>
                  <p className='p-home'><strong>Competencia Global:</strong> Compara tu puntuación con la de otros jugadores y compite por el primer lugar en el ranking.</p>
                  <p className='p-home'><strong>Diversión Sin Límites:</strong>Ya sea que estés jugando solo o con amigos, siempre habrá algo nuevo que descubrir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}