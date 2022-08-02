import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post-model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() postList!: Post[] | undefined;

  ngOnInit() {
  }

}
