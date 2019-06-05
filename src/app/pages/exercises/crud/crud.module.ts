import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrismComponentsModule} from '../../../shared/prism-components/prism-components.module';
import {MarkdownModule} from 'ngx-markdown';
import {RunkitModule} from '../../../shared/runkit/runkit.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material';
import {CrudComponent} from './crud.component';
import {ExercisesComponent} from './exercises/exercises.component';

@NgModule({
  declarations: [
    ExercisesComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    PrismComponentsModule,
    MarkdownModule.forChild(),
    RunkitModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  exports: [
    CrudComponent
  ]
})
export class CrudModule { }
