import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {PieData} from './pie-data';
@Injectable({
  providedIn: 'root'
})
export class PieDataService {
private demoData: PieData[]=[
  {label:'data1',
    value: 1
  },
  {label:'data2',
    value: 2
  },
  {label:'data3',
    value: 3
  },
  {label:'data4',
    value: 4
  },
  {label:'data4',
    value: 5
  },
];
private dataSubject = new BehaviorSubject<PieData[]>(this.demoData);
$data = this.dataSubject.asObservable();
AddData(newData:PieData){// function for adding to the current array
  this.demoData.push(newData);
  this.dataSubject.next(this.demoData);
}
  constructor() { }
}
