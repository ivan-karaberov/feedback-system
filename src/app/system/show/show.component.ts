import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnsQuestion, Question } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit{
  constructor(private route: ActivatedRoute, private auth:AuthService, private router: Router, private user: UserService){}

  answers!: AnsQuestion[];

  author!: string;
  title!: string;
  id!:number;
  ngOnInit(){
    this.author = this.route.snapshot.params['author'];
    this.title = this.route.snapshot.params['title'];
    this.user.getTestByTitle(this.author, this.title).forEach((resp:Question[]) => {
      for(let i = 0;i<resp.length;i++){
        console.log(resp[0]);
        this.answers = resp[i].answers;
      }
    });

    this.user.getTestByTitle(this.author, this.title).subscribe(resp => this.id = resp[0].id);
  }

  delete(){
    this.user.deletePost(this.id);
    alert('Успешно удалено');
    this.router.navigate(['']);
  }

  exit(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
