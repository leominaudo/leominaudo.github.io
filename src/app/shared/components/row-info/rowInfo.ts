export type Section = {
    name: string,
    companies: Company[]
}

export type Company = {
    name: string,
    link: string,
    info: Info[]
}

export type Info = {
    period: string,
    title: string,
    description: string,
    chips: string[]
}