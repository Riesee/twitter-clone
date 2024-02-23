import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  headerTitle = signal<string> ("");
  showBackArrow = signal<boolean>(false);

  constructor() { }

  updateHeaderSettings(title: string, showBackArrow: boolean = false) {
    this.headerTitle.set(title);
    this.showBackArrow.set(showBackArrow);
  }
}
