import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export class Claims {
  public claim_ato_e: any;
  public claim_f_to_o: any;
  public claim_p_to_z: any;
 
}
@Component({
  selector: 'app-rds-comp-claims',
  templateUrl: './rds-comp-claims.component.html',
  styleUrls: ['./rds-comp-claims.component.scss']
})
export class RdsCompClaimsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  AtoEcheckedAll:boolean=false;
  FtoOcheckedAll:boolean=false;
  PtoZcheckedAll:boolean=false;
  @Output()
  onClaimResourceSave = new EventEmitter<{ClaimResource:any}>()
 @Input() ClaimData:Claims={
   claim_ato_e: undefined,
   claim_f_to_o: undefined,
   claim_p_to_z: undefined
 }

SelectAllclaims(event:any){
  this.ClaimData.claim_ato_e.map(a=>a.checked=event);
  this.AtoEcheckedAll=event
  this.ClaimData.claim_f_to_o.map(a=>a.checked=event);
  this.FtoOcheckedAll=event
  this.ClaimData.claim_p_to_z.map(a=>a.checked=event);
  this.PtoZcheckedAll=event
}
SelectAllAtoEclaims(event:any){
  this.ClaimData.claim_ato_e.map(a=>a.checked=event);
}
SelectAllFtoOclaims(event:any){
  this.ClaimData.claim_f_to_o.map(a=>a.checked=event);
}
SelectAllPtoZclaims(event:any){
  this.ClaimData.claim_p_to_z.map(a=>a.checked=event);
}
SaveClaimData(){
  this.onClaimResourceSave.emit({ ClaimResource: this.ClaimData });

}

}
