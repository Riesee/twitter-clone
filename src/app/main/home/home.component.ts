import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/services/config.service';
import { FormComponent } from "../components/form.component";
import { PostsComponent } from "../components/posts/posts.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FormComponent, PostsComponent]
})
export class HomeComponent implements OnInit {
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.config.updateHeaderSettings('Home');
  }

}
