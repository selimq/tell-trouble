import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post-model';

@Pipe({
  name: 'postListCount'
})
export class PostListPipe implements PipeTransform {

  transform(value: Post[]): string {

    return `${value.length} post bulunmakta`
  }

}
