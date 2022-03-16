import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { cardInfo } from "../core/dummy";
import { ICardInfo } from "../ep-card/interface/ep-card.interface";
import { ITable, TableService } from "../services/table/table.service";

@Component({
  selector: "app-base",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.scss"],
})
export class BaseComponent implements OnInit {
  public title = "epsilonAssignment";
  public selection = "table";
  public cardInfo: ICardInfo = cardInfo;
  public tableData: ITable[] = [];
  sortByStatus: { col: string; sortBy: string } = {
    col: "price",
    sortBy: "asc",
  };
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.tableData = this.activatedRoute.snapshot.data["table"].sort(
      this.compareByAsc("price")
    );
  }

  compareByAsc(key: string) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  compareByDesc(key) {
    return function (a, b) {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    };
  }

  sortBy(whichHeader: string) {
    const arrInStr = JSON.stringify(this.tableData);
    this.tableData.sort(this.compareByAsc(whichHeader));
    const arrInStr1 = JSON.stringify(this.tableData);
    this.sortByStatus = { col: whichHeader, sortBy: "asc" };
    if (arrInStr === arrInStr1) {
      this.tableData.sort(this.compareByDesc(whichHeader));
      this.sortByStatus = { col: whichHeader, sortBy: "desc" };
    }
  }
}
