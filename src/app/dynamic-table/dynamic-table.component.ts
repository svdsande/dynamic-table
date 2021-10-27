import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RockBand } from '../app.component';
import { CellTemplateMarkerDirective } from '../directive/cell-template-marker.directive';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, AfterViewInit {

  @Input() displayedColumns: string[] = [];
  @Input() data: RockBand[] = [];
  @Input() doneLoadingData: boolean | undefined;
  @Input() sortingDataAccessorFunction!: (data: any, sortHeaderId: string) => string | number;

  @ContentChildren(CellTemplateMarkerDirective) cellTemplates!: QueryList<CellTemplateMarkerDirective>;
  @ViewChild(MatSort) sort!: MatSort;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.sortingDataAccessorFunction);
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.setCustomDataSortingIfProvided();
  }

  private setCustomDataSortingIfProvided(): void {
    if (typeof(this.sortingDataAccessorFunction) === typeof(Function)) {
      this.dataSource.sortingDataAccessor = this.sortingDataAccessorFunction
    }
  }
}
