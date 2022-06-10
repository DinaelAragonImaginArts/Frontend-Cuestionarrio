import Header from "../components/Header"
const Politica = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-3 items-center lg:justify-center md:justify-center text-white bg-quienes pt-20 lg:pt-0 md:pt-0'>
        <div>
          <h1 className='text-center lg:text-[7rem] text-5xl font-extrabold'>Politica de privacidad </h1>
        </div>
        <div className='p-4 lg:text-3xl text-xl font-medium lg:mt-[3rem] w-3/4'>
          <p className="font-bold">
            Visita al portal
          </p>
          <br></br>
          tu visita al portal es de manera anónima aunque guardaremos información para que los formularios realizados tengan datos confiables.
          <br></br>
          <p className="font-bold">
            Formularios
          </p>
          <br></br>
          Recopilamos los datos que se muestran en el formulario , así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.

          <br></br>
          <p className="font-bold">
            Cookies
          </p>
          <br></br>
          Si contestas un formulario en nuestro sitio se guardará información en formato de cookies. Esto es para que no se generen entradas al formulario por más de una misma persona y generen datos falsos. Estas cookies tendrán una duración de un año.
          <br></br>
          <br></br>
          Contenido incrustado de otros sitios web
          Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.
          <br></br>
          <br></br>
          Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.
          <br></br>
          <br></br>
          Con quién compartimos tus datos
          No compartimos tu información con ningún tercero.
          <br></br>
          <br></br>
          Cuánto tiempo conservamos tus datos
          Si respondes un formulario, sus metadatos se conservan indefinidamente.
          <br></br>
          <br></br>
          Dónde enviamos tus datos
          Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.
        </div>
      </div>
    </div>
  )
}

export default Politica;
