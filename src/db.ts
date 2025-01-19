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
        info: [
            {
                company: {
                    name: "Federazione Italiana Pallacanetro",
                    link: "https://fip.it/",
                },
                period: "11/2015 - 04/2018",
                title: "Arbitro di pallacanestro 🏀",
                description: "Arbitro regionale di serie D, B/F e C/F (5a categoria).",
                chips: ['Responsabilità']
            }
        ]
    },
    {
        name: "Formazione",
        info: [
            {
                company: {
                    name: "Corso Angular Evolution",
                    link: "https://www.fabiobiondi.dev/video-courses/angular-evolution",
                },
                period: "01/2024 - 09/2024",
                title: "Angular Evolution",
                description: "Angular Fundamentals, TypeScript e RxJS, Signals e Gestione stato, Creazione componenti riutilizzabili, Gestione Router e applicazioni multi-view, Comunicazione con il server tramite REST API, Organizzazione progetti in componenti e servizi, Applicare best practices e migliorare le performance, Sfruttare il motore di Dependency Injection, Deploy e introduzione al component testing in Cypress.",
                chips: ["Angular"]
            },
            {
                company: {
                    name: "CISITA",
                    link: "https://www.cisita.parma.it/",
                },
                period: "10/2023 - 12/2023",
                title: "Corsi di comunicazione",
                list: [
                    "Tecniche di comunicazione e negoziazione con il cliente (24h).",
                    "Comunicazione e problem solving (16h)."
                ],
                chips: ["Comunicazione"]
            },
            {
                company: {
                    name: "Università degli Studi di Parma",
                    link: "https://www.unipr.it/",
                },
                period: "09/2018 - 03/2023",
                title: "Ingegneria Informatica",
                description: "Laurea triennale in Ingegneria Informatica, Elettronica e delle Telecomunicazioni (Curriculum Informatico). Tesi: Reingegnerizzazione di una dashboard di Business Intelligence.",
                chips: []
            },
            {
                company: {
                    name: "I.T.I. Leonardo Da Vinci",
                    link: "https://www.isdavincitorre.edu.it/",
                },
                period: "09/2018 - 03/2023",
                title: "Diploma Informatico",
                description: "Progetto d'esame: Casa Domotica con Arduino con server Web",
                chips: []
            }
        ]

    }

];