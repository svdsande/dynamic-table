import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export class RockBand {
  public name: string | undefined;
  public leadSinger: string | undefined;
  public country: string | undefined;
  public year: number | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'leadSinger', 'country', 'year'];
  public dataSource: MatTableDataSource<RockBand> = new MatTableDataSource<RockBand>();

  ngOnInit(): void {
    this.dataSource.data = this.getRockBands();
  }

  private getRockBands(): RockBand[] {
    return [
      {
        name: 'Foo Fighters',
        leadSinger: 'Dave Grohl',
        country: 'USA',
        year: 1995
      },
      {
        name: 'Green Day',
        leadSinger: 'Billie Joe Armstrong',
        country: 'USA',
        year: 1989
      }
    ]
  }
}
