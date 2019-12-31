import { Component, OnInit } from '@angular/core';
import { BlogStore } from 'src/app/store/blog-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private blogStore: BlogStore) { }

  ngOnInit() {
    console.log('working')
  }

}
