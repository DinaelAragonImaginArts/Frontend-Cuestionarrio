import Header from "./Header";
import Footer from "./Footer";
import Facebook from './face.png';


const Finaly = () => {
    return (
        <div className="h-[100vh]">
            <Header />
            <div className="h-[80%]">
                <div className="flex flex-col justify-center items-center h-[100%]">
                    <h1 className="text-4xl font-bold text-center leading-[3rem] p-4">¡GRACIAS!<br></br>
                        TU PARTICIPACIÓN ES MUY IMPORTANTE</h1>
                    <br />
                    <h3 className="text-2xl font-bold text-center">Síguenos en Facebook para conocer más sobre
                        Sociedad de Ciudadanos de la Frontera Norte</h3>
                    <a href='https://www.facebook.com/ciudadanosfronteranorte' target='_blank'>
                        <img src={Facebook} alt="Facebook" className="w-[200px]" />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Finaly