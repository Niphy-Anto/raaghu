import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

export interface notificationData {
  status: any;
  title: any;
  url?: any;
  urlTitle?: any;
  time: any;
  setAsRead: boolean;
  creationTime: any;
  userNotificationId;

}


@Component({
  selector: 'app-rds-notification',
  templateUrl: './rds-comp-notification.component.html',
  styleUrls: ['./rds-comp-notification.component.scss'],
})
export class RdsNotificationComponent implements OnInit {
  @Input() unreadCount: number = 0;

  constructor(public translate: TranslateService) { }

  dataset: any[] = [];
  item: any;

  ngOnInit(): void {
  }

  getIconColor(notification: any): string {
    if (notification.status == 'info') {
      return '';
    }
    if (notification.status == 'error') {
      return 'danger';
    }
    return notification.status;
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
      return 'check';
    }
    if (notification.status === 'warn') {
      return 'exclamation_circle';
    }
    if (notification.status === 'error') {
      return 'close_circle';
    }
    if (notification.status === 'info') {
      return 'information';
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
