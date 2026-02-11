export default interface langDict {
    intro: {
        phrases: [string, string]
    },
    pages: {
        index: {
            title: string
        },
        projects: {
            title: string
        },
        aboutMe: {
            title: string
        },
        contact: {
            title: string
        },
    },
    nav: {
        index: string,
        projects: string,
        aboutMe: string,
        contact: string,
    }
}
