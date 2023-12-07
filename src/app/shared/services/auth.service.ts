import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User } from "../interfaces";

import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: "root"
})
export class AuthService{
    constructor(private http: HttpClient){}

    register(){}

    login(user: User): Observable<User[]>{
        /* Получаем пользователя(nickname, email, password) по email */
        return this.http.get<User[]>(`http://localhost:3000/users?email=${user.email}`);
    }

    setAuth(){
        
    }
}