import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'swe642';
  count = 0;
  obj : any
  selectedItemsList = [{}];
  checkedIDs = [];
  selectedItemsString = "";

  checkboxesDataList = [
    {
      label: 'Students',
      isChecked: false
    },
    {
      label: 'Location',
      isChecked: false
    },
    {
      label: 'Campus',
      isChecked: false
    },
    {
      label: 'Atmosphere',
      isChecked: false
    },
    {
      label: 'Dorm Rooms',
      isChecked: false
    },
    {
      label: 'Sports',
      isChecked: false
    }
  ];

  ngOnInit(): void {}

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  constructor(private http: HttpClient, public router: Router) { }

  onClickingSubmit(data: any) {
    
    this.fetchSelectedItems()

    for (let i of this.selectedItemsList) {
      this.obj = this.selectedItemsList[this.count]
      this.selectedItemsString += this.obj.label + ", "
      this.count++;
    }
    data.liked = this.selectedItemsString.slice(0,-2)
    console.warn(data)

    this.http.post('http://localhost:8080/submit', data).subscribe((result) => { console.warn("result", result) });
    location.reload();
  }

}
