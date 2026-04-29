// src/i18n/ui.ts
import { fullOwnerName } from "@/constants/constants";
import type langDict from "./types/langDict";

export const languages = {
    es: 'Español',
    en: 'English',
    cat: 'Catalan',
};

export const defaultLang = 'es';

export const ui: Record<keyof typeof languages, langDict> = {
    es: {
        intro: {
            phrases: ["Hola, mi nombre es " + fullOwnerName + "...", "...soy diseñadora gráfica y directora de arte..."],
        },
        pages: {
            index: {
                title: 'Inicio'
            },
            projects: {
                title: 'Proyectos'
            },
            aboutMe: {
                title: 'Sobre Mí'
            },
            contact: {
                title: 'Contacto'
            },
            inspo: {
                title: 'Inspo'
            },
        },
        nav: {
            projects: 'PROYECTOS',
            aboutMe: 'SOBRE MÍ',
            contact: 'CONTACTO',
            inspo: 'INSPO',
        },
    },
    en: {
        intro: {
            phrases: ["Hello, my name is " + fullOwnerName + "...", "...I am a graphic designer and art director..."],
        },
        pages: {
            index: {
                title: 'Home'
            },
            projects: {
                title: 'Projects',
            },
            aboutMe: {
                title: 'About Me',
            },
            contact: {
                title: 'Contact',
            },
            inspo: {
                title: 'Inspo'
            },
        },
        nav: {
            projects: 'PROJECTS',
            aboutMe: 'ABOUT ME',
            contact: 'CONTACT',
            inspo: 'INSPO',
        },
    },
    cat: {
        intro: {
            phrases: ["Hola, el meu nom és " + fullOwnerName + "...", "...sóc dissenyadora gràfica i directora d'art..."],
        },
        pages: {
            index: {
                title: 'Inici'
            },
            projects: {
                title: 'Projectes',
            },
            aboutMe: {
                title: 'Sobre Mi',
            },
            contact: {
                title: 'Contacte',
            },
            inspo: {
                title: 'Inspo'
            },
        },
        nav: {
            projects: 'PROJECTES',
            aboutMe: 'SOBRE MI',
            contact: 'CONTACTE',
            inspo: 'INSPO',
        },
    },
};
