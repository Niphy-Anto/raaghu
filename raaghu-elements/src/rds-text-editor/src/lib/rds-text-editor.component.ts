import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-text-editor',
  templateUrl: './rds-text-editor.component.html',
  styleUrls: ['./rds-text-editor.component.scss'],

})
export class RdsTextEditorComponent implements OnInit {

  @Input() id!: string;
  @Input() editorData!: string;

  constructor() { }
  
  ngOnInit(): void {
  }
}
