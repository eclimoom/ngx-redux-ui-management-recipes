/**
 * Created by svet on 1/20/2017.
 */
import {Component, Input, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'alerts-list',
  templateUrl: 'alerts-list.template.html',

})
export class AlertsListComponent  {
  @Input() alerts:any;
  @Output() closeAlert = new EventEmitter();


  constructor() {
  }
}
