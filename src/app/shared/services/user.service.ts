import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, Question } from "../interfaces";

@Injectable({
    providedIn: "root"
})
export class UserService{
    constructor(private http: HttpClient){}

    getAllTest(author: string){
        return this.http.get<Question[]>(`http://localhost:3000/questions?author=${author}`);
    }

    getNickname(){
        let user: User = JSON.parse(window.localStorage.getItem('user') || "")[0]
        return user.nickname;
    }
}