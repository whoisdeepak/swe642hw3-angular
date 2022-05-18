// This typescript file has the functionality to fetch the submitted form details
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) { }
  // This ngOnInit loads directly when the page laods
  ngOnInit() {
    // This calls the API that retrivces the sql data
    this.http.get('http://localhost:8080/list').subscribe((result) => this.users = result);
  }

}
