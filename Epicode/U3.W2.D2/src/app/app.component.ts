import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Post } from './interfaces/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pippo: Post[] = []
  constructor(private postSrv: PostsService) {
    //per assicurarmi di assegnare la variabile solo DOPO il completamento di getPosts, utilizzo un .then (vedi => commento dentro .getPosts :D)
    this.postSrv.getPosts().then(_ => {
      this.pippo = this.postSrv.posts
    })
  }
}
