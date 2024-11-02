import { CoverInfo } from "./app/shared/components/cover/cover";
import { Section } from "./app/shared/components/row-info/rowInfo";

export const cover: CoverInfo = {
    title: "Leonardo Minaudo",
    subTitle: "FULLSTACK DEVELOPER",
    description:
        "Sviluppatore software con esperienza in Angular e Spring Boot, con forte capacità di apprendimento e adattamento. Appassionato di tecnologia e innovazione.",
    avatarSrc: "/assets/image/photo.jpg"
}


export const rowInfo: Section[] = [

    {
        name: "Esperienze",
        companies: [
            {
                name: "Federazione Italiana Pallacanetro",
                link: "https://fip.it/",
                info: [
                    {
                        period: "11/2015 - 04/2018",
                        title: "Arbitro di pallacanestro 🏀",
                        description: "Arbitro regionale di serie D, B/F e C/F (5a categoria).",
                        chips: ['Responsabilità']
                    }
                ]

            }
        ]
    },
    {
        name: "Formazione",
        companies: [
            {
                name: "Università degli Studi di Parma",
                link: "https://www.unipr.it/",
                info: [
                    {
                        period: "09/2018 - 03/2023",
                        title: "Ingegneria Informatica",
                        description: "Laurea triennale in Ingegneria Informatica, Elettronica e delle Telecomunicazioni (Curriculum Informatico).",
                        chips: []
                    }
                ]

            }
        ]
    }

];