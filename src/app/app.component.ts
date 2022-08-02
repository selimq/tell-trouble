import { Component } from '@angular/core';
import { Post } from './models/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tell-trouble';

  postList: Post[] = [
    { title: "Post Title", body: "Body ", createdAt: new Date, author: "Author", category: "Tavsiye" },
    { title: "Post Title1", body: "Body1 ", createdAt: new Date, author: "Author1", category: "Tavsiye" }
  ]
}
