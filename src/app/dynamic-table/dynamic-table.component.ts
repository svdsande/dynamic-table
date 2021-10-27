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

  @Input() public displayedColumns: string[] = [];
  @Input() public data: RockBand[] = [];
  @ContentChildren(CellTemplateMarkerDirective) cellTemplates!: QueryList<CellTemplateMarkerDirective>;
  @ViewChild(MatSort) sort!: MatSort;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
