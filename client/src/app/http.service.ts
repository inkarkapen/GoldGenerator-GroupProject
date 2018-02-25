import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getStarted(cb){
    this._http.get('/create').subscribe((res)=>{
      //console.log('in service')
      cb(res)
    })
  }
  getGold(ninja, cb){
    this._http.post('/update', ninja).subscribe((res)=>{
      cb(res)
    })
  }
}
