import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, Question, AnsQuestion, retQuestion } from "../interfaces";

@Injectable({
    providedIn: "root"
})
export class UserService{
    constructor(private http: HttpClient){}
    
    getAllTest(author: string){
        return this.http.get<Question[]>(`http://localhost:3000/questions?author=${author}`);
    }

    getTestByTitle(author: string, title: string){
        return this.http.get<retQuestion[]>(`http://localhost:3000/questions?author=${author}&title=${title}`);
    }

    getNickname(): string{
        let user: User = JSON.parse(window.localStorage.getItem('user') || "")[0]
        return user.nickname;
    }

    createSurvey(question: Question){
        return this.http.post(`http://localhost:3000/questions`, question);
    }

    addAnswer(id:number, question: Question, answer: AnsQuestion){
        if(id){
            question.answers.push(answer);
            console.log(question);
            console.log(id);
            this.http.put(`http://localhost:3000/questions/`+id+``, question).subscribe();
        }
        alert("Успех");
    }

    deletePost(id:number){
        this.http.delete(`http://localhost:3000/questions/`+id).subscribe();
    }
}