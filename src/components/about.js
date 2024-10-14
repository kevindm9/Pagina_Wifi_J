import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../../src/resources/antena.webp";
import logo1 from "../../src/resources/trabajador.webp";

const About = () => {
  // Configuración de Intersection Observer para las imágenes
  const { ref: refAntena, inView: inViewAntena } = useInView({
    triggerOnce: false,
    threshold: 0.1, // 10% visible para activar la animación
  });

  const { ref: refTrabajador, inView: inViewTrabajador } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold font-sans">¿Quiénes Somos?</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-5 mt-10">
        <motion.img
          ref={refAntena}
          className="w-[500px] rounded-lg"
          src={logo}
          alt="Antena"
          initial={{ scale: 0.25 }} // Empieza al 25%
          animate={inViewAntena ? { scale: 1 } : { scale: 0.25 }} // Escala al 100%
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="flex-1 ml-5 text-justify">
        <article class="break-words text-2xl ">
        <p>
            En + WIFI CONEXION RURAL, nos enorgullece ser líderes en la
            industria de telecomunicaciones y vigilancia, brindando soluciones
            de vanguardia que transforman la forma en que nos conectamos y
            protegemos. Fundada en [Año de Fundación], nuestra empresa se ha
            destacado por su compromiso con la innovación, la confiabilidad y la
            excelencia en el servicio al cliente.
          </p>
        </article>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold font-sans mt-10">Nuestra Misión</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-5 mt-10">
        <div className="flex-1 ml-5 text-justify mr-5 ">
        <article class=" break-words text-2xl  ">
        <p>
            Nuestra misión es impulsar el progreso tecnológico mientras
            ofrecemos servicios de telecomunicaciones de alta calidad y
            soluciones de vigilancia avanzadas. Buscamos facilitar la
            conectividad global y proporcionar seguridad inigualable,
            contribuyendo así a la mejora de la calidad de vida de las personas
            y el rendimiento de las empresas.
          </p>
        </article>

        </div>
        <motion.img
          ref={refTrabajador}
          className="w-[500px]  rounded-lg"
          src={logo1}
          alt="Trabajador"
          initial={{ scale: 0.25 }} // Empieza al 25%
          animate={inViewTrabajador ? { scale: 1 } : { scale: 0.25 }} // Escala al 100%
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      {/* Componente Contact */}
      <contact></contact>
    </div>
  );
};

export default About;
