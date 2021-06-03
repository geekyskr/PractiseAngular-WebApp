import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PractiseAngular-WebApp';
  topic = "Angular Interpolation";
  whatsThis = () => {
      return this.topic
  };
  object = {
      name: "Sunil",
      age: 22
  }
  arr = [1, 2, 3];
  siteUrl = window.location.href;
  name = "Sunil Kumar Sharma";
  getName (name: string) {
      alert(name);
  }
  myEvent = (evt: string) => {
      console.warn(evt);
  }
  currVal = "";
  getValue(val: string){
      console.log(val);
      this.currVal =  val;
  }
  getVal(event: any) {
      console.log(event.target.value);
      this.currVal = event.target.value;
  }
  Hulkname = "bruce";
  show = "sunil";
  getValues(val){
      console.log(val);
  }
  batmanName = "bruce"
  parentFunction(data){
      console.log(data);
  }
}
