import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'credo-bank-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarItemComponent implements OnInit {
  _position = 'start';
  @Input() set position(p: string) {
    this._position = 'start';
  }
  constructor() {}

  ngOnInit(): void {}
}
