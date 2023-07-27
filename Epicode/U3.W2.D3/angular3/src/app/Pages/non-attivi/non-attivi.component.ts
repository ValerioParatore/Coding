import { Component } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-non-attivi',
  templateUrl: './non-attivi.component.html',
  styleUrls: ['./non-attivi.component.scss']
})
export class NonAttiviComponent {
  pippo: Post[] = [];
  constructor(private postService: PostService) {
    this.postService.isNotActive().then(_=>
      this.pippo = this.postService.posts)
   }
   changeAct(id:number, current:boolean){
    this.postService.changeAct(id, current)
   }
}
