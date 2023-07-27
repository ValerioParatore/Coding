import { Component } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  pippo: Post[] = []
  constructor(private postSrv: PostService) {
    this.postSrv.getPosts().then(_ => {
      this.pippo = this.postSrv.posts

      console.log(this.pippo)
    })
  }
}
