import Header from "../components/Header"

const Quienes = () => {
  return (
    <>
    <Header />
      <div className='flex flex-col h-[100vh] gap-3 items-center lg:justify-center md:justify-center text-white bg-quienes pt-20 lg:pt-0 md:pt-0'>
        <div>
          <h1 className='text-center lg:text-[7rem] text-5xl font-extrabold'>QUIÉNES SOMOS</h1>
        </div>
        <div className='p-4 lg:text-3xl text-xl font-medium lg:mt-[3rem] w-3/4'>
          <p>Somos un grupo de ciudadanos de la frontera norte comprometidos y preocupados por las decisiones que se toman desde el centro del país. Queremos ser partícipes de los cambios que nos afectan a todas y todos, dentro y fuera de la periferia. ¡El norte también cuenta! Tú también puedes involucrarte, participar y dar forma al futuro de nuestra región.</p>
        </div>
      </div>
    </>
  )
}

export default Quienes