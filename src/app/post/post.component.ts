import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { Observable } from "rxjs";
import {  ActivatedRoute, Router} from '@angular/router'
import { async } from 'rxjs/internal/scheduler/async';
import * as _ from 'lodash';
import { catchError, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postData;
  pid;
  constructor(private postDataService: PostDataService,private route: ActivatedRoute) { 
    this.route.params.subscribe((postId) =>{
      this.pid = postId.id;
    });
    this.postDataService.getPost(this.pid).subscribe(
      (data) =>{
        console.log(data);
        this.postData = data;
        console.log(this.postData);
      },
      (err) => {
        alert("Data Error");
      },
      () => {
      }
    )
  }

  ngOnInit(): void {
  }

}
