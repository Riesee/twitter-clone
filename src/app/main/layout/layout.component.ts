import { Component } from '@angular/core';
import { SidebarComponent } from "../shared/components/sidebar.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/components/header.component";
import { FollowBarComponent } from "../shared/components/follow-bar.component";
import { LoginModalComponent } from "../shared/auth/login-modal/login-modal.component";
import { RegisterModalComponent } from "../shared/auth/register-modal/register-modal.component";
import { ModalComponent } from "../shared/components/modal.component";
import { ModelService } from '../shared/services/model.service';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../shared/services/config.service';


@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [SidebarComponent, RouterModule, HeaderComponent, FollowBarComponent, LoginModalComponent, RegisterModalComponent, ModalComponent, CommonModule]
})
export class LayoutComponent {
    constructor(public modalService: ModelService, public config: ConfigService){

    }
}
