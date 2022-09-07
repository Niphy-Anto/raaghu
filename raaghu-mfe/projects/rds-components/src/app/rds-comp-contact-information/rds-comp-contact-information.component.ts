import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-contact-information',
  templateUrl: './rds-comp-contact-information.component.html',
  styleUrls: ['./rds-comp-contact-information.component.scss']
})
export class RdsCompContactInformationComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  EmailID:string;
  Contact:number;
  @Input() buttonSpinner : boolean =true;
 
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit(): void {
  }
  continue(){


  }
}
