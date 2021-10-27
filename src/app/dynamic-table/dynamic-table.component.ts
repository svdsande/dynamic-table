import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CellTemplateMarkerDirective } from '../directive/cell-template-marker.directive';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() public displayedColumns: string[] = [];
  @Input() public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ContentChildren(CellTemplateMarkerDirective) cellTemplates!: QueryList<CellTemplateMarkerDirective>;

  constructor() { }

  ngOnInit(): void {
  }
}
