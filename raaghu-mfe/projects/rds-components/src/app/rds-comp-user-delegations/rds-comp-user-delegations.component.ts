import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'app-rds-user-delegations',
  templateUrl: './rds-comp-user-delegations.component.html',
  styleUrls: ['./rds-comp-user-delegations.component.scss']
})
export class RdsUserDelegationsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() userList: any = [];
  selectedUser: any;
  deligateDivFlag: boolean = false;
  @Input() rdsDeligateTableHeader: TableHeader[] = [];
  @Input() rdsDeligateTableData: any = [];
  @Input() recordsPerpage: number = 10;
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }]
  @Input() pagination: boolean = false;
  @Input() tableWidth: string = '100%';
  @Input() tableStyle: string = 'Light';
  @Input() UserName: string;

  username:string='';
  StartDate:string='';
  endDate:string='';
  @Output() onDeligateSave = new EventEmitter<any>()
  @Output() onCancelDeligate = new EventEmitter<any>()
  @Output() onDeleteDeligate = new EventEmitter<any>()
  constructor(public translate:TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  deleteDeligateData(event: any): void {
    if(event.actionId==='delete'){
      this.onDeleteDeligate.emit(event.selectedData);
    }
  }

  hideandShowdelegateform() {
    this.deligateDivFlag = !this.deligateDivFlag
  }

  addUser(): void {
    const DeligateData:any={
      endTime:this.endDate,
      startTime:this.StartDate,
      targetUserId:this.username
    }
    this.onDeligateSave.emit(DeligateData);
  }
  onUserSelection(event: any): void {
    this.selectedUser = event.item
  }
  onSave(userDelegation:NgForm): void {
    userDelegation.form.markAllAsTouched();
    const DeligateData:any={
      endTime:this.endDate,
      startTime:this.StartDate,
      targetUserId:this.username
    }
    this.onDeligateSave.emit(DeligateData);
  }
  onCancel(): void {
    this.onCancelDeligate.emit(true);
  }
  ngOnDestroy(): void {
  }

}
