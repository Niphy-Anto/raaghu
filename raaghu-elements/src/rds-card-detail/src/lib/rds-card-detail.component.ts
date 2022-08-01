import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export class CardData {
  cardID: string
  cardName: string
  cardExpiry: string
  cardNumber: number
  cardLogo: string
  isDefault:boolean
}
@Component({
  selector: 'rds-card-detail',
  templateUrl: './rds-card-detail.component.html',
  styleUrls: ['./rds-card-detail.component.scss']
})
export class RdsCardDetailComponent implements OnInit {

  @Input() cardData: CardData;
  @Output() onSetDefaultcard = new EventEmitter<any>();
  @Output() onEditCard = new EventEmitter<any>();
  
  itemList = [
    {
      "id": 1,
      "checked": true,
      "name": "Radio-Button"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public classes() {
    return 'avatar-sm'
  }
  onEditCardDetails(cardID: any) {
    this.onEditCard.emit(cardID);
  }
  setAsDefaultCard(cardID: any) {
    this.onSetDefaultcard.emit(cardID);
  }
}
