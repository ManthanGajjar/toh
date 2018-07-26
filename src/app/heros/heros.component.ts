import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  dashboard = [ 
                { id:"1",name:"Manthan"},
                { id:"2",name:"Harshil"},
                { id:"3",name:"Jaydev"},
                { id:"4",name:"Divyesh"},
                { id:"5",name:"Arjun"},
                { id:"6",name:"Pratik"},
                { id:"7",name:"Manan"}
              ]
  constructor() { }

  ngOnInit() {
  }

}
