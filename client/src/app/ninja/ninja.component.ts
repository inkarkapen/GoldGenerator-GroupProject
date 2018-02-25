import { Component, OnInit } from '@angular/core';
import { HttpSentEvent } from '@angular/common/http/src/response';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {
  ninja: object
  constructor(private _httpService: HttpService) {
    this.ninja ={_id: null, total: null, activity: []}
  }
  start(){
    //console.log('in components')
    this._httpService.getStarted((res)=>{
      this.ninja = res;
    })
  }
  process_money(min, max, form){
    var random = Math.floor(Math.random()*(max - min) + min)
    console.log('random: '+random+' form: ' + form)
    this._httpService.getGold({ninjaId: this.ninja['_id'], activity: this.ninja['activity'], building: form, lastGold: random}, (res)=>{
      this.ninja['total'] = res.total
      this.ninja['activity'] = res.activity
    })
  }
  ngOnInit() {
    //console.log('on init')
    this.start()
  }

}
