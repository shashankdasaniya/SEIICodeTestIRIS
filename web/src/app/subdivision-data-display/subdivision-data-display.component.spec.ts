import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SubdivisionDataDisplayComponent } from './subdivision-data-display.component';
import { SubdivisionDataService } from './subdivision-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ISubdivisionList } from '../models/subdivision';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SubdivisionDataDisplayComponent', () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;
  
  let subdivisionDataService: SubdivisionDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdivisionDataDisplayComponent ],
      imports: [HttpClientModule],
      providers: [
        { provide: SubdivisionDataService, useClass: MockSubdivisionDataService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
    component = fixture.componentInstance;
    subdivisionDataService = TestBed.inject(SubdivisionDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve subdivisions', fakeAsync(() => {
    component.getSubdivisions();
    tick();
    expect(component.subdivisions).toEqual(SUBDIVISION);
  }));
});

const SUBDIVISION = [{
  id: 26951,
  code: "001B3",
  name: "Alexander Park",
  longitude: "-115.07067",
  latitude: "36.233263",
  fieldSurveyTerritoryId: 3782,
  marketId: 16,
  subdivisionStatusId: 2,
  surveyMethodId: 2,
  activeSections: 0,
  futureSections: 1,
  builtOutSections: 2,
  totalLots: 237,
  fieldSurveyTerritoryName: "EldorBI",
  marketName: "Las Vegas",
  marketAbbreviation: "LV",
  subdivisionStatusCode: "Future",
  surveyMethodCode: "DRIVE",
  county: "Clark",
  community: "",
  zoom17Date: "2023-08-11T18:20:25.557Z",
  zoom18Date: "2023-08-11T18:20:25.557Z",
  subdivisionGeometryId: "",
  subdivisionGeometryBoundingBoxId: "",
  subdivisionGeometryBoundaryId: "",
  subdivisionGeometryIntelligenceBoundaryId: 24714,
  subdivisionGeometryIntelligenceBoundaryStatusId: 4,
  subdivisionGeometryIntelligenceBoundaryStatusCode: "Finalized",
  subdivisionGeometryIntelligenceBoundaryStatusChangeDate: "2022-07-14T04:41:38.403Z",
  nearMapImageDate: "2023-06-17T18:02:42.000Z",
  imageBoxId: 59809,
  mostRecentIPointBatchDate: "2023-07-07T00:00:00.000Z",
  iPoints: "",
  validatediPoints: "",
  subdivisionSpecificStatus: "Future"
}]


class MockSubdivisionDataService {
 
  getSubdivisions() : Observable<ISubdivisionList> {
    const subdivisions:ISubdivisionList = {
      subdivisions:SUBDIVISION
    }
    return of(subdivisions);
  }
}