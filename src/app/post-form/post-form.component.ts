import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post-model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup(
      {
        title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)])),
        body: new FormControl('', Validators.minLength(4)),
        author: new FormControl('', [Validators.minLength(3), Validators.maxLength(12)]),
        category: new FormControl('', Validators.required)
      }
    );
  }

  /* 
    ngOnInit() {
      this.form = new FormGroup(
        {
          title: new FormControl(''),
          body: new FormControl(''),
          author: new FormControl(''),
          category: new FormControl('')
        }
      ); */
  onSubmit(post: Post) {
    console.log(post);



  }
}
