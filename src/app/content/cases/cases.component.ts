import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";

@Component({
  selector: "app-cases",
  templateUrl: "./cases.component.html",
  styleUrls: ["./cases.component.css"],
})
export class CasesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.showLatestCaseCount();
  }

  covidCases: any;
  stateWiseCases: any;
  summaryCases: any;
  p: number = 1;

  showLatestCaseCount() {
    this.dataService.getLatestCaseCount().subscribe((data) => {
      this.covidCases = data;
      this.summaryCases = this.covidCases.data.summary;
      this.stateWiseCases = this.covidCases.data.regional;
    });
  }
}
