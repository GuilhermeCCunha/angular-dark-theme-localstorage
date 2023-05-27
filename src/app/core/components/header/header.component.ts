import { Component, OnInit } from '@angular/core';

// Enums
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;
  public theme: boolean = JSON.parse(localStorage.getItem('dark-theme') || '[]')
  constructor() {}

  ngOnInit() {
    if (this.theme === true) {
      this.theme = document.body.classList.toggle('dark-theme');
      this.icon = this.icon = ETheme.ICON_SUN
    }
  }

  public toggle() {
    this.theme = document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme', JSON.stringify(this.theme));
    if (this.theme) {
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN);
    }

    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }
}
