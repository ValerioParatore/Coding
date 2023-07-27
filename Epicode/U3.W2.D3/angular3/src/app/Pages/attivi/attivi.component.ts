import { Component } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrls: ['./attivi.component.scss']
})
export class AttiviComponent {
  pippo: Post[] = []
  constructor(private postSrv: PostService) {
    this.postSrv.isActive().then(_ => {
      this.pippo = this.postSrv.posts
    })
  }
  changeAct(el:number, current :boolean) {
    this.postSrv.changeAct(el,current)
  }
}
