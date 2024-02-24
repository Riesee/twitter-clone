import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../interface';
import { Subscription } from 'rxjs';
import { PostsService } from '../../shared/services/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostItemsComponent } from "./post-items.component";
import { LoaderComponent } from "../../shared/components/loader.component";


@Component({
    selector: 'app-posts',
    standalone: true,
    template: `
    <div class="flex justify-center align-middle" *ngIf="loading" >
    <loader />
    </div>
    <ng-container *ngFor="let post of posts" >
        <app-post-items *ngIf="post" [post]="post" />
    </ng-container>
  `,
    styles: ``,
    imports: [CommonModule, PostItemsComponent, LoaderComponent]
})
export class PostsComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  posts: Post[] = [];
  subscription!: Subscription;
  userId: string = '';

  constructor(private postService: PostsService,private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
      this.subscription = this.activatedRoute.paramMap?.subscribe((params: ParamMap) => {
        this.userId = params.get('id') || '';
        this.loading = true;
        this.getPosts();
      })
  }

  private getPosts(): void {
    this.subscription = this.postService.getPosts(this.userId).subscribe((posts) => {
      this.posts = posts;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
