import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getLatestCaseCount() {
    return this.http.get("https://api.rootnet.in/covid19-in/stats/latest");
  }

  getLatestNotifications() {
    return this.http.get("https://api.rootnet.in/covid19-in/notifications");
  }

  getHelplineNumber() {
    return this.http.get("https://api.rootnet.in/covid19-in/contacts");
  }
}
