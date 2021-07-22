import { Component, Input, OnInit } from '@angular/core';
import { Application, isAndroid, Page } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  @Input() text: string;
  @Input() showBackButton = false;

  constructor(
    private router: RouterExtensions
  ) {}

  ngOnInit() {}

  onGoBack() {
    this.router.backToPreviousPage();
  }

  onToggleMenu() {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}
