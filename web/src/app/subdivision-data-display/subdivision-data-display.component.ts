import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SubdivisionDataService } from './subdivision-data.service';
import { Observable } from 'rxjs';
import { ISubdivision, ISubdivisionList } from '../models/subdivision';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {
  filterValue:string='';

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<ISubdivision>;
  subdivisions!: ISubdivision[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private subdivisionDataService: SubdivisionDataService) {
  }

  ngOnInit() {    
    this.getSubdivisions()
  }

  getSubdivisions(){
    this.subdivisionDataService.getSubdivisions().subscribe(data=>{ 
      this.subdivisions = data.subdivisions;
      //Here I am filtering data tp avoid displaying id columns
      this.displayedColumns =  Object.keys(this.subdivisions[0]).filter(name=> name.toLowerCase().indexOf('id') == -1).slice(0,12);    
      this.dataSource = new MatTableDataSource(this.subdivisions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data, filter) => (data.subdivisionStatusCode.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1);
    });
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue?.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
