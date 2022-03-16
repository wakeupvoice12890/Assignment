import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ITable, TableService } from "./services/table/table.service";

@Injectable({
  providedIn: "root",
})
export class AppResolver implements Resolve<ITable[]> {
  constructor(private tableService: TableService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ITable[] | Observable<ITable[]> {
    return this.tableService.loadTableData();
  }
}
