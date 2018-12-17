import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/service/dataservice';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public resultVote: string;
  public data ;
  constructor(private dataService: DataService) {
    this.data = dataService.getOption();
    this.resultVote = "You did choose " + this.data.country + " to pass the week end of Noel!!!";
   }

  ngOnInit() {
  }

}
