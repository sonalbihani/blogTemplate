import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postResult: Observable<any>;

  constructor(private postDataService: PostDataService) { 
    this.postResult = this.postDataService.getService();
    console.log(this.postResult);
  }
  ngOnInit(): void {
  }

}
