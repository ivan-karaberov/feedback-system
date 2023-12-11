export interface User{
    nickname: string,
    email: string,
    password: string
}

export interface Question{
    title: string,
    author: string,
    date: string,
    answers: Array<object>
}