import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{ BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  private posts: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  posts$ = this.posts.asObservable();




  constructor(private http: HttpClient) {}
  getUsers(){
    return this.http.get(this.url);
  }

}
