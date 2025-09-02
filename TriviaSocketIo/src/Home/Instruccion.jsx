export default function Instruccion() {
  return (
    <>
      <section className="p-4 md:p-8 lg:p-20" id="instrucciones">
        <h1 className="flex justify-center text-center text-2xl text-teal-700 m-5">INSTRUCCIONES TRIVIAQUEST</h1>
        <div className="max-w-7xl mx-auto  bg-neutral-300">
          <div className="rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-teal-700 p-6  flex items-center gap-4 md:gap-8">
              <div className="font-bold text-4xl">🎮</div>
              <h3 className="text-3xl sm:text-4xl  font-bold m-0 text-white tracking-tighter">Instrucciones</h3>
            </div>
            <div className="p-4 sm:p-6 md:p-10 text-sky-800 fondo-image-intruccion">
              <div className="bg-teal-700 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 p-4 rounded-xl shadow-lg ">
                <span className="bg-teal-300 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-md">1</span>
                <p className="m-0 text-white font-semibold text-sm sm:text-base">
                  <strong>Comienza a Jugar:</strong> Haz clic en "Iniciar Juego", ingresa el código de la sala proporcionado por el moderador y coloca tu apodo. Luego, espera a que el moderador inicie el juego. Cuando esté listo, presiona "Continuar" para comenzar a responder las preguntas.
                </p>
              </div>
              <div className="bg-teal-700 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 p-4 rounded-xl shadow-lg ">
                <span className="bg-teal-300 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-md">2</span>
                <p className="m-0 text-white font-semibold text-sm sm:text-base">
                  <strong>Responde Rápido y Gana Puntos:</strong> Tienes 30 segundos para elegir la respuesta correcta entre las cuatro opciones. Cada respuesta correcta te otorga puntos. Si contestas rápidamente, obtendrás más puntos. ¡Asegúrate de acumular tantos como puedas antes de que se acabe el juego!
                </p>
              </div>
              <div className="bg-teal-700 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 p-4 rounded-xl shadow-lg ">
                <span className="bg-teal-300 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-md">3</span>
                <p className="m-0  text-white font-semibold text-sm sm:text-base">
                  <strong>Finaliza y Consulta tu Puntaje:</strong> El juego termina cuando todas las preguntas han sido respondidas o el tiempo se acaba. Al final, podrás ver tu puntaje final y tu ranking comparado con otros jugadores. ¡Intenta mejorar tu puntaje cada vez que juegues!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}