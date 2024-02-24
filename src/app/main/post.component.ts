import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from './shared/services/config.service';
import { PostItemsComponent } from "./components/posts/post-items.component";
import { LoaderComponent } from "./shared/components/loader.component";
import { FormComponent } from "./components/form.component";
import { CommentsComponent } from "./components/comments.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-post',
    standalone: true,
    template: `
    <div class="flex justify-center align-middle" *ngIf="loading" >
        <loader />
    </div>
    <app-post-items *ngIf="post" [post]="post" />
    <app-form placeholder="Tweet your reply" [postId]="post?.postId" [isComment]="true" />
    <app-comments *ngIf="post" [postId]="post.postId" />
  `,
    styles: ``,
    imports: [CommonModule, PostItemsComponent, LoaderComponent, FormComponent, CommentsComponent]
})
export class PostComponent implements OnInit {
  post!: any;
  loading: boolean = true;

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute, private config: ConfigService) { }


  ngOnInit(): void {
      this.config.updateHeaderSettings('Tweet', true)
      const postId = this.activatedRoute.snapshot.paramMap.get('id');
      this.fetchPost(postId);
  }

  fetchPost(postId: string | null): void {
    if (postId) {
      this.postService.getPost(postId).subscribe(post => {
         this.post = post
         this.loading = false
        });
    }
  }

}
