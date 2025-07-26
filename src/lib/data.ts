import type { Announcement, Event, Service } from './types';
import { BookOpen, Coffee, Gamepad2, GraduationCap, PartyPopper, Users, Utensils } from 'lucide-react';

export const announcements: Announcement[] = [
  {
    id: 1,
    slug: 'fiesta-fin-de-curso-2024',
    title: '¡Gran Fiesta de Fin de Curso 2024!',
    excerpt: 'Celebra con nosotros el final del año escolar. Habrá juegos, música y muchas sorpresas para toda la familia.',
    content: `
<p>¡El curso 2023-2024 llega a su fin y queremos celebrarlo por todo lo alto!</p>
<p>El próximo <strong>21 de junio</strong>, a partir de las <strong>17:00h</strong>, el patio del colegio se llenará de alegría y diversión con nuestra tradicional Fiesta de Fin de Curso. Este año hemos preparado un montón de actividades para que tanto niños como mayores pasen una tarde inolvidable.</p>
<h3 class="font-headline text-lg font-semibold mt-4 mb-2">Actividades Programadas:</h3>
<ul class="list-disc list-inside space-y-1">
  <li>Castillos hinchables y juegos de agua.</li>
  <li>Talleres de manualidades y pintacaras.</li>
  <li>Actuaciones musicales de nuestros pequeños artistas.</li>
  <li>Barra con comida y bebida a precios populares.</li>
  <li>Rifa solidaria con fantásticos premios.</li>
</ul>
<p class="mt-4">No te pierdas esta oportunidad de despedir el curso en comunidad y celebrar los logros de nuestros hijos. ¡Os esperamos a todos para compartir una jornada de convivencia y alegría!</p>
`,
    imageUrl: 'https://placehold.co/600x400.png',
    date: '30 de Mayo de 2024',
    author: 'Junta Directiva AMPA',
  },
  {
    id: 2,
    slug: 'asamblea-general-ordinaria',
    title: 'Convocatoria Asamblea General Ordinaria',
    excerpt: 'Se convoca a todos los socios a la Asamblea General Ordinaria que tendrá lugar el próximo 15 de junio en el salón de actos.',
    content: `
<p>Estimados socios y socias,</p>
<p>Por la presente, se os convoca a la <strong>Asamblea General Ordinaria</strong> de la Asociación de Madres y Padres de Alumnos del CEIP San Benito, que se celebrará el próximo <strong>sábado 15 de junio de 2024</strong>, a las <strong>10:00h</strong> en primera convocatoria y a las 10:30h en segunda, en el Salón de Actos del colegio.</p>
<h3 class="font-headline text-lg font-semibold mt-4 mb-2">Orden del día:</h3>
<ol class="list-decimal list-inside space-y-1">
  <li>Lectura y aprobación, si procede, del acta de la asamblea anterior.</li>
  <li>Presentación y aprobación de las cuentas del ejercicio 2023-2024.</li>
  <li>Resumen de actividades realizadas durante el curso.</li>
  <li>Propuestas y planificación de actividades para el curso 2024-2025.</li>
  <li>Ruegos y preguntas.</li>
</ol>
<p class="mt-4">Dada la importancia de los temas a tratar, os rogamos vuestra asistencia. Vuestra participación es fundamental para el buen funcionamiento de la asociación.</p>
`,
    imageUrl: 'https://placehold.co/600x400.png',
    date: '25 de Mayo de 2024',
    author: 'Secretaría AMPA',
  },
  {
    id: 3,
    slug: 'programa-banco-de-libros',
    title: 'Abierto el Plazo para el Banco de Libros 2024-2025',
    excerpt: 'Ya puedes inscribirte en el programa de reutilización de libros de texto para el próximo curso. ¡Ahorra y ayuda al medio ambiente!',
    content: `
<p>Un año más, ponemos en marcha nuestro exitoso programa de <strong>Banco de Libros</strong>. Esta iniciativa busca fomentar la reutilización de los libros de texto, suponiendo un importante ahorro para las familias y promoviendo valores de sostenibilidad y consumo responsable entre nuestros hijos.</p>
<p>El plazo para la donación de libros del curso actual y la solicitud para el curso 2024-2025 estará abierto desde el <strong>1 de junio hasta el 30 de junio</strong>.</p>
<h3 class="font-headline text-lg font-semibold mt-4 mb-2">¿Cómo participar?</h3>
<ul class="list-disc list-inside space-y-1">
  <li><strong>Donación:</strong> Trae los libros de texto que tus hijos ya no necesiten al local del AMPA. Deben estar en buen estado.</li>
  <li><strong>Solicitud:</strong> Rellena el formulario de solicitud disponible en nuestra web o en el local del AMPA.</li>
</ul>
<p class="mt-4">Gracias a la colaboración de todos, el curso pasado más de 100 familias se beneficiaron de este programa. ¡Súmate tú también!</p>
`,
    imageUrl: 'https://placehold.co/600x400.png',
    date: '20 de Mayo de 2024',
    author: 'Comisión Banco de Libros',
  },
  {
    id: 4,
    slug: 'menu-comedor-junio-2024',
    title: 'Menú del Comedor - Junio 2024',
    excerpt: 'Consulta el menú basal y las adaptaciones para el mes de junio.',
    content: '<p>Ya está disponible para su consulta el menú del comedor escolar correspondiente al mes de junio. Se incluyen el menú basal y las diferentes adaptaciones. ¡Buen provecho!</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: '29 de Mayo de 2024',
    author: 'Comisión de Comedor',
  },
  {
    id: 5,
    slug: 'extraescolares-2024-2025',
    title: 'Información Extraescolares 2024-2025',
    excerpt: 'Descubre la oferta de actividades extraescolares para el próximo curso y los plazos de inscripción.',
    content: '<p>Abrimos el plazo de inscripción para las actividades extraescolares del curso 2024-2025. Ofrecemos una amplia variedad de opciones para todos los gustos y edades. ¡No te quedes sin tu plaza!</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: '22 de Mayo de 2024',
    author: 'Comisión de Extraescolares',
  },
  {
    id: 6,
    slug: 'campamento-verano-2024',
    title: 'Campamento de Verano 2024',
    excerpt: '¿Aún sin planes para el verano? ¡Apúntate a nuestro campamento urbano! Diversión garantizada.',
    content: '<p>Este verano, el colegio se convierte en un espacio de diversión y aprendizaje con nuestro campamento urbano. Juegos, talleres, deportes y excursiones para que los niños disfruten de sus vacaciones.</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: '15 de Mayo de 2024',
    author: 'Junta Directiva AMPA',
  },
  {
    id: 7,
    slug: 'dias-sin-cole-mayo-2024',
    title: 'Días sin Cole - Mayo 2024',
    excerpt: 'Información sobre el servicio de guardería para los días no lectivos de mayo.',
    content: '<p>Para facilitar la conciliación familiar, ofrecemos el servicio "Días sin cole" durante los próximos días no lectivos del mes de mayo. Plazas limitadas.</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: '25 de Abril de 2024',
    author: 'Secretaría AMPA',
  },
  {
    id: 8,
    slug: 'menu-comedor-mayo-2024',
    title: 'Menú del Comedor - Mayo 2024',
    excerpt: 'Consulta el menú basal y las adaptaciones para el mes de mayo.',
    content: '<p>Ya está disponible para su consulta el menú del comedor escolar correspondiente al mes de mayo. Se incluyen el menú basal y las diferentes adaptaciones. ¡Buen provecho!</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: '28 de Abril de 2024',
    author: 'Comisión de Comedor',
  },
  {
    id: 9,
    slug: 'actividades-extraescolares-familias',
    title: 'Actividades Extraescolares para Familias',
    excerpt: 'Este trimestre ofrecemos nuevas actividades para que padres, madres e hijos disfruten juntos.',
    content: '<p>Ampliamos nuestra oferta de extraescolares con actividades pensadas para disfrutar en familia. Consulta los horarios y apúntate. ¡Una forma diferente de pasar la tarde!</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: '10 de Abril de 2024',
    author: 'Comisión de Extraescolares',
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
