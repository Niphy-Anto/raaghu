import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { RdsTextEditorComponent } from './rds-text-editor.component';

@NgModule({
  declarations: [
    RdsTextEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule.forRoot(),
  ],
  exports: [
    RdsTextEditorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RdsTextEditorModule { }
