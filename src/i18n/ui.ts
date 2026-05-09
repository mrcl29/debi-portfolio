// src/i18n/ui.ts
import { fullOwnerName } from "@/constants/constants";
import type langDict from "./types/langDict";
import Branding from "@/components/sections/Branding.astro";

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
                title: 'Proyectos',
                sections: [
                    { id: 'branding', title: "MARCA", component: Branding },
                    { id: 'events', title: "EVENTOS", component: Branding  },
                    { id: 'editorial', title: "EDITORIAL", component: Branding  },
                    { id: 'art-direction', title: "D. DE ARTE", component: Branding  }
                ]
            },
            aboutMe: {
                title: 'Sobre Mí',
                bio: [
                    "Soy Debora, diseñadora gráfica con base en Barcelona. Mi trabajo se centra en la intersección entre la estética minimalista y la funcionalidad radical.",
                    "Con más de 5 años de experiencia en branding y dirección de arte, ayudo a las marcas a encontrar su voz visual a través de conceptos sólidos y ejecución impecable."
                ],
                experience: [
                    { year: '2023 - Pres.', title: 'Freelance Art Director', description: 'Trabajando con clientes internacionales en proyectos de identidad y digital.' },
                    { year: '2020 - 2022', title: 'Senior Designer @ Studio-X', description: 'Liderando el equipo de diseño en proyectos de branding y editorial.' }
                ]
            },
            contact: {
                title: 'Contacto',
                email: 'hola@debi.design',
                socials: {
                    instagram: 'https://instagram.com/debi.design',
                    linkedin: 'https://linkedin.com/in/deboraportfolio',
                    behance: 'https://behance.net/debi-art'
                }
            },
            inspo: {
                title: 'Inspo',
                images: [
                    { url: 'https://picsum.photos/800/1200?random=1', caption: 'Atmosphere 01' },
                    { url: 'https://picsum.photos/800/1200?random=2', caption: 'Texture Study' },
                    { url: 'https://picsum.photos/800/1200?random=3', caption: 'Color Palette' }
                ]
            },
        },
        nav: {
            projects: 'PROYECTOS',
            aboutMe: 'SOBRE MÍ',
            contact: 'CONTACTO',
            inspo: 'INSPO',
            lastProject: 'ÚLTIMO PROYECTO',
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
                sections: [
                    { id: 'branding', title: "BRANDING", component: Branding },
                    { id: 'events', title: "EVENTS", component: Branding  },
                    { id: 'editorial', title: "EDITORIAL", component: Branding  },
                    { id: 'art-direction', title: "ART DIR.", component: Branding  }
                ]
            },
            aboutMe: {
                title: 'About Me',
                bio: [
                    "I am Debora, a graphic designer based in Barcelona. My work focuses on the intersection between minimalist aesthetics and radical functionality.",
                    "With over 5 years of experience in branding and art direction, I help brands find their visual voice through solid concepts and impeccable execution."
                ],
                experience: [
                    { year: '2023 - Pres.', title: 'Freelance Art Director', description: 'Working with international clients on identity and digital projects.' },
                    { year: '2020 - 2022', title: 'Senior Designer @ Studio-X', description: 'Leading the design team on branding and editorial projects.' }
                ]
            },
            contact: {
                title: 'Contact',
                email: 'hello@debi.design',
                socials: {
                    instagram: 'https://instagram.com/debi.design',
                    linkedin: 'https://linkedin.com/in/deboraportfolio',
                    behance: 'https://behance.net/debi-art'
                }
            },
            inspo: {
                title: 'Inspo',
                images: [
                    { url: 'https://picsum.photos/800/1200?random=1', caption: 'Atmosphere 01' },
                    { url: 'https://picsum.photos/800/1200?random=2', caption: 'Texture Study' },
                    { url: 'https://picsum.photos/800/1200?random=3', caption: 'Color Palette' }
                ]
            },
        },
        nav: {
            projects: 'PROJECTS',
            aboutMe: 'ABOUT ME',
            contact: 'CONTACT',
            inspo: 'INSPO',
            lastProject: 'LAST PROJECT',
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
                sections: [
                    { id: 'branding', title: "MARCA", component: Branding },
                    { id: 'events', title: "EVENTS", component: Branding  },
                    { id: 'editorial', title: "EDITORIAL", component: Branding  },
                    { id: 'art-direction', title: "D. D'ART", component: Branding  }
                ]
            },
            aboutMe: {
                title: 'Sobre Mi',
                bio: [
                    "Sóc la Debora, dissenyadora gràfica amb base a Barcelona. La meva feina es centra en la intersecció entre l'estètica minimalista i la funcionalitat radical.",
                    "Amb més de 5 anys d'experiència en branding i direcció d'art, ajudo a les marques a trobar la seva veu visual a través de conceptes sòlids i execució impecable."
                ],
                experience: [
                    { year: '2023 - Pres.', title: 'Freelance Art Director', description: 'Treballant amb clients internacionals en projectes d\'identitat i digital.' },
                    { year: '2020 - 2022', title: 'Senior Designer @ Studio-X', description: 'Liderant l\'equip de disseny en projectes de branding i editorial.' }
                ]
            },
            contact: {
                title: 'Contacte',
                email: 'hola@debi.design',
                socials: {
                    instagram: 'https://instagram.com/debi.design',
                    linkedin: 'https://linkedin.com/in/deboraportfolio',
                    behance: 'https://behance.net/debi-art'
                }
            },
            inspo: {
                title: 'Inspo',
                images: [
                    { url: 'https://picsum.photos/800/1200?random=1', caption: 'Atmosphere 01' },
                    { url: 'https://picsum.photos/800/1200?random=2', caption: 'Texture Study' },
                    { url: 'https://picsum.photos/800/1200?random=3', caption: 'Color Palette' }
                ]
            },
        },
        nav: {
            projects: 'PROJECTES',
            aboutMe: 'SOBRE MI',
            contact: 'CONTACTE',
            inspo: 'INSPO',
            lastProject: 'ÚLTIM PROJECTE',
        },
    },
};
