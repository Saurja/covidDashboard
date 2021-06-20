import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";
@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"],
})
export class NotificationsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getNotifications();
  }

  allnotifications: any;
  notifications: any;
  p: number = 1;

  getNotifications() {
    this.dataService.getLatestNotifications().subscribe((data) => {
      this.allnotifications = data;
      this.notifications = this.allnotifications.data.notifications;
    });
  }
}
