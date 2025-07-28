
import type { Announcement, Event, Service, Post } from './types';
import { BookOpen, Coffee, Gamepad2, GraduationCap, PartyPopper, Users, Utensils } from 'lucide-react';

export const announcements: Announcement[] = [
  {
    id: 1,
    slug: 'bicibus-navideno-2023',
    title: 'BICIBÚS NAVIDEÑO',
    excerpt: 'Hola, ya están las Navidades a la vuelta de la esquina y como cada año os queremos invitar al BICIBÚS ESPECIAL NAVIDEÑO que organizamos desde las AMPAS del CEIP San Benito y del CEIP Méjico.',
    content: `
<p>Hola, ya están las Navidades a la vuelta de la esquina y como cada año os queremos invitar al BICIBÚS ESPECIAL NAVIDEÑO que organizamos desde las AMPAS del CEIP San Benito y del CEIP Méjico.</p>
<p>Será el DOMINGO 17 a las 10.30 h. Saldremos del Auditorio del parque del Calero rumbo a la Quinta de los Molinos donde haremos un descanso (¡chocolate y polvorones para reponer energía!). Después regresaremos al punto de partida.</p>
<p>Este año tiene una motivación más, ya que gracias a la colaboración del TALLER SOCIAL GUINDALERA, PEDALIBRE, y BICILINEAL, terminaremos con una COMIDA SOLIDARIA en favor de SOS REFUGIADOS GUINDALERA y el proyecto BICIS TEMPORERAS.</p>
<p>Los que estéis interesados en asistir a la comida, debéis rellenar el siguiente formulario en el siguiente enlace:</p>
<p><a href="https://forms.gle/Y9W3Nh8RMsxj7mxH8" target="_blank" class="text-primary hover:underline">https://forms.gle/Y9W3Nh8RMsxj7mxH8</a></p>
<p>¡¡No olvidéis el casco, el chaleco y los adornos navideños en vuestros velocípedos!!</p>
<p>¡OS ESPERAMOS!</p>
<p>Grupo de Movilidad</p>
`,
    imageUrl: '/images/noticias/bicibus.jpg',
    date: '15 de Diciembre de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 2,
    slug: 'nuevos-libros-acoso-escolar',
    title: 'NUEVOS LIBROS SOBRE ACOSO ESCOLAR EN NUESTRA BIBLIOTECA',
    excerpt: 'Queridas familias, Hoy tenemos la alegría de informarnos, que como parte del proyecto sobre Acoso Escolar que estamos llevando a cabo desde la AMPA, se han adquirido algunos libros y cuentos sobre acoso escolar.',
    content: `
<p>Queridas familias,</p>
<p>Hoy tenemos la alegría de informarnos, que como parte del proyecto sobre Acoso Escolar que estamos llevando a cabo desde la AMPA, se han adquirido algunos libros y cuentos sobre acoso escolar.</p>
<p>En los próximos días estarán a disposición de nuestras hijas e hijos catalogados en las bibliotecas de Infantil y Primaria, .</p>
<p>Además, nuestra querida bibliotecaria va a crear un centro de interés con esta temática, para que nuestros pequeños lectores y lectoras lo tengan más localizado.</p>
<p>¡Os animamos a que invitéis a vuestros hijos e hijas a su lectura!</p>
<p>Confiamos en que ésta será una vía más de transmisión de conocimiento y de ayuda para ellos.</p>
<p>Grupo de Convivencia</p>
`,
    imageUrl: '/images/noticias/libros-acoso-escolar.jpg',
    date: '15 de Diciembre de 2023',
    author: 'irenecazanaampa',
  },
    {
    id: 3,
    slug: 'hablar-sobre-taller-acoso-escolar-en-casa',
    title: 'HABLAR SOBRE EL TALLER DE ACOSO ESCOLAR EN CASA',
    excerpt: 'Vuestros hijos han participado estos días en el Taller sobre Acoso Escolar y creemos que es una gran oportunidad que podáis hablar de ello en casa ahora...',
    content: `
<p>Queridas familias,</p>
<p>Vuestros hijos han participado estos días en el Taller sobre Acoso Escolar y creemos que es una gran oportunidad que podáis hablar de ello en casa ahora, que lo tienen muy reciente y aún estarán «procesando» toda la información.</p>
<p>Os animamos para ello que utilicéis las preguntas que os incluimos en este formulario u otras otras que se os ocurran, para favorecer la comunicación y que vean vuestra implicación en este tema tan importante.</p>
<p>La «pata» de la familia es crucial para que, entre todos, favorezcamos un entorno sano y seguro para nuestr@s hij@s. Aquellos que queráis, podréis enviarnos al menos la última pregunta contestada, donde se valora por parte de vuestros hij@s el taller.
Muchas gracias por vuestra implicación.</p>
<p><a href="https://forms.gle/DT34SDbNzQ7ohDb9A" target="_blank" class="text-primary hover:underline">https://forms.gle/DT34SDbNzQ7ohDb9A</a></p>
<p>¡¡¡ MUCHAS GRACIAS POR INVOLUCRAROS EN CREAR UN ENTORNO SANO PARA TODOS NUESTROS HIJ@S!!!</p>
<p>Comisión de Convivencia</p>
`,
    imageUrl: '/images/noticias/charla-acoso-escolar.jpg',
    date: '15 de Diciembre de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 4,
    slug: 'jornada-colaboracion',
    title: 'Jornada de colaboración',
    excerpt: 'Desde la comisión de Huerto os escribimos para comentaros que ayer lunes 13 de noviembre se realizó una jornada de colaboración...',
    content: `
<p>Desde la comisión de Huerto os escribimos para comentaros que ayer lunes 13 de noviembre se realizó una jornada de colaboración dentro de un proyecto de la metodología de Aprendizaje-servicio entre el alumnado de biología de 1° bachillerato del Colegio Blanca de Castilla y el alumnado de 3º y 4º de primaria del San Benito.</p>
<p>Los y las mayores han estado explicando a todos los/as peques la estructura y nutrición de las plantas. Y después unos juegos sobre lo trabajado con los que lo han pasado muy bien y afianzado conocimientos.</p>
<p>Después hemos bajado con ellos a trasplantar los plantones que habían llegado al colegio al inicio del otoño para el huerto.</p>
<p>La actividad ha resultado muy interesante y entretenida para grandes y peques. 👏🤗</p>
<p>Un abrazo a todos y todas<br>Comisión de Huerto</p>
`,
    imageUrl: '/images/noticias/jornada-colaboracion.jpg',
    date: '15 de Noviembre de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 5,
    slug: 'dia-internacional-contra-acoso-escolar',
    title: 'DÍA INTERNACIONAL CONTRA EL ACOSO ESCOLAR',
    excerpt: 'Hoy comienzan las Jornadas Ampa:”Todas y todos contra el acoso escolar”',
    content: `
<p>Hoy comienzan las Jornadas Ampa:”Todas y todos contra el acoso escolar”</p>
<p>Los Estados Miembros de la UNESCO han proclamado el primer jueves de noviembre como el Día internacional contra la violencia y el acoso en la escuela, reconociendo que la violencia escolar, en todas sus formas, constituye una violación de los derechos a la educación, salud y bienestar de los niños, niñas y adolescentes.<br>Bajo el tema «No al miedo: acabar con la violencia escolar para mejorar la salud mental y el aprendizaje», se quiere poner de relieve los fuertes vínculos que existen entre la violencia escolar y la salud mental.</p>
<p>En esta primera Jornada, los alumnos y alumnas de 6º realizarán dos talleres con la Fundación ANAR, (organización sin ánimo de lucro que ayuda a niños/as y adolescentes en riesgo.</p>
<p>En 2018, el Ministerio de Educación adjudicó a la Fundación ANAR la gestión de su nuevo Teléfono contra el Acoso Escolar)<br><a href="https://www.anar.org/telefono-chat-del-acoso-escolar/" target="_blank" rel="noopener" class="text-primary hover:underline">https://www.anar.org/telefono-chat-del-acoso-escolar/</a></p>
<p>Campaña del Ministerio de Educación y Formación Profesional 2021<br><a href="https://youtu.be/BVkQiL-7904" target="_blank" rel="noopener" class="text-primary hover:underline">https://youtu.be/BVkQiL-7904</a></p>
<p>Campaña Mediaset<br><a href="https://www.youtube.com/watch?v=fWQ_XqU2aG0&ab_channel=12MesesMediaset" target="_blank" rel="noopener" class="text-primary hover:underline">https://www.youtube.com/watch?v=fWQ_XqU2aG0&ab_channel=12MesesMediaset</a></p>
`,
    imageUrl: '/images/noticias/stop-bullying.jpg',
    date: '2 de Noviembre de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 6,
    slug: 'bizcochada-bienvenida',
    title: 'BIZCOCHADA DE BIENVENIDA',
    excerpt: 'Empezamos un nuevo año escolar y aprovechando que ya tenemos jornada escolar completa y han comenzado las actividades extraescolares, queremos retomar la bizcochada de bienvenida al nuevo curso que será el martes 3 de octubre de 17:00 a 19:00.',
    content: `
<p>Empezamos un nuevo año escolar y aprovechando que ya tenemos jornada escolar completa y han comenzado las actividades extraescolares, queremos retomar la bizcochada de bienvenida al nuevo curso que será el martes 3 de octubre de 17:00 a 19:00.</p>
<p>Trae tu bizcocho o postre preferido, si es casero mucho mejor, nosotras ponemos el chocolate. Necesitamos que indiqueis en un papel los ingredientes utilizados, para gestionar las alergias e intolerancias de una forma segura. El bizcocho podéis traerlo por la tarde, o dejarlo por la mañana en Secretaría. Lo que mejor os venga!</p>
<p>Durante este piscolabis de bienvenida, el AMPA montará un espacio para atender todas las dudas y preguntas sobre el nuevo curso que se os ocurran.</p>
<p>Como hacemos con todas las actividades que organizamos, os pedimos colaboración para llevar a cabo la bizcochada del martes. Necesitamos personas que se ofrezcan a hacer algún dulce sin gluten y sin lactosa y a elaborar el chocolate, así como a montar las mesas y todo lo necesario para el encuentro.</p>
<p>Si os apetece y podéis colaborar, podéis escribir un correo dejando vuestro número de móvil a sanbenito@ampasanbenito.org</p>
<p>¡Nos vemos todos el martes!</p>
`,
    imageUrl: '/images/noticias/bizcochada.jpg',
    date: '28 de Septiembre de 2023',
    author: 'irenecazanaampa',
  },
    {
    id: 7,
    slug: 'extraescolares-2023-2024',
    title: 'EXTRAESCOLARES 2023/2024',
    excerpt: '¡Hola familias! Seguimos poniendo en marcha este nuevo curso, ahora le toca a las actividades extraescolares.',
    content: `
<p>¡Hola familias!</p>
<p>Seguimos poniendo en marcha este nuevo curso, ahora le toca a las actividades extraescolares. Os queremos hacer llegar la oferta de actividades extraescolares para este curso 2023-2024, esperamos se adapte a las necesidades e inquietudes de todos nuestros peques y familias. Veréis que se ha cambiado la empresa que imparte el grueso de las actividades, pasando de Dinamo a Aula Joven.</p>
<p>Al igual que otros años, las actividades darán comienzo el día lunes 2 de octubre y se desarrollarán hasta el día viernes 31 de mayo, en horario de 16:00 a 17:00.</p>
<p>Para apuntarse a las actividades extraescolares podéis:</p>
<ul class="list-disc list-inside">
<li>Haceros socios/as del AMPA (la informacion aquí) con una sola cuota anual de 30 € por familia (15 € para familias con un miembro en paro y familias numerosas, y gratuito para familias con dos de sus miembros en paro)</li>
<li>Inscribiros sin haceros socios/as, lo que implica una matrícula de 50 € por niño/a (independientemente del número de actividades).</li>
</ul>
<p>El plazo de inscripción para las actividades abarca desde el viernes 15 de septiembre hasta el jueves 21 de septiembre, ambos inclusive.</p>
`,
    imageUrl: '/images/noticias/extraescolares.jpg',
    date: '15 de Septiembre de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 8,
    slug: 'comenzamos-nuevo-curso',
    title: '¡Comenzamos nuevo curso!',
    excerpt: 'Buenas familias, ¡ya estamos de vuelta! Hace nada que nos estabamos despidiendo en la puerta del cole y ya tenemos aqui septiembre y el inicio del nuevo curso.',
    content: `
<p>Buenas familias, ¡ya estamos de vuelta!</p>
<p>Hace nada que nos estabamos despidiendo en la puerta del cole y ya tenemos aqui septiembre y el inicio del nuevo curso.<br>Damos un caluroso abrazo a las familias recién llegadas al colegio.</p>
<p>Para estas nuevas familias, y todes en general, se adjunta toda la información importante para este inicio de curso, los servicios de conciliación para este curso 2023/2024 y de cómo haceros socias.</p>
`,
    imageUrl: '/images/noticias/vuelta-al-cole.jpg',
    date: '6 de Septiembre de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 9,
    slug: 'inscripcion-madrugadores',
    title: 'Inscripción de madrugadores',
    excerpt: 'Queridas familias, esperamos que estais teniendo un buen verano🏄. Desde el AMPA, ya estamos trabajando en el inicio de curso.',
    content: `
<p>Queridas familias, esperamos que estais teniendo un buen verano🏄.</p>
<p>Desde el AMPA, ya estamos trabajando en el inicio de curso.</p>
<p>Os dejamos en esta entrada la informacion del programa «Primeros del Colegio» tan necesaria para la conciliación de las familias que se organiza con el grupo Espiral.</p>
`,
    imageUrl: '/images/noticias/madrugadores.jpg',
    date: '10 de Julio de 2023',
    author: 'irenecazanaampa',
  },
    {
    id: 10,
    slug: 'fiesta-fin-curso-2023',
    title: 'FIESTA FIN DE CURSO',
    excerpt: 'Queridas familias, ya llega el final del curso, y desde la AMPA queremos celebrarlo con todos vosotros.',
    content: `
<p>Queridas familias, ya llega el final del curso, y desde la AMPA queremos celebrarlo con todos vosotros.</p>
<p>Os esperamos el próximo miércoles 21 de junio, de 17h a 20h. ¡¡Habrá merienda, juegos, hinchables, música y mucha diversión!! La fiesta es para todas las familias del cole, seáis socias del AMPA o no, para que todos nuestros niños y niñas puedan disfrutar juntos.</p>
<p>Por supuesto, cualquier ayuda siempre será bienvenida, ¡¡nunca hay suficientes manos!! Si podéis venir un ratito antes de las 17h o quedaros a recoger un poco después, os rogamos nos escribáis al correo sanbenito@ampasanbenito.org en estos días para que podamos organizarnos.</p>
<p>¡Allí os esperamos!</p>
`,
    imageUrl: '/images/noticias/fiesta-fin-de-curso.jpg',
    date: '16 de Junio de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 11,
    slug: 'informacion-becas-comedor',
    title: 'INFORMACIÓN IMPORTANTE: BECAS COMEDOR',
    excerpt: 'Buenas familias, Os informamos que ya se pueden solicitar las becas del comedor para el próximo curso escolar.',
    content: `
<p>Buenas familias,<br>Os informamos que ya se pueden solicitar las becas del comedor para el próximo curso escolar.<br>El proceso ha cambiado y no es el Centro quien lo gestiona como en curso anteriores, sino que es la Consejería de Educación directamente que lo hace. El Centro actúa como mero colaborador en la recepción de documentos, en el caso que se elija presentarla en este.</p>
`,
    imageUrl: '/images/noticias/becas-comedor.jpg',
    date: '8 de Junio de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 12,
    slug: 'campeones-copa-primavera',
    title: '¡¡¡CAMPEONES!!!',
    excerpt: 'Familias, ¡tenemos la COPA PRIMAVERA! El domingo 4 de junio, nuestro equipo de baloncesto ganó la final de la copa Primavera...',
    content: `
<p>Familias, ¡tenemos la COPA PRIMAVERA!</p>
<p>El domingo 4 de junio, nuestro equipo de baloncesto ganó la final de la copa Primavera con un resultado de 41 a 30 frente al equipo DOSA (colegio Santo Domingo Savio).<br>El partido fue muy emocionante y disputado. Ambos equipos lo dieron todo en la cancha, pero finalmente el equipo rival no tuvo nada que hacer frente a nuestros chicos y chicas.<br>Damos las gracias a toda la afición que asistió con sus camisetas rojas a animar sin descanso todo el partido.</p>
<p>🏆🏀¡¡Enhorabuena campeones!! 🏀🏆</p>
`,
    imageUrl: '/images/noticias/campeones-baloncesto.jpg',
    date: '7 de Junio de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 13,
    slug: 'final-copa-primavera',
    title: 'Final de la Copa de Primavera',
    excerpt: 'Familias, hoy estamos muy emocionados por nuestros chicas y chicos de Baloncesto, ¡¡el equipo del CEIP San Benito ha pasado a la final de la Copa Primavera!!',
    content: `
<p>Familias, hoy estamos muy emocionados por nuestros chicas y chicos de Baloncesto, ¡¡el equipo del CEIP San Benito ha pasado a la final de la Copa Primavera!!</p>
<p>Nuestro equipazo se enfrentará al DOSA, un equipo durisimo y un partido que promete ser apasionante.</p>
<p>La final se disputará este domingo 4 a las 12.00 en el colegio Santo Domingo Savio (C. Santo Domingo Savio, 2, Madrid).</p>
<p>Os animamos a todas las familias a asistir al partido con alguna prenda roja, el color de la equipación, para darles todo nuestro apoyo y la más calurosa de las ovaciones.</p>
<p>¡¡Pase lo que pase, ya son nuestras/os campeonas/es!!</p>
`,
    imageUrl: '/images/noticias/final-baloncesto.jpg',
    date: '31 de Mayo de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 14,
    slug: 'reactivacion-redes-sociales',
    title: 'Reactivacion de las redes sociales del AMPA',
    excerpt: 'Queridas familias, hace unos meses hemos reactivado nuestros perfiles en las redes sociales y queremos animaros a que nos sigais.',
    content: `
<p>Queridas familias, hace unos meses hemos reactivado nuestros perfiles en las redes sociales y queremos animaros a que nos sigais.</p>
<p>En ellas, además de publicar noticias sobre nuestras actividades en el cole, también compartimos otras noticias del exterior que consideramos pueden ser de vuestro interés: noticias del barrio, actividades culturales o cursos gratuitos, etc. No dejéis de estar enterados de todo!!</p>
`,
    imageUrl: '/images/noticias/redes-sociales.jpg',
    date: '8 de Mayo de 2023',
    author: 'irenecazanaampa',
  },
  {
    id: 15,
    slug: 'taller-batch-cooking',
    title: 'Taller de BATCH COOKING y planificación semanal',
    excerpt: 'El próximo lunes, 8 de mayo de 16h a 17h, realizaremos un taller de Batch Cooking y planificación de menús con la dietista-nutricionista Alicia Arenas.',
    content: `
<p>El próximo lunes, 8 de mayo de 16h a 17h, realizaremos un taller de Batch Cooking y planificación de menús con la dietista-nutricionista Alicia Arenas.</p>
<p>Se trata de un método para diseñar un menú saludable, equilibrado y adaptado a cada familia, preparando posteriormente diferentes platos o ingredientes que serán conservados adecuadamente en la nevera o congelador para ahorrar tiempo y dinero.</p>
<p>Si no tenéis tiempo y estáis cansados de improvisar de mala manera vuestras comidas y cenas, éste es vuestro taller.</p>
<p>Tendrá, también gratuitamente, el servicio de cuidado de vuestros hijos para que podáis asistir sin problema.</p>
<p>¡No faltéis que será seguro muy interesante!</p>
`,
    imageUrl: '/images/noticias/batch-cooking.jpg',
    date: '2 de Mayo de 2023',
    author: 'irenecazanaampa',
  }
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
