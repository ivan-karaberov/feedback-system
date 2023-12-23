export interface User{
    nickname: string,
    email: string,
    password: string
}

export interface Question{
    title: string,
    author: string,
    date: string,
    answers: Array<AnsQuestion>
}

export interface retQuestion{
    id: number,
    title: string,
    author: string,
    date: string,
    answers: Array<AnsQuestion>
}

export interface AnsQuestion{
    fio: string,
    email: string,
    theme: string,
    message: string
}