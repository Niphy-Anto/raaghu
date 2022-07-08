import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions, EntityDtoOfString } from '@libs/shared';

import { Store } from '@ngrx/store';
import { deletecache } from 'projects/libs/state-management/src/lib/state/maintenance/maintenance.actions';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.scss']
})
export class CacheComponent implements OnInit {
  public rdscacheMfeConfig: ComponentLoaderOptions;
  @Input() cashedata:any=[]
  constructor(private store: Store ) { }

  ngOnInit(): void {
    this.rdscacheMfeConfig = {
      name: 'RdsCompCache',
      input: {
        cashedata:this.cashedata,
        dataSource: this.cashedata
      },
      output: {
        onClearCache: (eventData: any) => {
          const data:any={
            id:eventData
          }
          this.store.dispatch(deletecache(data));
          const index = this.cashedata.findIndex((x: any) => x.name === eventData);
          if (index !== -1) {
            this.cashedata.splice(index, 1);
            const mfeConfig = this.rdscacheMfeConfig
            mfeConfig.input.tableData = [... this.cashedata];
            this.rdscacheMfeConfig = { ...mfeConfig };
          }
        }
      }
    };
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.rdscacheMfeConfig = {
      name: 'RdsCompCache',
      input: {
        cashedata:this.cashedata
      },
      output: {
        onClearCache: (eventData: any) => {
          const input = new EntityDtoOfString();
          input.id = eventData;
       this.store.dispatch(deletecache(input));
        }
      }
    };
  }
}
