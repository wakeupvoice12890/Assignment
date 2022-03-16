import { Component, Input, OnInit } from "@angular/core";
import { ICardInfo } from "./interface/ep-card.interface";

@Component({
  selector: "ep-card",
  templateUrl: "./ep-card.component.html",
  styleUrls: ["./ep-card.component.scss"],
})
export class EpCardComponent implements OnInit {
  @Input() cardInfo: ICardInfo;
  constructor() {}

  ngOnInit(): void {}
}
