import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface notificationData {
  status: any;
  title: any;
  url?: any;
  urlTitle?: any;
  time: any;
  setAsRead: boolean;
  creationTime:any;
  userNotificationId;
}


@Component({
  selector: 'app-rds-notification',
  templateUrl: './rds-comp-notification.component.html',
  styleUrls: ['./rds-comp-notification.component.scss'],
})
export class RdsNotificationComponent implements OnInit {
  @Input() unreadCount: number = 0;
  
  constructor(public translate:TranslateService) {}

  dataset: any[] = [];

  ngOnInit(): void {
  }


  elementUrls: string[];
  @Input()
  backgroundColor?: string;
  @Input()
  borderRadious?: number;
  @Input()
  Paddig?: number;
  @Input()
  width?: number;
  @Output() setAllReadOutput = new EventEmitter<boolean>(); 
  @Output() setAsReadOutput = new EventEmitter<any>();

  getIcon(notification: notificationData): string {
    if (notification.status === 'success') {
      return 'successful';
    }
    if (notification.status === 'warn') {
      return 'warning';
    }
    if (notification.status === 'error') {
      return 'destructive';
    }
    if (notification.status === 'info') {
      return 'informational';
    }
    return '';
  }

  getError(notification: notificationData): string {
    if (notification.status === 'error') {
      return 'error';
    }
    return '';
  }

  getNotifyLabel(): string { 
    return `${this.unreadCount}  New`;
  }

  setAsRead(notification: notificationData): void {
    if (notification.setAsRead) {
      return;
    }
    notification.setAsRead = true;
    this.setAsReadOutput.emit(notification.userNotificationId);
  }

  setAllRead() {
    if (!this.notification || this.notification.length === 0) {
      return;
    }
    this.notification.forEach((item) => {
      this.setAsRead(item);
    });
    this.setAllReadOutput.emit();
  }

  @Input()
  notification: notificationData[];
}
