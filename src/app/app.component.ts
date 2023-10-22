import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatereference';

  returnmessage:string='';
  enteredelement:string='';

  disp:string='';

  welcomemessage:string="Hello Sunil";

  Welcome(inputElement:HTMLInputElement){

    // alert('Hi Sunil'+inputElement.value);
    console.log(inputElement);
    console.log(inputElement.value);
    this.disp=inputElement.value;
   // inputElement.serachelement;

  }

  // display(event:Event){

  //   this.returnmessage= (event.target as HTMLInputElement).value;

  // }
}
