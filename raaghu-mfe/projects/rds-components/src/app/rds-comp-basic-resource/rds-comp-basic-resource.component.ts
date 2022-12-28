import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-basic-resource',

  templateUrl: './rds-comp-basic-resource.component.html',

  styleUrls: ['./rds-comp-basic-resource.component.scss'],
})
export class RdsCompBasicResourceComponent implements OnInit {
  // scopeBasics: any = {};

  constructor(public translate: TranslateService) {}

  @Output()
  onBsicResourceSave = new EventEmitter<any>();

  @ViewChild('resourceForm') resourceForm: NgForm;

  @Input() ResourceData: any = [];

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.ResourceData) {
      this.ResourceData = {};
      this.ResourceData['name'] = '';
      this.ResourceData['description'] = '';
      this.ResourceData['displayName'] = '';
      this.ResourceData['enables'] = false;
      this.ResourceData['required'] = false;
      this.ResourceData['emphasize'] = false;
      this.ResourceData['showInDiscoveryDocument'] = false;
    }
  }

  saveResource(resourceForm: NgForm) {

    resourceForm.form.markAllAsTouched();
    if (!resourceForm || resourceForm.invalid) {
      return;
    }
    this.onBsicResourceSave.emit({ scopeResource: this.ResourceData, next: true });
    console.log(this.ResourceData, 'this.ResourceData');
  }

  getCheckboxValue(event: boolean, value: string) {
    switch (value) {
      case 'enables':
        this.ResourceData.enables = event;
        break;

      case 'required':
        this.ResourceData.required = event;
        break;

      case 'emphasize':
        this.ResourceData.emphasize = event;
        break;

      case 'showindiscovery':
        this.ResourceData.showInDiscoveryDocument = event;
        break;
    }
  }
}
