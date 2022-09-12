import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-notification-settings',
  templateUrl: './rds-comp-notification-settings.component.html',
  styleUrls: ['./rds-comp-notification-settings.component.scss']
})
export class RdsCompNotificationSettingsComponent implements OnInit, OnChanges {
  @Input() receiveNotifications: any = false;
  @Input() notificationTypes: any = [];
  @Output() onUpdateNotificationSettings = new EventEmitter<any>();
  constructor(public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  updateSettings(): void {
    
    const data: any = {
      receiveNotifications: this.receiveNotifications,
      notifications: []
    };
    this.notificationTypes.forEach((notification: any) => {
      const _notification: any = {
        name: notification.name,
        isSubscribed: notification.isSubscribed
      };
      data.notifications.push(_notification);
    });
    this.onUpdateNotificationSettings.emit(data);
  };

  onNotificationTypeChange(value: any, notification: any): void {
    notification.isSubscribed = value;
  };

  onReceiveNotificationsChange(value: any): void {
    this.receiveNotifications = value;
  }

}
