import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { api } from "src/app/core/api";

export interface ITable {
  name: "string";
  price: "string";
  category: "string";
}
@Injectable({
  providedIn: "root",
})
export class TableService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns Observable<ITable[]>
   */
  loadTableData(): Observable<ITable[]> {
    return this.http.get<ITable[]>(api.loadTable).pipe(pluck("cookies"));
  }
}
