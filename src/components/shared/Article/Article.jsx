import React from "react";
import SwiperGallery from "../SwiperGallery/SwiperGallery";
import { useParams } from "react-router-dom";

export default function Article() {
  const url = useParams().project;
  console.log(url);

  switch (url) {
    case "mlm":
      return (
        <article className="article-container">
          <SwiperGallery></SwiperGallery>
          <div>
            <h2>Mimando la memoria (MLM)</h2>
            <p>
              <strong>Mimando la memoria (MLM)</strong> es el proyecto que
              desarrolla <strong>la neuronera. (*)</strong>, plataforma de
              investigación y creación de cultura contemporánea, dentro de su
              plan arte+salud y promoción de cuidados y que arranca durante la
              residencia de arte educación en Matadero Madrid y la incubación en
              Mar de Cuidados de Mares Madrid en 2019.
            </p>
            <p>
              Nuestras estrategias pretenden
              <strong>
                {" "}
                mejorar la calidad de vida de las personas mayores
                diagnosticadas de deterioro cognitivo, incipiente o leve
              </strong>
              , dotando a los participantes de nuevas sensibilidades de índole
              artística y de cuidados. El lenguaje artístico y la creatividad
              permiten aproximarse a otras narraciones e imaginarios para pensar
              el devenir cognitivo, psicosocial y psicomotor de los adultos
              mayores.{" "}
            </p>
            <p>
              MLM se plantea inicialmente a lo largo de 12 sesiones durante un
              período de 6 semanas, si bien pretende ajustarse a las
              peculiaridades de cada grupo.{" "}
              <strong>
                Llevamos a cabo diferentes actividades enfocadas sobre todo en
                la memoria, la autoestima y de forma trasversal, la soledad,
                problemáticas habituales en el colectivo de personas mayores.
              </strong>{" "}
              El taller se destina a un mínimo de 10 participantes y un máximo
              de 20 si se incluye a sus respectivos cuidadores principales.
            </p>
            <p>
              la neuronera. (*) piensa el trabajo de{" "}
              <strong>
                {" "}
                los cuidados como una tarea oculta, la mayoría de veces no
                reconocida económica o socialmente y llevada a cabo en su
                mayoría por mujeres, muchas de ellas migrantes.
              </strong>{" "}
              A su vez, somos conscientes de la posición de la mujer dentro del
              colectivo de personas mayores y de la importancia de su trabajo y
              rol como cuidadora y eje familiar. No olvidamos esta perspectiva y
              la hacemos presente en nuestra propuesta involucrando a los
              distintos agentes en relaciones más transversales de cuidados.{" "}
            </p>
            <p>
              <strong>
                Queremos que las personas y sus necesidades sean el centro de
                todas las intervenciones
              </strong>
              , desarrollando otro tipo de subjetividades más centradas en los
              cuidados y afectos de uno mismo y el otro. Queremos alejarnos del
              pragmatismo habitual focalizado en el funcionamiento de las
              actividades básicas e instrumentales de la vida diaria en pos del
              acercamiento a un espacio donde dar voz a un colectivo que cada
              vez tiene más dificultades en encontrar lugares comunes. Más allá
              de los objetivos de funcionalidad habituales pretendemos dar un
              enfoque centrado en la persona y su sentir.{" "}
            </p>
            <p>
              La propuesta, orientada totalmente al bienestar personal, fomenta
              el recuerdo y la creación de un imaginario grupal a través de
              actividades creativas, generando una identidad nueva en el
              colectivo y, por ende, el barrio.{" "}
              <strong>
                Nuestra reivindicación es hacia la creación de espacios comunes
                de cuidados, visibles y seguros, que promuevan redes de afecto y
                ayuden a disminuir la soledad de los adultos mayores en los
                barrios de la metrópolis.
              </strong>
            </p>
            <p>
              La potencia de lo visual es la herramienta principal que
              utilizamos. Es a través sobre todo de la imagen fotográfica que
              profundizamos en los recuerdos y las emociones que se
              desencadenan. Las fotografías del barrio o los rostros familiares,
              entre otros, son el punto de partida de la historia de la que
              ellos forman parte. El apoyo que brindamos promueve la cooperación
              de las personas para generar nuevos conocimientos desde la
              práctica.{" "}
            </p>

            <h3>→ MLM Vallecas (mayo ~ junio 2019)</h3>
            <p>
              El proyecto piloto de Mimando la Memoria en el barrio de Vallecas
              se desarrollo en 12 sesiones en el Centro de Salud Alcalá de
              Guadaira. A lo largo de las sesiones se llevó a cabo actividades
              que remiten a competencias socioemocionales, comunicativas y
              cognitivas que tienen lugar durante el proceso creativo. Partimos
              de la no directividad permitiendo al participante expresarse a
              través de la obra que está realizando o mediante el diálogo que se
              genera durante la creación de esa misma.
            </p>
            <p>
              Las actividades se centraron en primer plano en los recuerdos y la
              autoestima. Asimismo, se trabajará la soledad y el barrio de forma
              transversal. Nuestro objetivo es favorecer la generación de
              relaciones interpersonales a lo largo de las sesiones y reducir el
              aislamiento social que padecen en muchos casos las personas
              mayores conectándolos de nuevo con su barrio.
            </p>
            <p>
              Es de vital importancia el recuerdo de sesiones pasadas al inicio
              de cada semana. Al detenernos todas juntas y tomarnos un momento
              para conversar sobre lo acontecido es posible desarrollar las
              problemáticas surgidas y crear otra narración posible sobre ellas.
              Las sesiones además están estructuradas cronologicamente y son una
              relectura de sus vidas.
            </p>
          </div>
        </article>
      );
      break;
    case "scc":
      return (
        <article className="article-container">
          <SwiperGallery></SwiperGallery>
          <div>
            <h2>
              Sesiones de Conocimiento Compartido (SCC) (marzo ~ diciembre 2019)
            </h2>
            <p>
              En marzo de 2019 iniciamos los domingos las sesiones de
              conocimiento compartido en el Centro de Residencias Artísticas de
              Matadero Madrid. A través de un grupo abierto de participantes
              hemos autogestionado un aprendizaje colectivo donde compartir
              nuestros saberes, escasos o vastos, sobre diversas cuestiones para
              desnaturalizarlos y proponer otras sensibilidades. Se parte de la
              premisa de que ninguna tenemos un pensamiento consolidado sobre
              los temas dados, que a menudo se reducen a frases como “eso es muy
              complicado”, ya que involucran muchas disciplinas distintas del
              conocimiento y muchas capas de profundidad. De esta manera, cada
              una, desde sus latitudes aporta una visión propia que complemente
              la del común.
            </p>

            <p>
              Estas sesiones que funcionan a modo charla de 4 horas han sido
              sobre temas muy variados. La primera sesión trato de Madrid como
              ciudad obrera y de la transición de nuestros barrios, a partir de
              ahí la temática ha sido cambiante pasando por sesiones de
              neurología y capitalismo, política, la Amazonía, visita al museo
              arqueológico, feminismos, taller coral, urbanismos y el tercer
              paisaje, psicología…
            </p>

            <h3>→ Sesiones de Conocimiento compartido: Madrid obrero </h3>
            <p>
              El proyecto piloto de Mimando la Memoria en el barrio de Vallecas
              se desarrollo en 12 sesiones en el Centro de Salud Alcalá de
              Guadaira. A lo largo de las sesiones se llevó a cabo actividades
              que remiten a competencias socioemocionales, comunicativas y
              cognitivas que tienen lugar durante el proceso creativo. Partimos
              de la no directividad permitiendo al participante expresarse a
              través de la obra que está realizando o mediante el diálogo que se
              genera durante la creación de esa misma.
            </p>
          </div>
        </article>
      );
      break;
    case "ssslqh":
      return (
        <article className="article-container">
          <SwiperGallery></SwiperGallery>
          <div>
            <h2>Seguimos sin saber lo que hacemos (abril 2018)</h2>
            <p>
              Este taller de naturaleza teórico-práctica se propone en la
              <strong>
                Convocatoria de Acciones Complementarias 2018 de la Facultad de
                Bellas Artes de la Universidad Complutense de Madrid
              </strong>{" "}
              como un espacio de reflexión, diagnóstico y producción de
              prácticas artísticas corporales en el que alejados del ámbito
              educativo formal pero al mismo tiempo dentro de la institución y
              del ambiente académico, ponemos en valor los regímenes de
              sensibilidad dados en este acotado contexto como es el de la
              educación en el arte. Para ello, contamos con un cuerpo de
              artistas y educadores que dirigirá cada taller con libertad de
              cátedra.
            </p>

            <p>
              Desde la neuronera. (*) buscamos con este taller dotar a la
              universidad de un lugar de reflexión-producción abierto, sin carga
              académica, donde aquellos y aquellas que acudan puedan
              desarrollarse en torno a las prácticas artísticas contemporáneas
              relacionalmente para poder construir de las maneras más efectivas
              dentro del presente.
            </p>
            <p>
              Insistimos en usar la palabra “taller”, dado que incide en la idea
              de que se viene a trabajar de una manera más corporal, física y
              activa que en una lógica académica tradicional de escucha pasiva
              en la que unos enseñan y otros aprenden. Es un taller de trabajo
              colaborativo, con una concepción horizontal en la que la
              generación del conocimiento surge tanto por el contenido como por
              la colaboración y la interacción entre participantes.{" "}
            </p>
            <p>
              Las personas invitadas a dar los talleres fueron:{" "}
              <strong>
                Daniel Lupión, Santiago Barber, Ricardo Horcajada, El Cuarto de
                Invitados.
              </strong>
            </p>
          </div>
        </article>
      );
      break;
    case "editorial":
      return (
        <article className="article-container">
          <SwiperGallery></SwiperGallery>
          <div>
            <h2>Editorial</h2>
            <p>Hemos hecho dos fancines jeje</p>
          </div>
        </article>
      );
      break;
    case "cra":
      return (
        <article className="article-container">
          <SwiperGallery></SwiperGallery>
          <div>
            <h2>
              Centro de Residencias Artísticas. Matadero Madrid (enero 2019 ~
              actualidad)
            </h2>
            <p>
              En 2019 fuimos seleccionados para la convocatoria de Espacios para
              Arteducadores del CRA.{" "}
            </p>

            <h3>→ Sesión de Conocimiento Compartido: Madrid obrero.</h3>
            <p>
              En esta sesión Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ut sint autem, vero, neque aperiam veniam ab voluptates
              quisquam quibusdam amet atque molestias placeat odit vel? Illum
              quo quam impedit alias?
            </p>

            <h3>→ os quiero mazo (29 de junio de 2019)</h3>
            <p>
              Una nueva jornada de puertas abiertas a los estudios del Centro de
              residencias artísticas de Matadero Madrid. El Centro de
              residencias artísticas acoge en torno a un centenar de creadores
              al año y el trabajo de producción e investigación que desarrollan
              se realiza a puerta cerrada en los estudios del Centro.
              Periódicamente, se abren los talleres en formato Open Studio para
              visibilizar el trabajo de los artistas y colectivos en residencia.{" "}
            </p>
            <p>
              Os quiero mazo, es un dispositivo común construido entre los
              colectivos de arteducación en residencia: Torta, Este Cardinal,
              Desmusea y Crossborder Project. Nace de una preocupación conjunta
              por las políticas de afectos y cuidados, asimiladas y entendidas
              de forma distinta por cada uno de los colectivos, pero integradas
              dentro de un cariño común. Esta visión se materializará a través
              de un domo que circunscribe un espacio propio y acogedor dentro
              del Centro de residencias artísticas. A través de una serie de
              detonantes, cualquier persona podrá convertirse en agente activo
              de esta construcción y determinación de lo íntimo dentro de lo
              público, de lo particular dentro de lo común.
            </p>
          </div>
        </article>
      );
      break;
    default:
      return (
        <article className="article-container">
          <SwiperGallery></SwiperGallery>
        </article>
      );
  }
}
