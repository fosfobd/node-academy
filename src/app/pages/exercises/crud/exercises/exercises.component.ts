import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, AfterViewInit {

//   initProject = `
// cd ~ && mkdir staticWs && cd ./staticWs
// npm init -y
// mkdir html
// echo "Hello World" >> html/index.html
// touch index.js
// npm i express@4.16.3
//   `;

//   runServer = `
// node index.js
//   `;

//   usingLoggerPre = '';

  constructor() {
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
  }

}
