import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-avatar',
  templateUrl: './rds-avatar.component.html',
  styleUrls: ['./rds-avatar.component.scss']
})
export class RdsAvatarComponent implements OnInit, OnChanges {

  title = 'rds-avatar';
  fName = '';
  lName = '';
  @Input() userRole!: string;
  @Input() WithUserRole!: boolean;
  @Input() Title!:string;
  @Input()
  colorVariant?: string='light';

  @Input() WithProfilePic!: boolean;
  @Input() profilePic: string="https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1";
  @Input() FirstName: string = '';
  @Input() LastName: string = '';
  @Input()
  Size: 'small' | 'large' | 'medium' | 'larger' = 'medium';
  @Input() VerticalTitleWithProfilePic!:boolean;
  
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    // this.profilePic = this.profilePic ? this.profilePic: 'assets/default_avatar.png';
    this.fName = this.FirstName.charAt(0).toUpperCase();
    this.lName = this.LastName.charAt(0).toUpperCase();
  }

  public get classes(): string[] {
    let classes: string[] = [];
    const bgColor = 'bg-' + `${this.colorVariant}`;
    classes.push(bgColor);
    const size = 'avatar-'+`${this.Size === 'small' ? 'sm' : this.Size === 'large' ? 'lg' : this.Size === 'larger' ? 'larger' : 'md'}`;
    classes.push(size);
    if (`${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info' && `${this.colorVariant}` !== 'white') {
      classes.push('text-white');
    }

    return classes;
  }

  }
