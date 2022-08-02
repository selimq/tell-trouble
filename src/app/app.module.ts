import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NewPostDirective } from './directives/new-post.directive';
import { PostListPipe } from './pipes/post-list.pipe';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [			
    AppComponent,
    PostItemComponent,
    PostListComponent,
    HighlightDirective,
    NewPostDirective,
    PostListPipe,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
