import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Vote } from '../model/vote';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class VoteService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;
  public USERVOTE_API = `${this.baseUrl}/vote/voteuser`;

  public VoteWeekEnd (voteresult: Vote) {
        return this.http.post<User>(this.USERVOTE_API, voteresult);
  }

}
