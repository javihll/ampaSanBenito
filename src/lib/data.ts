
import type { Announcement, Event, Service, Post } from './types';
import { BookOpen, Coffee, Gamepad2, GraduationCap, PartyPopper, Users, Utensils } from 'lucide-react';

export const announcements: Omit<Announcement, 'content' | 'slug'>[] = [
 
];

export const events: Event[] = [

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
  
];
