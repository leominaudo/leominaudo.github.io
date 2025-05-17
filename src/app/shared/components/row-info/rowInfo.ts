export type Section = {
    name: string,
    info: Info[]
}

export type Info = {
    company?: { name: string, link?: string },
    period: string,
    title: string,
    description?: string,
    list?: string[],
    chips: string[]
}