
import type { Announcement, Event, Service } from './types';
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
    imageUrl: '/images/noticias/bicibus.png',
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
    imageUrl: '/images/noticias/nuevosLibros.webp',
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
    imageUrl: '/images/noticias/tallerAcoso.png',
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
    imageUrl: '/images/noticias/jornadaColaboracion.png',
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
    imageUrl: '/images/noticias/dia-acoso-escolar.jpeg',
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
    imageUrl: '/images/noticias/bizcochada.webp',
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
    imageUrl: '/images/noticias/extraescolares.jpeg',
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
    imageUrl: '/images/noticias/bienvenidos.jpg',
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
    imageUrl: '/images/noticias/madrugadores.jpeg',
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
    imageUrl: '/images/noticias/fiestaFinCurso.png',
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
    imageUrl: '/images/noticias/becas-comedor.jpeg',
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
    imageUrl: '/images/noticias/campeonesBaloncesto.jpeg',
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
    imageUrl: '/public/images/noticias/finalCopaPrimavera.jpg',
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
    imageUrl: '/public/images/noticias/reactivacionRRSS.webp',
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
    imageUrl: '/public/images/noticias/tallerBatchCooking.webp',
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

    