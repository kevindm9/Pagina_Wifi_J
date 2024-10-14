import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./home.css";
import logo from "../../src/resources/user.png";
import logo1 from "../../src/resources/principal.jpeg";

const Home = () => {
  // Configuración de Intersection Observer para las dos imágenes
  const { ref: refPrincipal, inView: inViewPrincipal } = useInView({
    triggerOnce: false, // Se activa cada vez que el elemento aparece
    threshold: 0.1, // Solo cuando el 10% del elemento es visible
  });

  const { ref: refCircular, inView: inViewCircular } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Imagen principal con animación */}
      <div className="sobreduenio" ref={refPrincipal}>
        <motion.img
          className="imgPrincipal"
          src={logo1}
          alt={logo1}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewPrincipal ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
      <article class="break-words text-2xl text-justify ">
      <h3>
        ¡Saludos! Es un placer darles la bienvenida a + WIFI CONEXION RURAL,
        líderes en la industria de telecomunicaciones y vigilancia. Soy Jonathan
        Salazar, el Director Ejecutivo de esta empresa apasionada por la
        innovación y el servicio excepcional. En + WIFI CONEXION RURAL, nos
        esforzamos por ofrecer soluciones de vanguardia que transforman la forma
        en que nos conectamos y protegemos. Nuestra misión es impulsar el
        progreso tecnológico mientras brindamos servicios de telecomunicaciones
        de alta calidad y soluciones de vigilancia avanzadas.
      </h3>
      </article>
      <div ref={refCircular}>
        <motion.img
          className="circular"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={logo}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewCircular ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Home;
