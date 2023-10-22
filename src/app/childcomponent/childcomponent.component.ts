import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {

  @Input() childelement='';
 
  selectedCustomer:Customer | undefined;

  customers:Customer[]=[
    {customerno:1,name:'sunil',address:'Vizag',city:'Hyderabad',country:'India'},
    {customerno:2,name:'Prashant',address:'Vizag',city:'Hyderabad',country:'India'},
    {customerno:3,name:'Harsha',address:'Vizag',city:'Hyderabad',country:'India'},
    {customerno:1,name:'Kiran',address:'Vizag',city:'Hyderabad',country:'India'}

  ]

}


