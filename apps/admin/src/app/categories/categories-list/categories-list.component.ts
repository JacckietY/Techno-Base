import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-team-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {

  categories = [
    {
      id: 1,
      name: 'cat1',
      icon: 'icon1',
    },
    {
      id: 2,
      name: 'cat1',
      icon: 'icon1',
    },
    {
      id: 3,
      name: 'cat1',
      icon: 'icon1',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
