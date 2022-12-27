import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';

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
  selector: 'basicresource',
  templateUrl: './basicresource.component.html',
  styleUrls: ['./basicresource.component.scss']
})
export class BasicresourceComponent implements OnInit {
  constructor() { }
  public rdsBasicResourceMfeConfig: ComponentLoaderOptions;
  @Output()
  onBsicResourceSave = new EventEmitter<{BasicResource:any}>()
  name:string;
  ngOnInit(): void {
   
    this.rdsBasicResourceMfeConfig = {
      name: 'RdsCompBasicResource',
      input: {
        ResourceData:this.ResourceData
      },
      output: {
        onBsicResourceSave: (BasicResource) => { this.onBsicResourceSave.emit({ BasicResource: BasicResource }); },
      }
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.rdsBasicResourceMfeConfig = {
      name: 'RdsCompBasicResource',
      input: {
        ResourceData:this.ResourceData
      },
      output: {
        onBsicResourceSave: (BasicResource) => { this.onBsicResourceSave.emit({ BasicResource: BasicResource }); },
      }
    };
  }
  @Input() ResourceData:Resource={
    Name: 'fff',
    Displayname: '',
    Description: '',
    enables: false,
    required: false,
    emphasize: false,
    showindiscovery: false
  }
  saveResource(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }else{
      this.onBsicResourceSave.emit({ BasicResource: this.ResourceData });
      this.ResourceData=new Resource();
      console.log(this.ResourceData,'data')
    }
    
  }

}
