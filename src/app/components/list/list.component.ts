import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: {title: string, content: string}[];
  

  constructor() { }

  ngOnInit(): void {
  }

}
