import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, AfterViewInit {

  initProject = `
cd ~ && mkdir crudMongo && cd ./crudMongo
npm init -y
touch index.js
npm i express@4.16.3
  `;

  npmInstallMongo = `
npm i mongodb
  `;

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
