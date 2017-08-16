import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpwh',
  templateUrl: './cpwh.component.html',
  styleUrls: ['./cpwh.component.css']
})
export class CpwhComponent implements OnInit {
  comIdList:any = [
    {id: 1, name: '公司A'},
    {id: 2, name: '公司B'},
    {id: 3, name: '公司C'},
    {id: 4, name: '公司D'},
    {id: 5, name: '公司E'},
    {id: 6, name: '公司F'},
  ];

  comId:string = '';//单选下拉框

  constructor() { }

  ngOnInit() {
    
  }
  // ===========================
  refresh() {
    console.log("a");
  }

  adSearch() {
    console.log("b");
  }

  clearOpts() {
    console.log("c");
  }

  cancel() {
    console.log("d");
  }
}
