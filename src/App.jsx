import axios from 'axios';
import { useState, useEffect } from 'react';
import clienteAxios from './config/clienteAxios';
import Finaly from './components/Finaly';
import Header from './components/Header';
import facebook from './facebook.png';
import Footer from './components/Footer';

const App = () => {
  const [ip, setIP] = useState({});
  const [edad, setEdad] = useState('')
  const [genero, setGenero] = useState('')
  const [preguntaUno, setPreguntaUno] = useState('');
  const [preguntaDos, setPreguntaDos] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [ipCity, setIpCity] = useState('');
  const [ipState, setIpState] = useState('');
  const [postal, setPostal] = useState('');
  const [final, setFinal] = useState(false);
  const [valid, setValid] = useState(false);
  const [valid1, setValid1] = useState(false);
  const [valid2, setValid2] = useState(false);
  const [valid3, setValid3] = useState(false);


  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data)
  }

  useEffect(() => {
    getData()
    if (document.cookie) {
      setFinal(true)
    }
  }, []);

  useEffect(() => {
    if (final) {
      window.scrollTo(0, 0);
    }
  }, [final])


  useEffect(() => {
    setIpAddress(ip.IPv4);
    setIpCity(ip.city);
    setIpState(ip.state);
    setPostal(ip.postal);
  }, [edad]);

  useEffect(() => {
    if (edad !== '') {
      setValid(false);
    }
    if (genero !== '') {
      setValid1(false);
    }
    if (preguntaUno !== '') {
      setValid2(false);
    }
    if (preguntaDos !== '') {
      setValid3(false);
    }

  }, [edad, genero, preguntaDos, preguntaUno]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (edad === '') {
      setValid(true);
      return
    }
    if (genero === '') {
      setValid1(true)
      return
    }
    if (preguntaUno === '') {
      setValid2(true)
      return
    }
    if (preguntaDos === '') {
      setValid3(true)
      return
    }

    try {
      const { data } = await clienteAxios.post('/cuestionario', { edad, genero, preguntaUno, preguntaDos, ipAddress, ipCity, ipState, postal });
      document.cookie = `ip  ${ipAddress}`;
      setFinal(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {final ?
        <Finaly />
        :
        <div>
          <Header />
          <h1 className='pt-10 text-center lg:text-[5rem] md:text-[3.5rem] text-[1.5rem] font-bold'>ENCUESTA SOBRE EL HORARIO DE VERANO EN MÉXICO</h1>
          <div className='flex justify-center items-center w-full'>
            <form className='p-2 lg:w-3/4 w-[90%]' onSubmit={handleSubmit}>
              {valid ? <span className='text-red-600 font-bold text-xl'>Favor de llenar todos los datos</span> : <></>}
              <div className='lg:flex'>
                <div className='m-2 p-5 w-full flex flex-col gap-2'>
                  <label htmlFor="edad" className='font-bold px-2 text-xl'>
                    Edad *
                  </label>
                  <div id='edad' className={`p-4 ${valid ? 'text-red-600' : 'text-black'}`} onChange={(e) => { setEdad(e.target.value) }}>
                    <input type="radio" value="18-24" name="edad" /> 18-24
                    <br />
                    <input type="radio" value="25-34" name="edad" /> 25-34
                    <br />
                    <input type="radio" value="35-44" name="edad" /> 35-44
                    <br />
                    <input type="radio" value="45-54" name="edad" /> 45-54
                    <br />
                    <input type="radio" value="55-64" name="edad" /> 55-64
                    <br />
                    <input type="radio" value="65+" name="edad" /> 65+
                  </div>
                </div>
                <div className='m-2 p-5 w-full flex flex-col gap-2'>
                  <label htmlFor="genero" className='font-bold px-2 text-xl'>
                    Genero *
                  </label>
                  <div id='genero' className={`p-4 ${valid1 ? 'text-red-600' : 'text-black'}`} onChange={(e) => { setGenero(e.target.value) }}>
                    <input type="radio" value="Masculino" name="Genero" /> Masculino
                    <br />
                    <input type="radio" value="Femenino" name="Genero" /> Femenino
                    <br />
                    <input type="radio" value="prefiero no contestar" name="Genero" /> Prefiero no contestar
                  </div>
                </div>
              </div>
              <div className='lg:flex'>
                <div className='m-2 p-5 w-full'>
                  <label htmlFor="pregunta-1" className='font-bold px-2 text-xl'>
                    ¿Conoces la disposición del gobierno federal de cancelar el horario de verano?
                  </label>
                  <div id='pregunta-1' className={`p-4 ${valid2 ? 'text-red-600' : 'text-black'}`} onChange={(e) => { setPreguntaUno(e.target.value) }}>
                    <input type="radio" value="Si" name="pregunta1" /> Si
                    <br />
                    <input type="radio" value="No" name="pregunta1" /> No
                    <br />
                  </div>
                </div>
                <div className='m-2 p-5 w-full'>
                  <label htmlFor="pregunta-2" className='font-bold px-2 text-xl'>
                    ¿Estás a favor de la disposición del gobierno federal de cancelar el horario de verano?
                  </label>
                  <div id='pregunta-2' className={`p-4 ${valid3 ? 'text-red-600' : 'text-black'}`} onChange={(e) => { setPreguntaDos(e.target.value) }}>
                    <input type="radio" value="Si" name="pregunta2" /> Si
                    <br />
                    <input type="radio" value="No" name="pregunta2" /> No
                    <br />
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <input
                  type="submit"
                  value="Enviar"
                  className="bg-green-400 mb-5 w-1/2 mx-auto py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-green-700 transition-colors" />
              </div>
            </form>
          </div>
          <Footer />
        </div >
      }
    </>
  )
}

export default App
