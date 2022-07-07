import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  longStr: string = "Je suis une très très longue phrase"
  shortStr: string = "Je suis"

  constructor() { }

  ngOnInit(): void {
  }

}
