import { Facebook,Youtube, Twitter, Instagram } from "../Components/FollowUs/svg/Svg"
 
import presidente from '../Assets/presidente.jpeg';
import noticia1 from '../Assets/ImagesNotices/elonMusk.jpg'
import noticia2 from '../Assets/ImagesNotices/noticia2.webp'
import noticia3 from '../Assets/ImagesNotices/noticia3.webp'
import noticia4 from '../Assets/ImagesNotices/noticia4.webp'
import noticia5 from '../Assets/ImagesNotices/noticia5.jpg'
export const arrayCards = [
    {
        title: 'Alberto Fernández viaja a Jujuy a visitar a Milagro Sala',
        id: 0,
        paragraph: 'Lorem I have been seen some weird stuffs ',
        image: presidente
    }

    // ,
    // {
    //     title: 'something',
    //     id: 1,
    //     paragraph: 'Lorem I have been seen some weird stuffs '
    // }

]

//Noticias destacadas
export const arrayCardsHome = [
  {
        
        title: 'El dólar blue cerró a $273 y el que usan las empresas rompió la barrera de los $300',
        id: 0,
        paragraph: 'El oficial escaló 1 peso y cotizó a $133,25 en el Banco Nación.',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'El dólar blue tiene una jornada fuerte y subió su cotización a $270. Foto ilustrativa: pixabay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'En una semana marcada por la incertidumbre y la tensión cambiaria tras la renuncia de Martín Guzmán y la designación de Silvina Batakis como ministra de Economía, el dólar blue cerró este viernes a $ 273.',
                2:'Por su parte, el oficial cotizó a $ 126,25 para la compra y $ 133,25 para la venta, 1 peso por encima de la cotización del jueves.',
                3: '<Este presidente había bancado a ese ministro de Economía como a nadie", dijo la vicepresidenta sobre Guzmán> Luego de señalar que la renuncia de Martín Guzmán fue un "acto de irresponsabilidad política y desestabilización institucional, Cristina Kirchner dijo que también se trató de "un gesto de inmensa gratitud hacia el propio presidente".',
                4: 'Este presidente había bancado a ese ministro de Economía como a nadie, enfrentándose inclusive con sus propias fuerzas de la coalición. ¿Se merecía realmente esto?", cuestionó a quien fue reemplazado por Silvina Batakis en el Ministerio de Economía.',
                5: 'Cristina Kirchner calificó la renuncia de Martín Guzmán como un "acto de irresponsabilidad política y desestabilización institucional" En la inauguración del Cine Teatro Municipal de El Calafate que encabeza la vicepresidenta este viernes, Cristina Kirchner criticó a Martín Guzmán por su renuncia como ministro de Economía.'
            },
        image: noticia2,
    },
    {   
        title: 'Restricciones cambiarias',
        id: 1,
        paragraph: '¿Se acaba el café? alertan que la situación es crítica por culpa del cepo a las importaciones',
        subTitle: 'El producto se importa en un 100%, básicamente desde Brasil y Colombia. Productores y bares al borde de un ataque de nervios.',
        description: 'El café, en medio de las res',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'A los faltantes de papel higienico y demás productos complicados por las restricciones a las importaciones, ahora se agregó el café. El tema es recurrente desde las primeras restricciones puestas por el Banco Central (BCRA) para preservar los dólares, hace un par de meses. Pero ahora, el conflicto recrudeció con el nuevo cepo: al sector se le redujo el cupo de importación,. Y se le estiraron los plazos de pagos del producto, algo que les dificulta mucho la compra en el exterior. ',
                2:'Por eso, desde las cadenas de cafeterías y los fabricantes de café advirtieron que peligra el abastecimiento. Sucede que se trata de un insumo que la Argentina importa completamente, (desde Brasil y Colombia) y un commodity que aumentó su precio, en el último año un 150%,  entre otras cosas, por problemas climáticos, que afectaron la cosecha.',
                3: '“Lo que se compra por afuera de los cupos, establecidos en dólares y no en volumen (y establecidos en referencia al 2020, en plena pandemia)  se tiene que comprar a 180 dias y nadie acepta estos plazos. Entonces, tenemos que salir a buscar financiación en el exterior. Estas lineas de crédito son caras o directamente inaccesibles y encarecen el producto”, comentó una fuente del sector.',
                4: 'Ahora, el sector está negociando con el Banco Central a través de la Cámara Argentina del Café y de la Copal, la cámara que agrupa a las alimenticias. Está pidiendo, en principio,  que se “respete la temporalidad”, dado que durante el invierno, la importación es mayor. Y que se les baje el lapso de pago de los 180 dias a 60 o 90.',
                5: '“La incertidumbre es total. El stock varía según los diferentes locales pero en lineas generales tenemos stock para unos 60 o 70 días y no más”, aseguró Marcelo Salas, socio fundador de la cadena Café Martínez. "Si bien va entrando de a poco y le damos prioridad a nuestros franquiciados, no entra lo que necesitamos".'
            },
        image: noticia3,
    },
    {
        title: 'Expansión internacional',
        id: 2,
        paragraph: 'Techint compra en Estados Unidos una fábrica de tubos por US$ 460 millones',
        subTitle: 'La planta está en Louisiana y fue inaugurada hace dos años.',
        description: 'Paolo Rocca, el mes pasado, en el encuentro de los 20 años de AEA. Foto Andres D´Elia',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Mientras en Argentina acordó la provisión de tubos para el gasoducto que permitirá sacar el gas de Vaca Muerta, Tenaris, la productora de tubos del grupo Techint, dio un paso más en ese negocio en Estados Unidos. Compró una planta de tubos del grupo Benteler Steel & Tube Manufacturing en Louisiana, por US$ 460 millones.',
                2:'Según aseguró la empresa, el acuerdo ampliará su rango de producción y presencia productiva en el mercado estadounidense, donde ya tenía varios centros productivos.',
                3: 'Benteler produce tubos de acero sin costura, con una capacidad anual de laminación de tubos de hasta 400.000 toneladas métricas. La adquisición incluirá US$ 52 millones de capital de trabajo.',
                4: 'La firma estadounidense había puesto en marcha la planta , ubicada en la localidad de Shreveport, en 2020. Es una de las fábricas de tubos de acero más modernas de América del Norte. La venta reforzará su situación financiera, aseguró.​',
                5: 'Se espera que el cierre ocurra durante el cuarto trimestre de este año, luego de recibir el visto bueno de los organismos regulatorios de Estados Unidos.'
            },
        image: noticia4,
    },

]

export const lastNewsArray = [

    {
        title: 'Alberto Fernández viaja a Jujuy a visitar a Milagro Sala',
        id: 0,
        paragraph: 'El Presidente suspendió la agenda oficial prevista para este miércoles y viajará a la provincia de Jujuy para visitar a la líder de la Tupac Amaru',
        subTitle: 'Quien lleva 2.356 días como presa política y que esta semana fue internada por un cuadro de trombosis venosa profunda.',
        description: 'Alberto Fernández en la previa a su encuentro con Milagro Sala en diciembre de 2016.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'El presidente Alberto Fernández suspendió su agenda de este miércoles para viajar a  la provincia de Jujuy para visitar a la dirigente social Milagro Sala, quien se encuentra internada en terapia intermedia con un cuadro de trombosos venosa profunda, según confirmó Cynthia García en AM750. "Voy a visitar a Milagro, injustamente detenida, enferma, para acompañarla como hice siempre y también para que se muestre esta situación oprobiosa que la Corte sigue sin resolver", dijo el mandatario.',
                2:'Ya este martes Fernández se había comunicado con personas de su entorno y médicos para conocer en detalle la situación de Sala, que atraviesa además un proceso de prisión domiciliaria. Allí el Presidente pedirá la libertad de la dirigente.',
                3: '"El Presidente está viajando en este momento a Jujuy a visitar a Milagro Sala y para volver a poner visibilidad sobre un hecho de injusticia como es la detención ilegal que está sufriendo y para seguir reclamando por su libertad", informaron desde la Casa Rosada.',
                4: 'En este contexto, abogados, médicos e integrantes de organizaciones sociales y del Comité por la Libertad de Milagro Sala coincidieron en las últimas horas en que la internación de la dirigente social "es un capítulo más de la profundización del hostigamiento" hacia ella.',
                5: 'Desde el Gobierno, el secretario de Derechos Humanos de la Nación, Horacio Pietragalla, le puso nombre y apellido: "Gerardo Morales la quiere muerta a Milagro", denunció. En tanto, el ministro de Justicia, Martín Soria, y el viceministro, Juan Martín Mena, recibieron unos días atrás a representantes de la Tupac Amaru.'
            },
        image: noticia2,
    },
  
    {
        
        title: 'Redes sociales',
        id: 1,
        paragraph: 'Elon Musk canceló la compra de Twitter: deberá pagar mil millones de dólares de multa',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'El hombre más rico del mundo había firmado un contrato de 44.000 millones de dólares.',
        date: '20/05/2022 9:50',
        source: 'La nación',
        body:
            {
                1: 'Elon Musk canceló la compra de Twitter. Según aseguró el hombre más rico del mundo, sus asesores enviaron este viernes una carta a la compañía para notificar formalmente que rescindiría el acuerdo, por el cual estaba dispuesto a pagar 44 mil millones de dólares. Deberá pagar mil millones de dólares por dar marcha atrás.',
                2:'Musk ya había expresado anteriormente sus dudas e incluso insinuó que podría abandonar el acuerdo por la preocupación que le produce la gran cantidad de cuentas falsas.',
                3: 'Pese a haber tenido acceso a datos internos, el multimillonario no había podido precisar el porcentaje de perfiles falsos, según varios informes internos.',
                4: 'Aunque Musk ya había hecho comentarios que ponían en duda su compromiso con el acuerdo, el último informe citaba una fuente anónima que dice que su equipo se está preparando para un "cambio de dirección".',
                5: 'Las acciones de Twitter, que ya cotizaban por debajo del precio ofrecido por el magnate de los negocios, se hundieron alrededor de un 4% tras la noticia.'
            },
        image: noticia1,
    },
    {
        
        title: 'El dólar blue cerró a $273 y el financiero superó los $300',
        id: 2,
        paragraph: 'El oficial escaló 1 peso y cotizó a $133,25 en el Banco Nación.',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'El dólar blue tiene una jornada fuerte y subió su cotización a $270. Foto ilustrativa: pixabay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'En una semana marcada por la incertidumbre y la tensión cambiaria tras la renuncia de Martín Guzmán y la designación de Silvina Batakis como ministra de Economía, el dólar blue cerró este viernes a $ 273.',
                2:'Por su parte, el oficial cotizó a $ 126,25 para la compra y $ 133,25 para la venta, 1 peso por encima de la cotización del jueves.',
                3: '<Este presidente había bancado a ese ministro de Economía como a nadie", dijo la vicepresidenta sobre Guzmán> Luego de señalar que la renuncia de Martín Guzmán fue un "acto de irresponsabilidad política y desestabilización institucional, Cristina Kirchner dijo que también se trató de "un gesto de inmensa gratitud hacia el propio presidente".',
                4: 'Este presidente había bancado a ese ministro de Economía como a nadie, enfrentándose inclusive con sus propias fuerzas de la coalición. ¿Se merecía realmente esto?", cuestionó a quien fue reemplazado por Silvina Batakis en el Ministerio de Economía.',
                5: 'Cristina Kirchner calificó la renuncia de Martín Guzmán como un "acto de irresponsabilidad política y desestabilización institucional" En la inauguración del Cine Teatro Municipal de El Calafate que encabeza la vicepresidenta este viernes, Cristina Kirchner criticó a Martín Guzmán por su renuncia como ministro de Economía.'
            },
        image: noticia2,
    },
    {   
        title: 'En la mira',
        id: 3,
        paragraph: 'Ramón Perez es el nuevo SEO && CTO de Globant',
        subTitle: 'Globant anuncia a su nuevo lider en la toma de deciciones a nivel empresarial y visión de la companía de desarrollo de Software',
        description: 'Oficina de Globant, Houston, Texas, EEUU',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: noticia5,
    },
    {   
        title: 'Restricción cambiarias',
        id: 4,
        paragraph: '¿Se acaba el café? alertan que la situación es crítica por culpa del cepo a las importaciones',
        subTitle: 'El producto se importa en un 100%, básicamente desde Brasil y Colombia. Productores y bares al borde de un ataque de nervios.',
        description: 'El café, en medio de las res',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'A los faltantes de papel higienico y demás productos complicados por las restricciones a las importaciones, ahora se agregó el café. El tema es recurrente desde las primeras restricciones puestas por el Banco Central (BCRA) para preservar los dólares, hace un par de meses. Pero ahora, el conflicto recrudeció con el nuevo cepo: al sector se le redujo el cupo de importación,. Y se le estiraron los plazos de pagos del producto, algo que les dificulta mucho la compra en el exterior. ',
                2:'Por eso, desde las cadenas de cafeterías y los fabricantes de café advirtieron que peligra el abastecimiento. Sucede que se trata de un insumo que la Argentina importa completamente, (desde Brasil y Colombia) y un commodity que aumentó su precio, en el último año un 150%,  entre otras cosas, por problemas climáticos, que afectaron la cosecha.',
                3: '“Lo que se compra por afuera de los cupos, establecidos en dólares y no en volumen (y establecidos en referencia al 2020, en plena pandemia)  se tiene que comprar a 180 dias y nadie acepta estos plazos. Entonces, tenemos que salir a buscar financiación en el exterior. Estas lineas de crédito son caras o directamente inaccesibles y encarecen el producto”, comentó una fuente del sector.',
                4: 'Ahora, el sector está negociando con el Banco Central a través de la Cámara Argentina del Café y de la Copal, la cámara que agrupa a las alimenticias. Está pidiendo, en principio,  que se “respete la temporalidad”, dado que durante el invierno, la importación es mayor. Y que se les baje el lapso de pago de los 180 dias a 60 o 90.',
                5: '“La incertidumbre es total. El stock varía según los diferentes locales pero en lineas generales tenemos stock para unos 60 o 70 días y no más”, aseguró Marcelo Salas, socio fundador de la cadena Café Martínez. "Si bien va entrando de a poco y le damos prioridad a nuestros franquiciados, no entra lo que necesitamos".'
            },
        image: noticia3,
    },
    {
        title: 'Expansión internacional',
        id: 5,
        paragraph: 'Techint compra en Estados Unidos una fábrica de tubos por US$ 460 millones',
        subTitle: 'La planta está en Louisiana y fue inaugurada hace dos años.',
        description: 'Paolo Rocca, el mes pasado, en el encuentro de los 20 años de AEA. Foto Andres D´Elia',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Mientras en Argentina acordó la provisión de tubos para el gasoducto que permitirá sacar el gas de Vaca Muerta, Tenaris, la productora de tubos del grupo Techint, dio un paso más en ese negocio en Estados Unidos. Compró una planta de tubos del grupo Benteler Steel & Tube Manufacturing en Louisiana, por US$ 460 millones.',
                2:'Según aseguró la empresa, el acuerdo ampliará su rango de producción y presencia productiva en el mercado estadounidense, donde ya tenía varios centros productivos.',
                3: 'Benteler produce tubos de acero sin costura, con una capacidad anual de laminación de tubos de hasta 400.000 toneladas métricas. La adquisición incluirá US$ 52 millones de capital de trabajo.',
                4: 'La firma estadounidense había puesto en marcha la planta , ubicada en la localidad de Shreveport, en 2020. Es una de las fábricas de tubos de acero más modernas de América del Norte. La venta reforzará su situación financiera, aseguró.​',
                5: 'Se espera que el cierre ocurra durante el cuarto trimestre de este año, luego de recibir el visto bueno de los organismos regulatorios de Estados Unidos.'
            },
        image: noticia4,
    },
    {   
        title: 'En la mira',
        id: 6,
        paragraph: 'Ramón Perez es el nuevo SEO && CTO de Globant',
        subTitle: 'Globant anuncia a su nuevo lider en la toma de deciciones a nivel empresarial y visión de la companía de desarrollo de Software',
        description: 'Oficina de Globant, Houston, Texas, Estados Unidos',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: noticia5,
    },
    {   
        title: 'Se desligó del asesinato',
        id: 7,
        paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: presidente,
    },
    {   
        title: 'Se desligó del asesinato',
        id: 8,
        paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: presidente,
    },
    {   
        title: 'Se desligó del asesinato',
        id: 9,
        paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: presidente,
    },
    {   
        title: 'Se desligó del asesinato',
        id: 10,
        paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: presidente,
    },
    {   
        title: 'Se desligó del asesinato',
        id: 11,
        paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: presidente,
    },
    {
        title: 'Se desligó del asesinato',
        id: 12,
        paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: presidente,
    },
    // {
        
    //     title: 'Se desligó del asesinato',
    //     id: 12,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {
        
    //     title: 'Se desligó del asesinato',
    //     id: 13,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 14,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {
    //     title: 'Se desligó del asesinato',
    //     id: 15,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 16,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 17,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 18,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 19,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 20,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 21,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         },
    //     image: presidente,
    //     fuente: ''
    // },
    // {   
    //     title: 'Se desligó del asesinato',
    //     id: 22,
    //     paragraph: 'Caso Lola Chomnalez: un triple crimen, clave en la increíble secuencia para dar con el sospechoso de matar a la joven argentina',
    //     subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
    //     description: 'Lola Luna Chomnalez tenía 15 años cuando fue asesinada en la playa de Barra de Valizas, Uruguay.',
    //     date: '20/05/2022 9:50',
    //     body:
    //         {
    //             1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
    //             2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
    //             3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
    //             4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
    //             5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
    //         }
    // },

]


export const CardMainHomeObj =
{
    title: 'something weird is going to this place',
    id: 0,
    secondaryTittle: 'secondaryTittle secondaryTittle',
    paragraph: 'Lorem I have been seen some weird stuffs Lorem I have been seen some weird stuffs on these places on... ',
    image: noticia2,
}



export const arrayFollowUsHome = [
    {
        Type: Facebook,
        id: 0,
        paragraph: '12,345 Fans',
        link: '#',
        class_name: 'facebook-bg main-icon'
    }

    ,
    {
        Type: Twitter,
        id: 1,
        paragraph: '12,345 Followers',
        link: '#',
        class_name: 'twitter-bg main-icon'
    },
    {
        Type: Instagram,
        id: 2,
        paragraph: '12,345 Followers',
        link: '#',
        class_name: 'instagram-bg main-icon'
    }

    ,
    {
        Type: Youtube,
        id: 3,
        paragraph: '12,345 Followers',
        link: '#',
        class_name: 'youtube-bg main-icon'
    }

] 


export const arraySmallCards = [
    {
        
        title: 'Redes sociales',
        id: 1,
        paragraph: 'Elon Musk canceló de compra de Twitter: deberá pagar mil millones de dólares de multa',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'El hombre más rico del mundo había firmado un contrato de 44.000 millones de dólares.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Elon Musk canceló la compra de Twitter. Según aseguró el hombre más rico del mundo, sus asesores enviaron este viernes una carta a la compañía para notificar formalmente que rescindiría el acuerdo, por el cual estaba dispuesto a pagar 44 mil millones de dólares. Deberá pagar mil millones de dólares por dar marcha atrás.',
                2:'Musk ya había expresado anteriormente sus dudas e incluso insinuó que podría abandonar el acuerdo por la preocupación que le produce la gran cantidad de cuentas falsas.',
                3: 'Pese a haber tenido acceso a datos internos, el multimillonario no había podido precisar el porcentaje de perfiles falsos, según varios informes internos.',
                4: 'Aunque Musk ya había hecho comentarios que ponían en duda su compromiso con el acuerdo, el último informe citaba una fuente anónima que dice que su equipo se está preparando para un "cambio de dirección".',
                5: 'Las acciones de Twitter, que ya cotizaban por debajo del precio ofrecido por el magnate de los negocios, se hundieron alrededor de un 4% tras la noticia.'
            },
        image: noticia1,
    },
    {
        
        title: 'El dólar blue cerró a $273 y el que usan las empresas rompió la barrera de los $300',
        id: 2,
        paragraph: 'El oficial escaló 1 peso y cotizó a $133,25 en el Banco Nación.',
        subTitle: 'Se llama Leonardo David Sena, tiene 39 años y antecedentes. Los investigadores llegaron al nuevo detenido por un cruce de muestras de ADN relacionado a otro impactante hecho.',
        description: 'El dólar blue tiene una jornada fuerte y subió su cotización a $270. Foto ilustrativa: pixabay.',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'En una semana marcada por la incertidumbre y la tensión cambiaria tras la renuncia de Martín Guzmán y la designación de Silvina Batakis como ministra de Economía, el dólar blue cerró este viernes a $ 273.',
                2:'Por su parte, el oficial cotizó a $ 126,25 para la compra y $ 133,25 para la venta, 1 peso por encima de la cotización del jueves.',
                3: '<Este presidente había bancado a ese ministro de Economía como a nadie", dijo la vicepresidenta sobre Guzmán> Luego de señalar que la renuncia de Martín Guzmán fue un "acto de irresponsabilidad política y desestabilización institucional, Cristina Kirchner dijo que también se trató de "un gesto de inmensa gratitud hacia el propio presidente".',
                4: 'Este presidente había bancado a ese ministro de Economía como a nadie, enfrentándose inclusive con sus propias fuerzas de la coalición. ¿Se merecía realmente esto?", cuestionó a quien fue reemplazado por Silvina Batakis en el Ministerio de Economía.',
                5: 'Cristina Kirchner calificó la renuncia de Martín Guzmán como un "acto de irresponsabilidad política y desestabilización institucional" En la inauguración del Cine Teatro Municipal de El Calafate que encabeza la vicepresidenta este viernes, Cristina Kirchner criticó a Martín Guzmán por su renuncia como ministro de Economía.'
            },
        image: noticia2,
    },
    {   
        title: 'En la mira',
        id: 3,
        paragraph: 'Emanuel Constancio es el nuevo SEO && CTO de Globant',
        subTitle: 'Globant anuncia a su nuevo lider en la toma de deciciones a nivel empresarial y visión de la companía de desarrollo de Software',
        description: 'Oficina de Globant, Houston, United States',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'Es el principal sospechoso de haber asesinado en 2014 a Lola Luna Chomnalez, la chica argentina de 15 años que veraneaba en Barra de Valizas, una de las playas del departamento uruguayo de Rocha. Tiene 39 años y se llama Leonardo David Sena. Cuenta con antecedentes y a última hora de este jueves, en su indagatoria, reconoció haber estado en la escena del crimen y que robó dinero de la mochila a la chica, pero se desligó del crimen.',
                2:'Tras su declaración, Sena fue procesado con prisión preventiva por la Justicia uruguaya, que lo imputó del delito de "homicidio muy especialmente agravado". A más de siete años del crimen, ocurrido en diciembre de 2014, la causa dio un vuelco que parece ser determinante y la trama para entender cómo fue que los investigadores dieron con este sospechoso es realmente de "película", tal cual lo describió una fuente del caso.',
                3: 'De acuerdo al detalle que precisan medios uruguayos, un triple crimen que tuvo como víctimas a tres infantes de Marina ejecutados en un predio naval en el Cerro de Montevideo fue la punta del ovillo que permitió llegar a Sena',
                4: 'Los asesinatos ocurrieron en la mañana del domingo 31 de mayo de 2020. Juan Manuel Escobar (31), Alex Guillenea (25) y Alan Rodríguez (22) fueron encontrados con un tiro en la cabeza cada uno.',
                5: 'En la investigación de ese hecho se hicieron varias pruebas de ADN a diferentes sospechosos. Al mismo tiempo se las iba cotejando con otras pruebas almacenadas en los archivos de otras causas, de otros asesinatos.'
            },
        image: noticia5,
    },
    {   
        title: 'Restricción cambiarias',
        id: 4,
        paragraph: '¿Se acaba el café? alertan que la situación es crítica por culpa del cepo a las importaciones',
        subTitle: 'El producto se importa en un 100%, básicamente desde Brasil y Colombia. Productores y bares al borde de un ataque de nervios.',
        description: 'El café, en medio de las res',
        date: '20/05/2022 9:50',
        body:
            {
                1: 'A los faltantes de papel higienico y demás productos complicados por las restricciones a las importaciones, ahora se agregó el café. El tema es recurrente desde las primeras restricciones puestas por el Banco Central (BCRA) para preservar los dólares, hace un par de meses. Pero ahora, el conflicto recrudeció con el nuevo cepo: al sector se le redujo el cupo de importación,. Y se le estiraron los plazos de pagos del producto, algo que les dificulta mucho la compra en el exterior. ',
                2:'Por eso, desde las cadenas de cafeterías y los fabricantes de café advirtieron que peligra el abastecimiento. Sucede que se trata de un insumo que la Argentina importa completamente, (desde Brasil y Colombia) y un commodity que aumentó su precio, en el último año un 150%,  entre otras cosas, por problemas climáticos, que afectaron la cosecha.',
                3: '“Lo que se compra por afuera de los cupos, establecidos en dólares y no en volumen (y establecidos en referencia al 2020, en plena pandemia)  se tiene que comprar a 180 dias y nadie acepta estos plazos. Entonces, tenemos que salir a buscar financiación en el exterior. Estas lineas de crédito son caras o directamente inaccesibles y encarecen el producto”, comentó una fuente del sector.',
                4: 'Ahora, el sector está negociando con el Banco Central a través de la Cámara Argentina del Café y de la Copal, la cámara que agrupa a las alimenticias. Está pidiendo, en principio,  que se “respete la temporalidad”, dado que durante el invierno, la importación es mayor. Y que se les baje el lapso de pago de los 180 dias a 60 o 90.',
                5: '“La incertidumbre es total. El stock varía según los diferentes locales pero en lineas generales tenemos stock para unos 60 o 70 días y no más”, aseguró Marcelo Salas, socio fundador de la cadena Café Martínez. "Si bien va entrando de a poco y le damos prioridad a nuestros franquiciados, no entra lo que necesitamos".'
            },
        image: noticia3,
    },
]

 