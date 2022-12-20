import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
export class Resource {
  public Name: string;
  public Displayname: string;
  public Description: string;
  public enables:boolean  = false
  public required:boolean = false
  public emphasize:boolean = false
  public showindiscovery:boolean
}
@Component({
  selector: 'rds-comp-basic-resource',
  templateUrl: './rds-comp-basic-resource.component.html',
  styleUrls: ['./rds-comp-basic-resource.component.scss']
})
export class RdsCompBasicResourceComponent implements OnInit {
  scopeBasics: any = {};
  constructor(public translate: TranslateService) { }
  public enables: boolean = false;
  public required: boolean = false;
  public emphasize: boolean = false;
  public showindiscovery: boolean = false;
  public Name: string = 'text';
  public Description : string = '';
  public Displayname : string = '';
  @Output()
  onBsicResourceSave = new EventEmitter<{ BasicResource: any }>()
  @ViewChild('resourceForm') resourceForm: NgForm;
  name: string;
  @Input() ResourceData: any
  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (!this.ResourceData) {
      this.ResourceData = {}
      this.ResourceData['Name'] = 'text';
      this.ResourceData['Description']='';
      this.ResourceData['Displayname'] = '';
      this.ResourceData['enables'] = false;
      this.ResourceData['required'] = false;
      this.ResourceData['emphasize'] = false;
      this.ResourceData['showindiscovery'] = false;
    }
  }
  saveResource(resourceForm: NgForm) {
    console.log('hello');
    
    this.onBsicResourceSave.emit(this.ResourceData);
    console.log(this.ResourceData, 'this.ResourceData');
  }

  getCheckboxValue(event: boolean, value: string) {
    switch (value) {
      case 'enables':
        this.ResourceData.enables = event;
        console.log('enable', event);
        break

      case 'required':
        this.ResourceData.required = event;
        console.log('required', event);
        break;

      case 'emphasize':
        this.ResourceData.emphasize = event;
        break;
      case 'showindiscovery':
        this.ResourceData.showindiscovery = event;
        break;
    }

  }

}
