import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";

@Component({
  selector: "app-helplines",
  templateUrl: "./helplines.component.html",
  styleUrls: ["./helplines.component.css"],
})
export class HelplinesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getHelplines();
  }

  allhelplines: any;
  regionalHelplines: any;

  getHelplines() {
    this.dataService.getHelplineNumber().subscribe((data) => {
      this.allhelplines = data;
      this.regionalHelplines = this.allhelplines.data.contacts.regional;
    });
  }
}
