import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-season-range',
  templateUrl: './char-season-range.component.html',
  styleUrls: ['./char-season-range.component.css']
})
export class CharSeasonRangeComponent implements OnInit {
  seasonNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  from = 1;
  to = 2;

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submitted = true;
  }
}
