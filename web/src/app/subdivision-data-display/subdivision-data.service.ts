import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ISubdivisionList } from '../models/subdivision';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SubdivisionDataService {

  constructor( private http:HttpClient) { }

  getSubdivisions(){

    return this.http.get<ISubdivisionList>('http://localhost:3000/v1/subdivisions');
  }
}
