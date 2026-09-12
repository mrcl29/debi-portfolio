// src/i18n/ui.ts
import { fullOwnerName } from "@/constants/constants";
import type langDict from "./types/langDict";
import Branding from "@/components/sections/Branding.astro";
import Events from "@/components/sections/Events.astro";

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
                    {
                        id: 'events',
                        title: "EVENTOS",
                        component: Events,
                        description: [
                            "Diseño y desarrollo de la comunicación visual de la III edición de ¿Cuál es tu huella? Iniciativas y empresas que aportan valor, un encuentro impulsado para dar visibilidad a proyectos, profesionales y empresas que generan un impacto positivo en la sociedad.",
                            "Se creó una identidad accesible para todas las personas y capaz de transmitir los valores del evento: inspiración, compromiso, innovación y contribución social.",
                            "Se aplicó el diseño en diferentes formatos, tanto digitales como físicos."
                        ]
                    },
                    { id: 'editorial', title: "EDITORIAL", component: Branding  },
                    { id: 'art-direction', title: "D. DE ARTE", component: Branding  }
                ]
            },
            aboutMe: {
                title: 'Sobre Mí',
                greeting: '¡Hola!',
                bio: [
                    'Diseñadora gráfica creativa e inquieta, con una curiosidad constante por aprender, explorar nuevas ideas y afrontar cada proyecto como una oportunidad para crecer.',
                    'Me gusta encontrar el equilibrio entre estrategia y creatividad, buscando siempre la solución más adecuada para cada reto.',
                    'Disfruto construyendo conceptos con personalidad, cuidando los detalles y convirtiendo ideas en experiencias visuales con sentido.'
                ],
                experienceTitle: 'EXPERIENCIA LABORAL',
                experience: [
                    {
                        role: 'Diseñadora Gráfica Corporativa',
                        company: 'Esment',
                        period: '2025 – Actualidad',
                        tasks: [
                            'Diseñadora gráfica en el departamento de Comunicación y Marketing.',
                            'Miembro del equipo de preimpresión de Esment Impremta.',
                            'Gestión transversal entre ambos departamentos.',
                            'Dirección creativa, diseño y producción gráfica de eventos corporativos.',
                            'Desarrollo de materiales de comunicación online y offline.'
                        ]
                    },
                    {
                        role: 'Diseñadora Gráfica',
                        company: 'GOB',
                        period: '2023',
                        companySubtitle: "Grup Balear d'Ornitologia i Defensa de la Naturalesa",
                        tasks: [
                            'Diseño de piezas gráficas digitales para redes sociales y plataformas digitales.',
                            'Creación del logotipo conmemorativo del 50 aniversario de la organización.',
                            'Desarrollo de aplicaciones visuales para campañas de comunicación.'
                        ]
                    }
                ],
                educationTitle: 'FORMACIÓN',
                education: [
                    {
                        degree: 'Máster en Dirección de Arte y Creatividad Audiovisual',
                        period: '2025 – 2026',
                        institution: 'SHIFTA by ELISAVA · Barcelona'
                    },
                    {
                        degree: 'Grado Universitario en Diseño Gráfico',
                        period: '2021 – 2025',
                        institution: 'EASDIB · Palma'
                    }
                ],
                awardsTitle: 'PREMIOS Y PUBLICACIONES',
                awards: [
                    {
                        title: 'Finalista · Art Jove 2024',
                        year: '2023',
                        category: 'Especialidad Diseño Gráfico',
                        description: 'Seleccionada como finalista del certamen. Desarrollo de la propuesta de identidad gráfica para la edición siguiente.'
                    },
                    {
                        title: 'Ilustradora · Toponímia de sa Bastida i la seva contrada',
                        year: '2024',
                        description: 'Realización de ilustraciones de paisajes y lugares representativos para la publicación.'
                    }
                ],
                skillsTitle: 'Habilidades',
                skills: [
                    {
                        title: 'Software',
                        items: [
                            'Adobe InDesign',
                            'Adobe Photoshop',
                            'Adobe Illustrator',
                            'Adobe Lightroom',
                            'Adobe XD',
                            'Adobe Premiere Pro',
                            'Adobe Dimension'
                        ]
                    },
                    {
                        title: 'Otras herramientas',
                        items: ['Figma', 'SketchUp']
                    }
                ],
                personalProjects: {
                    title: 'Proyectos Personales',
                    linkText: 'Behance ↗',
                    items: [
                        'Proyectos de branding.',
                        'Dirección de arte.',
                        'Animación y stop motion.',
                        'Modelado y visualización 3D.'
                    ]
                }
            },
            contact: {
                title: 'Contacto',
                email: 'debi.milenova@gmail.com',
                socials: {
                    instagram: 'https://www.instagram.com/dm.dsign/',
                    linkedin: 'www.linkedin.com/in/deboramilenova',
                    behance: 'https://www.behance.net/deboramilenova'
                },
                form: {
                    name: 'Nombre',
                    email: 'Email',
                    message: 'Mensaje',
                    submit: 'Enviar',
                    success: '¡Mensaje enviado con éxito!'
                }
            },
            inspo: {
                title: 'Inspo',
                images: [
                    { url: 'https://picsum.photos/id/10/800/1200', caption: 'Atmosphere 01' },
                    { url: 'https://picsum.photos/id/20/1200/800', caption: 'Texture Study' },
                    { url: 'https://picsum.photos/id/30/800/800', caption: 'Color Palette' },
                    { url: 'https://picsum.photos/id/40/800/1000', caption: 'Composition' },
                    { url: 'https://picsum.photos/id/50/1000/800', caption: 'Light & Shadow' },
                    { url: 'https://picsum.photos/id/60/800/1200', caption: 'Typography' },
                    { url: 'https://picsum.photos/id/70/1200/1200', caption: 'Grid Systems' },
                    { url: 'https://picsum.photos/id/11/800/600', caption: 'Organic Forms' },
                    { url: 'https://picsum.photos/id/12/600/800', caption: 'Minimalism' },
                    { url: 'https://picsum.photos/id/13/1000/1000', caption: 'Abstract' },
                    { url: 'https://picsum.photos/id/14/800/1200', caption: 'Photography' },
                    { url: 'https://picsum.photos/id/15/1200/800', caption: 'UI Design' },
                    { url: 'https://picsum.photos/id/16/800/800', caption: 'Branding' },
                    { url: 'https://picsum.photos/id/17/800/1000', caption: 'Illustration' },
                    { url: 'https://picsum.photos/id/18/1000/800', caption: 'Editorial' }
                ]
            },
            lastProject: {
                title: 'Último Proyecto',
                description: [
                    'Desarrollo de una editorial de moda inspirada en la identidad de la revista Herdes y en la transformación social y cultural de la España de los años 80, construyendo una narrativa visual con los Pirineos como escenario principal.',
                    'Se creó el concepto "La montaña no cambió. Cambiaron los ojos que la miraban", explorando dos formas de relacionarse con el territorio: quien lo habita y quien lo descubre.',
                    'Esta dualidad definió la dirección artística, el estilismo y la narrativa fotográfica.'
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
                    {
                        id: 'events',
                        title: "EVENTS",
                        component: Events,
                        description: [
                            "Design and development of the visual communication for the 3rd edition of ¿Cuál es tu huella? Initiatives and companies that add value, a gathering fostered to give visibility to projects, professionals, and companies generating a positive impact on society.",
                            "An identity accessible to everyone was created, capable of conveying the event's values: inspiration, commitment, innovation, and social contribution.",
                            "The design was applied across various formats, both digital and physical."
                        ]
                    },
                    { id: 'editorial', title: "EDITORIAL", component: Branding  },
                    { id: 'art-direction', title: "ART DIR.", component: Branding  }
                ]
            },
            aboutMe: {
                title: 'About Me',
                greeting: 'Hello!',
                bio: [
                    'Creative and inquisitive graphic designer, driven by a constant curiosity to learn, explore new ideas, and approach every project as an opportunity to grow.',
                    'I enjoy finding the balance between strategy and creativity, always seeking the most fitting solution for each challenge.',
                    'I take pride in building concepts with personality, attending to the details, and turning ideas into meaningful visual experiences.'
                ],
                experienceTitle: 'WORK EXPERIENCE',
                experience: [
                    {
                        role: 'Corporate Graphic Designer',
                        company: 'Esment',
                        period: '2025 – Present',
                        tasks: [
                            'Graphic designer in the Communication and Marketing department.',
                            'Member of the Esment Impremta prepress team.',
                            'Cross-departmental management between both teams.',
                            'Creative direction, design, and graphic production of corporate events.',
                            'Development of online and offline communication materials.'
                        ]
                    },
                    {
                        role: 'Graphic Designer',
                        company: 'GOB',
                        period: '2023',
                        companySubtitle: "Grup Balear d'Ornitologia i Defensa de la Naturalesa",
                        tasks: [
                            'Design of digital graphic assets for social media and digital platforms.',
                            'Creation of the commemorative logo for the 50th anniversary of the organization.',
                            'Development of visual assets for communication campaigns.'
                        ]
                    }
                ],
                educationTitle: 'EDUCATION',
                education: [
                    {
                        degree: 'Master in Art Direction and Audiovisual Creativity',
                        period: '2025 – 2026',
                        institution: 'SHIFTA by ELISAVA · Barcelona'
                    },
                    {
                        degree: "Bachelor's Degree in Graphic Design",
                        period: '2021 – 2025',
                        institution: 'EASDIB · Palma'
                    }
                ],
                awardsTitle: 'AWARDS & PUBLICATIONS',
                awards: [
                    {
                        title: 'Finalist · Art Jove 2024',
                        year: '2023',
                        category: 'Graphic Design Category',
                        description: 'Selected as a finalist in the competition. Development of the visual identity proposal for the following edition.'
                    },
                    {
                        title: 'Illustrator · Toponímia de sa Bastida i la seva contrada',
                        year: '2024',
                        description: 'Creation of landscape illustrations and representative landmarks for the publication.'
                    }
                ],
                skillsTitle: 'Skills',
                skills: [
                    {
                        title: 'Software',
                        items: [
                            'Adobe InDesign',
                            'Adobe Photoshop',
                            'Adobe Illustrator',
                            'Adobe Lightroom',
                            'Adobe XD',
                            'Adobe Premiere Pro',
                            'Adobe Dimension'
                        ]
                    },
                    {
                        title: 'Other tools',
                        items: ['Figma', 'SketchUp']
                    }
                ],
                personalProjects: {
                    title: 'Personal Projects',
                    linkText: 'Behance ↗',
                    items: [
                        'Branding projects.',
                        'Art direction.',
                        'Animation and stop motion.',
                        '3D modeling and visualization.'
                    ]
                }
            },
            contact: {
                title: 'Contact',
                email: 'debi.milenova@gmail.com',
                socials: {
                    instagram: 'https://www.instagram.com/dm.dsign/',
                    linkedin: 'www.linkedin.com/in/deboramilenova',
                    behance: 'https://www.behance.net/deboramilenova'
                },
                form: {
                    name: 'Name',
                    email: 'Email',
                    message: 'Message',
                    submit: 'Send',
                    success: 'Message sent successfully!'
                }
            },
            inspo: {
                title: 'Inspo',
                images: [
                    { url: 'https://picsum.photos/id/10/800/1200', caption: 'Atmosphere 01' },
                    { url: 'https://picsum.photos/id/20/1200/800', caption: 'Texture Study' },
                    { url: 'https://picsum.photos/id/30/800/800', caption: 'Color Palette' },
                    { url: 'https://picsum.photos/id/40/800/1000', caption: 'Composition' },
                    { url: 'https://picsum.photos/id/50/1000/800', caption: 'Light & Shadow' },
                    { url: 'https://picsum.photos/id/60/800/1200', caption: 'Typography' },
                    { url: 'https://picsum.photos/id/70/1200/1200', caption: 'Grid Systems' },
                    { url: 'https://picsum.photos/id/11/800/600', caption: 'Organic Forms' },
                    { url: 'https://picsum.photos/id/12/600/800', caption: 'Minimalism' },
                    { url: 'https://picsum.photos/id/13/1000/1000', caption: 'Abstract' },
                    { url: 'https://picsum.photos/id/14/800/1200', caption: 'Photography' },
                    { url: 'https://picsum.photos/id/15/1200/800', caption: 'UI Design' },
                    { url: 'https://picsum.photos/id/16/800/800', caption: 'Branding' },
                    { url: 'https://picsum.photos/id/17/800/1000', caption: 'Illustration' },
                    { url: 'https://picsum.photos/id/18/1000/800', caption: 'Editorial' }
                ]
            },
            lastProject: {
                title: 'Last Project',
                description: [
                    'Development of a fashion editorial inspired by the identity of Herdes magazine and the social and cultural transformation of 1980s Spain, building a visual narrative with the Pyrenees as the main setting.',
                    'The concept "The mountain did not change. The eyes looking at it did" was created, exploring two ways of relating to the land: the one who inhabits it and the one who discovers it.',
                    'This duality shaped the art direction, styling, and photographic narrative.'
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
                    {
                        id: 'events',
                        title: "EVENTS",
                        component: Events,
                        description: [
                            "Disseny i desenvolupament de la comunicació visual de la III edició de ¿Cuál es tu huella? Iniciatives i empreses que aporten valor, una trobada impulsada per donar visibilitat a projectes, professionals i empreses que generen un impacte positiu en la societat.",
                            "Es va crear una identitat accessible per a tothom i capaç de transmetre els valors de l'esdeveniment: inspiració, compromís, innovació i contribució social.",
                            "Es va aplicar el disseny en diferents formats, tant digitals com físics."
                        ]
                    },
                    { id: 'editorial', title: "EDITORIAL", component: Branding  },
                    { id: 'art-direction', title: "D. D'ART", component: Branding  }
                ]
            },
            aboutMe: {
                title: 'Sobre Mi',
                greeting: 'Hola!',
                bio: [
                    'Dissenyadora gràfica creativa i inquieta, amb una curiositat constant per aprendre, explorar noves idees i afrontar cada projecte com una oportunitat per créixer.',
                    "M'agrada trobar l'equilibri entre estratègia i creativitat, buscant sempre la solució més adequada per a cada repte.",
                    'Gaudeixo construint conceptes amb personalitat, cuidant els detalls i transformant idees en experiències visuals amb sentit.'
                ],
                experienceTitle: 'EXPERIÈNCIA LABORAL',
                experience: [
                    {
                        role: 'Dissenyadora Gràfica Corporativa',
                        company: 'Esment',
                        period: '2025 – Actualitat',
                        tasks: [
                            'Dissenyadora gràfica al departament de Comunicació i Màrqueting.',
                            'Membre de l\'equip de preimpressió d\'Esment Impremta.',
                            'Gestió transversal entre ambdós departaments.',
                            'Direcció creativa, disseny i producció gràfica d\'esdeveniments corporatius.',
                            'Desenvolupament de materials de comunicació online i offline.'
                        ]
                    },
                    {
                        role: 'Dissenyadora Gràfica',
                        company: 'GOB',
                        period: '2023',
                        companySubtitle: "Grup Balear d'Ornitologia i Defensa de la Naturalesa",
                        tasks: [
                            'Disseny de peces gràfiques digitals per a xarxes socials i plataformes digitals.',
                            'Creació del logotip commemoratiu del 50è aniversari de l\'organització.',
                            'Desenvolupament d\'aplicacions visuals per a campanyes de comunicació.'
                        ]
                    }
                ],
                educationTitle: 'FORMACIÓ',
                education: [
                    {
                        degree: 'Màster en Direcció d\'Art i Creativitat Audiovisual',
                        period: '2025 – 2026',
                        institution: 'SHIFTA by ELISAVA · Barcelona'
                    },
                    {
                        degree: 'Grau Universitari en Disseny Gràfic',
                        period: '2021 – 2025',
                        institution: 'EASDIB · Palma'
                    }
                ],
                awardsTitle: 'PREMIS I PUBLICACIONS',
                awards: [
                    {
                        title: 'Finalista · Art Jove 2024',
                        year: '2023',
                        category: 'Especialitat Disseny Gràfic',
                        description: 'Seleccionada com a finalista del certamen. Desenvolupament de la proposta d\'identitat gràfica per a l\'edició següent.'
                    },
                    {
                        title: 'Il·lustradora · Toponímia de sa Bastida i la seva contrada',
                        year: '2024',
                        description: 'Realització d\'il·lustracions de paisatges i indrets representatius per a la publicació.'
                    }
                ],
                skillsTitle: 'Habilitats',
                skills: [
                    {
                        title: 'Software',
                        items: [
                            'Adobe InDesign',
                            'Adobe Photoshop',
                            'Adobe Illustrator',
                            'Adobe Lightroom',
                            'Adobe XD',
                            'Adobe Premiere Pro',
                            'Adobe Dimension'
                        ]
                    },
                    {
                        title: 'Altres eines',
                        items: ['Figma', 'SketchUp']
                    }
                ],
                personalProjects: {
                    title: 'Projectes Personals',
                    linkText: 'Behance ↗',
                    items: [
                        'Projectes de branding.',
                        'Direcció d\'art.',
                        'Animació i stop motion.',
                        'Modelatge i visualització 3D.'
                    ]
                }
            },
            contact: {
                title: 'Contacte',
                email: 'debi.milenova@gmail.com',
                socials: {
                    instagram: 'https://www.instagram.com/dm.dsign/',
                    linkedin: 'www.linkedin.com/in/deboramilenova',
                    behance: 'https://www.behance.net/deboramilenova'
                },
                form: {
                    name: 'Nom',
                    email: 'Email',
                    message: 'Missatge',
                    submit: 'Enviar',
                    success: 'Missatge enviat amb èxit!'
                }
            },
            inspo: {
                title: 'Inspo',
                images: [
                    { url: 'https://picsum.photos/id/10/800/1200', caption: 'Atmosphere 01' },
                    { url: 'https://picsum.photos/id/20/1200/800', caption: 'Texture Study' },
                    { url: 'https://picsum.photos/id/30/800/800', caption: 'Color Palette' },
                    { url: 'https://picsum.photos/id/40/800/1000', caption: 'Composition' },
                    { url: 'https://picsum.photos/id/50/1000/800', caption: 'Light & Shadow' },
                    { url: 'https://picsum.photos/id/60/800/1200', caption: 'Typography' },
                    { url: 'https://picsum.photos/id/70/1200/1200', caption: 'Grid Systems' },
                    { url: 'https://picsum.photos/id/11/800/600', caption: 'Organic Forms' },
                    { url: 'https://picsum.photos/id/12/600/800', caption: 'Minimalism' },
                    { url: 'https://picsum.photos/id/13/1000/1000', caption: 'Abstract' },
                    { url: 'https://picsum.photos/id/14/800/1200', caption: 'Photography' },
                    { url: 'https://picsum.photos/id/15/1200/800', caption: 'UI Design' },
                    { url: 'https://picsum.photos/id/16/800/800', caption: 'Branding' },
                    { url: 'https://picsum.photos/id/17/800/1000', caption: 'Illustration' },
                    { url: 'https://picsum.photos/id/18/1000/800', caption: 'Editorial' }
                ]
            },
            lastProject: {
                title: 'Últim Projecte',
                description: [
                    'Desenvolupament d\'una editorial de moda inspirada en la identitat de la revista Herdes i en la transformació social i cultural de l\'Espanya dels anys 80, construint una narrativa visual amb els Pirineus com a escenari principal.',
                    'Es va crear el concepte "La muntanya no va canviar. Van canviar els ulls que la miraven", explorant dues maneres de relacionar-se amb el territori: qui l\'habita i qui el descobreix.',
                    'Aquesta dualitat va definir la direcció artística, l\'estilisme i la narrativa fotogràfica.'
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
