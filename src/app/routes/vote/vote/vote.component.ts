import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../shared/service/country.service';
import { Country } from 'src/shared/model/country';
import { VoteService } from 'src/shared/service/vote.service';
import { Vote } from 'src/shared/model/vote';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from 'src/shared/service/dataservice';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  public data;
  username: string;
  lastname: string;
  iduser: number;
  result: string;
  CountyChoice: Country[];
  vote: Vote = new Vote();
  SelectedCountry: string;
  constructor(private countryservice: CountryService, private uservote: VoteService,
    private router: Router, private dataService: DataService) {
      this.data = this.dataService.getOption();
    this.username = this.data.username;
  }

  ngOnInit() {
    this.CountyChoice = this.countryservice.myCountry();
  }

  OnVote() {
    this.vote.country = this.SelectedCountry;
    this.vote.IdUser = this.data.Id;
    console.log( this.vote.IdUser);

    this.uservote.VoteWeekEnd(this.vote).subscribe(
      resultvote => {
        if (resultvote) {
          this.dataService.setOption('country', this.SelectedCountry);
         this.router.navigate(["result"]);
        }
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }
}


