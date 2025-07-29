
import type { Announcement, Event, Service, Post } from './types';
import { BookOpen, Coffee, Gamepad2, GraduationCap, PartyPopper, Users, Utensils } from 'lucide-react';

export const announcements: Announcement[] = [
 
];

export const events: Event[] = [
    {
      id: 1,
      title: 'Asamblea General de Socios',
      date: '2024-06-15',
      time: '10:00 - 12:00',
      location: 'Salón de Actos',
      description: 'Reunión anual para revisar cuentas y planificar el próximo curso.',
      type: 'upcoming',
    },
    {
      id: 2,
      title: 'Fiesta Fin de Curso',
      date: '2024-06-21',
      time: '17:00 - 20:00',
      location: 'Patio del Colegio',
      description: '¡Juegos, música y diversión para despedir el año escolar!',
      type: 'upcoming',
    },
    {
        id: 3,
        title: 'Chocolatada Solidaria',
        date: '2023-12-22',
        time: '16:30 - 18:00',
        location: 'Comedor del Colegio',
        description: 'Recaudación de fondos para proyectos benéficos.',
        type: 'past',
    },
];

export const services: Service[] = [
    {
        title: 'Actividades Extraescolares',
        description: 'Ofrecemos una amplia variedad de actividades deportivas, artísticas y académicas para complementar la formación de los alumnos.',
        icon: GraduationCap,
    },
    {
        title: 'Primeros del Cole',
        description: 'Servicio de acogida matinal para facilitar la conciliación familiar, abierto desde primera hora de la mañana.',
        icon: Coffee,
    },
    {
        title: 'Banco de Libros',
        description: 'Programa de reutilización de libros de texto para promover el ahorro y la sostenibilidad entre las familias.',
        icon: BookOpen,
    },
    {
        title: 'Fiestas Escolares',
        description: 'Organizamos eventos y celebraciones para fomentar la convivencia y el espíritu de comunidad en el colegio.',
        icon: PartyPopper,
    },
    {
        title: 'Comedor y Desayunos',
        description: 'Colaboramos en la gestión y mejora del servicio de comedor y ofrecemos desayunos saludables.',
        icon: Utensils,
    },
    {
        title: 'Representación Familiar',
        description: 'Somos la voz de las familias ante el centro y las instituciones, defendiendo una educación pública y de calidad.',
        icon: Users,
    },
]

export const posts: Post[] = [
  {
    title: "Nueva protección para nuestro huerto",
    date: "2 de junio de 2021",
    author: "Patricia Zamorano",
    content: `<p>El huerto del San Benito cuenta, desde el pasado viernes, con una malla protectora para proteger sus verduras y hortalizas.</p><p>El pasado viernes, 29 de mayo, y gracias a la colaboración y participación de varias familias del colegio, se instalaron en el huerto escolar unas mallas protectoras con la finalidad de proteger y cuidar, aún más, las verduras y hortalizas que son fruto del esfuerzo y trabajo que los niños y niñas del San Benito, junto a su monitora, hacen con tanto cariño e ilusión.</p><p>De esta manera, se sigue trabajando por mejorar y cuidar, cada día más, el huerto escolar de nuestro colegio y que así, l@s alumn@s sigan avanzando y mejorando en su trabajo hortelano.</p>`,
    image: null,
  },
  {
    title: "Red escolar de intercambio de semillas",
    date: "26 de mayo de 2021",
    author: "Patricia Zamorano",
    content: `<p>El C.P. San Benito y sus alumnos están participando en la iniciativa Red escolar de intercambio de semillas. Gracias a éste y, guiados por la monitora del huerto escolar, Amal (educadora ambiental de Germinando) y los profesores, los alumnos están compartiendo con niños de otros centros educativos sus experiencias en los huertos y también están intercambiando algunas semillas.</p><p>Para facilitar ese intercambio de semillas y de información existe El libro viajero. Cada centro educativo participante en el proyecto tiene su propio libro viajero y, en él, han incluido información que explica cómo son sus huertos, todo lo que aprenden de él y en él además de otras informaciones que crean puedan ser útiles a los compañeros de la red.</p><p>Además, desde cada centro educativo envían al resto semillas de sus huertos para compartirlas e intercambiarlas. Una iniciativa de la que los alumnos del San Benito están aprendiendo y disfrutando.</p><p>El libro viajero del San Benito viajó hasta el Colegio Bartolomé Nicolau de Talavera de la Reina y nuestros niñ@s están disfrutando del que nos inviaron desde el CEIP San Fernando de los Ríos de Las Rozas.</p><h4 class="font-semibold mt-4">Con la participación en este proyecto se persiguen unos claros objetivos:</h4><ul class="list-disc list-inside my-2"><li>Fomentar el intercambio de experiencias entre proyectos de huerto escolar de distintas regiones del estado, haciendo énfasis en la relación de cada centro educativo con su propio contexto ecosocial.</li><li>Poner en valor los huertos escolares como herramienta para la educación para la sostenibilidad y la agroecología.</li><li>Aumentar la agrodiversidad de cada huerto escolar y poner en valor las semillas locales/tradicionales.</li></ul><p>Este año, además, con el paso del temporal Filomena los colegios perdieron los cultivos de sus huertos. Lo que se sumó a que no habían semillas guardadas del curso anterior debido al confinamiento producido por la pandemia del COVID. Por ello se pidió ayuda a La Red de Huertos Comunitarios de Madrid que respondieron muy bien, enviando semillas al proyecto.</p><p class="mt-4">Si queréis conocer con más detalle el proyecto y otros colegios que participan en el proyecto os dejamos el siguiente enlace para que podáis acceder a la página de La Red escolar de intercambio de semillas.</p><a href="https://sites.google.com/view/red-escolar-semillas/el-proyecto?authuser=0" target="_blank" class="text-primary hover:underline">https://sites.google.com/view/red-escolar-semillas/el-proyecto?authuser=0</a>`,
    image: {
      src: "/images/noticias/intercambio-semillas.jpg",
      alt: "Red escolar de semillas",
      width: 600,
      height: 400,
      hint: "seeds exchange"
    },
  },
  {
    title: "Viernes hortelano en el San Benito – Encuentro I & II",
    date: "16 de diciembre de 2019",
    author: "araujoluciana",
    content: `<p>Ya son dos los viernes que nos hemos reunido para dedicarle un ratito a nuestro querido huerto del cole, colaborando y trabando todos en equipo y disfrutando al mismo tiempo de una tarde en familia.</p><p>En nuestro primer encuentro Amal, la monitora del huerto, preparó un taller que nos ayudó a conocer los secretos del huerto ¡cuántas cosas interesantes pasan allí! Luego nos pusimos manos a la obra: transplantando plantas, podando, acondicionando el espacio para que los niños puedan trabajar más a gusto, regando, y preparando los bancales para el frío… Sin duda una tarde muy productiva, didáctica y educativa.</p><p>El pasado viernes 13 de diciembre hemos vuelto a quedar y en este segundo encuentro, algo menos “glamuroso” pero no por ello menos importante, hemos realizado actividades mas básicas como regar, sacar del huerto bolsas enormes con restos de poda, acolchar los bancales con hojas para las heladas y así poco a poco el huerto se va adecentando y entre todos estamos creando un espacio mucho más bonito para que los peques aprendan no solo educación medioambiental sino que fomenten el valor de trabajar en equipo y el esfuerzo.</p><h4 class="font-semibold mt-4">¡Pero aún hay mas trabajo por hacer!</h4><p>Estas son algunas ideas que tenemos en mente y nuevos proyectos que queremos realizar:<ul class="list-disc list-inside my-2"><li>Un espantapájaros con materiales reciclados.</li><li>Instalar una maya de luz muy pequeña por la parte exterior de la valla, desde el suelo hasta unos 30 cm por todo el diámetro del huerto exterior, para evitar la entrada de plásticos al huerto.</li><li>Hacer carteles para las plantas.</li></ul></p><p>Así que ya sabes! Si tienes ganas de colaborar cuidando y poniendo al día el huerto del cole junto a tu familia… ¡Te esperamos en el próximo encuentro!</p>`,
    image: null,
  },
  {
    title: "¡Vuelven los Viernes Hortelanos al San Benito!",
    date: "4 de noviembre de 2019",
    author: "araujoluciana",
    content: `<p>Un año más, la AMPA, junto con la cooperativa Germinando, te invitan al querido huerto del cole para conocer sus secretos, participar en familia y disfrutar con los peques de una tarde hortelana.</p><p>Te esperamos este próximo viernes 8 de noviembre de 16:15 a 17:30, junto a las canchas de baloncesto. ¡Anímate y ven a pasar un rato agradable entre todos!</p><p>Puedes apuntarte haciendo click aquí: <a href="http://ow.ly/gSsc50x02jK" target="_blank" class="text-primary hover:underline">http://ow.ly/gSsc50x02jK</a></p><p>* En caso de que la climatología impida el desarrollo de la sesión en el huerto, se cambiaría la actividad de día, previo aviso.</p>`,
    image: null,
  },
   {
    title: "Programación del huerto escolar: Curso 2019-2020",
    date: "28 de octubre de 2019",
    author: "araujoluciana",
    content: `<p>Con el objetivo de que el huerto escolar sea una herramienta educativa transversal y útil para toda la comunidad educativa, continuamos un año más proponiendo un proyecto educativo multidisciplinar en torno al huerto.</p><p>Este curso además, queremos profundizar en el concepto de agroecología escolar y sumarnos al impulso de la educación ambiental que se está dando desde el movimiento Fridays for future. De esta forma, queremos darle fuerza al proyecto de compostaje, cerrando ciclos en el propio centro, y dando espacio para la reflexión y el aprendizaje en torno a la producción de alimentos y la alimentación saludable. También queremos hacer énfasis, una vez más, en la importancia de la biodiversidad agrícola y urbana.</p><p>En este documento presentamos detalladamente la propuesta educativa para cada curso/ciclo…</p><p><a href="#" class="text-primary hover:underline">Programación del Huerto escolar para el curso 2019-20 -> Ver</a></p>`,
    image: null,
  },
  {
    title: "Memoria del huerto: Curso 2018-2019",
    date: "28 de octubre de 2019",
    author: "araujoluciana",
    content: `<p>Extraordinario trabajo de la cooperativa Germinando y el equipo directivo…</p><p>Para que el huerto esté incluido en el proyecto curricular de manera transversal, durante el curso 2018-2019 se continuó realizando las actividades educativas en el huerto de primaria y apoyando su inclusión en el currículo, además de incluir a los niveles de 4 y 5 años en el proyecto. Nuevamente la presentación al III Concurso de Huertos Escolares con este vídeo y con una cesta de nuestros cultivos y trabajos, quedando finalistas en el premio a “El huerto contado con más arte”.</p><p>En el siguiente documento se presenta una pequeña memoria de las actividades realizadas, así como una evaluación de objetivos cubiertos.</p><p><a href="#" class="text-primary hover:underline">Memoria del Huerto Escolar del CEIP San Benito curso 2018-19 -> Ver.</a></p>`,
    image: null,
  },
  {
    title: "No te pierdas el taller sobre compostaje en nuestro huerto",
    date: "16 de noviembre de 2018",
    author: "Elena",
    content: `<p>La Comisión de Huerto de la AMPA nos trae al cole el próximo miércoles, 21 de noviembre, a monitores de Ciudad Huerto para que impartan un ameno taller sobre compostaje. La actividad, gratuita y participativa, está destinada a profesores/as y madres y padres del alumnado del centro. Tendrá lugar ese día de 17:00 a 18:30 en nuestro querido huerto comunitario.</p><h4 class="font-semibold mt-4">¿Qué vamos a aprender en el taller?</h4><p>Los chicos de Ciudad Huerto, que forman parte de la Red de Huertos Urbanos Comunitarios de Madrid nos lo cuentan: “Millones de bacterias trabajan en los huertos diariamente con una misión: descomponer los restos orgánicos para convertirlos en un sustrato idóneo y nutritivo para suelos y plantas. Es una tarea que hacen sin descanso, a vida o muerte. Junto a ellas, cientos de bichejos se encargan de terminar el trabajo y conseguir el oro negro de los huertos: el compost.</p><p>Aprenderemos cuál es la manduca preferida de la fauna compostadora, qué alimentos pueden sembrar el caos en el proceso de descomposición de la materia orgánica, el cóctel perfecto entre materiales frescos y secos. Todo lo que quisisteis aprender sobre el compost, pero nunca os atrevisteis a preguntar”.</p><p>Apetecible, ¿verdad? ¡Te esperamos el miércoles 21-N! El taller es abierto y no es necesaria inscripción previa.</p>`,
    image: null,
  },
  {
    title: "Participamos en el concurso de huertos escolares",
    date: "23 de mayo de 2018",
    author: "Elena",
    content: `<p>El colegio San Benito se presenta de nuevo al concurso de huertos escolares. En este enlace pueden verse los vídeos y podéis apoyar el nuestro. Para votarlo, simplemente hay que darle al like. ¡Esperamos que os guste!</p><p>Listado de todos los vídeos a concurso:</p><p><a href="https://www.youtube.com/playlist?list=PLQMFBBEsDRs5sGvn1lXglva4NEvPyegxR" target="_blank" class="text-primary hover:underline">https://www.youtube.com/playlist?list=PLQMFBBEsDRs5sGvn1lXglva4NEvPyegxR</a></p>`,
    image: null,
  },
  {
    title: "Este viernes, taller de compostaje en el huerto del cole",
    date: "30 de enero de 2018",
    author: "Elena",
    content: `<p>La Comisión de Hortelanas os invita a participar en un pequeño taller sobre compostaje que tendrá lugar el próximo viernes, 2 de febrero, de 16:00 a 17:30 en el huerto del cole (el grande, el de primaria). Uno de los objetivos de la actividad será poner en marcha la compostera existente. Para ello, os pedimos que llevéis, ese día y a esa hora, un poco de basura orgánica de vuestros domicilios, la procedente de restos de verdura y fruta.</p><p>Además, si alguien tiene a mano una tijera de podar, será bienvenida en el taller.</p><p>Efectivamente, esta es una actividad que planteamos hace unas semanas pero tuvimos que suspender a última hora. Ahora la retomamos para padres, madres e hijos.</p><p>Contra el frío, práctica huerting. ¡Nos vemos este viernes!</p>`,
    image: null,
  },
  {
    title: "La AMPA del San Benito te lleva al huerto",
    date: "20 de noviembre de 2017",
    author: "Elena",
    content: `<p>La AMPA del San Benito ha organizado un taller de iniciación sobre huertos para familias este viernes, día 24 de noviembre, a las 16 horas. Al mismo, con una duración de una hora y media, pueden acudir padres y madres con sus hijos.</p><p>El taller, que tendrá lugar en el huerto de Primaria de nuestro colegio y es gratuito, será impartido por Andrea, la monitora de la cooperativa Germinando. Consistirá en una iniciación al compostaje y un trivial hortelano, con el objetivo de aprender jugando.</p><p>Los niños y niñas pueden participar en la actividad, si bien también dispondremos de un servicio de cuidado de nuestros hijos e hijas para los padres que lo prefieran. No pierdas la oportunidad de aprender más sobre agricultura ecológica y huertos de un modo divertido y ameno. ¡Os esperamos!</p>`,
    image: {
      src: "/images/noticias/taller-huerto.jpg",
      alt: "Taller huerto",
      width: 600,
      height: 400,
      hint: "gardening workshop"
    }
  },
  {
    title: "I Certamen de horticultura creativa Vive en verde el San Benito FALLO DEL JURADO",
    date: "31 de marzo de 2012",
    author: "guillermotropos",
    content: `<p>Aquí tenéis a los premiados del I Certamen de horticultura creativa: el señor carretilla, el edificio y la caja de fruta florecida. El certamen ha sido todo un éxito y se han presentado nada más y nada menos que 6O MACETAS de todos los niños y niñas del San Benito. Muchas gracias a todos por participar y a las familias que han colaborado con imaginación y un par de tijeras. Queremos agradecer también a todos los profesores implicados su colaboración con la recogida de macetas y a la dirección su buena disposición hacia esta iniciativa. Voy a subir más fotos de otras macetas que nos han encantado y ¡por supuesto! un post para explicaros cómo cuidar vuestras lechugas. Ah, ¡y lo más importante! Esto no hubiera sido posible sin la iniciativa, el trabajo y el entusiasmo de nuestra monitora de huerto, Laura. Un besote para ella.</p>`,
    image: null,
  },
];
