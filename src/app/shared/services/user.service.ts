import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, Question } from "../interfaces";

@Injectable({
    providedIn: "root"
})
export class UserService{
    constructor(private http: HttpClient){}
    
    // existsTitle: boolean = false;
    
    // checkExistsTitle(author:string, title: string){
    //   let exists  = false;
    //   this.getAllTest(author).subscribe(
    //     (resp:Question[]) => {
    //         for(let i = 0; i < resp.length; i++){
    //             if(resp[i].title === title) {
    //                 exists = true;
    //                 console.log(resp[i].title, "test");
    //             }
    //         }
    //     }
    //   );
    //   return exists;
    // }
    
    getAllTest(author: string){
        return this.http.get<Question[]>(`http://localhost:3000/questions?author=${author}`);
    }

    getNickname(): string{
        let user: User = JSON.parse(window.localStorage.getItem('user') || "")[0]
        return user.nickname;
    }

    createSurvey(question: Question){
        return this.http.post(`http://localhost:3000/questions`, question);
    }
}