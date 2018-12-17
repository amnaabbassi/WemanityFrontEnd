import { Component, OnInit } from "@angular/core";
import { UserService } from "src/shared/service/user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { User } from "src/shared/model/user";
import { Router } from '@angular/router';
import { DataService } from 'src/shared/service/dataservice';


@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  isLoginError: boolean = false;
  user: User = new User();

  constructor(private userService: UserService, private router: Router, private dataService: DataService) { }

  ngOnInit() {}

  OnSubmit() {
    this.userService.login(this.user).subscribe(
      data => {
        // this.dataService.setOption('token', data.token);
        this.dataService.setOption('username', data.name);
        this.dataService.setOption('Id', data.id);
        localStorage.setItem("token", data.token);
        this.router.navigate(["vote"]);
      },
      (err: HttpErrorResponse) => {
        console.error(err);
        if (err.status === 401) {
          this.router.navigate(['auth']);
          console.error('Logged in user no longer authenticated on server.', 'Unable to connect to server');
        } else if (err.status === 404) {
          console.log("it is 404");
          console.error('Unable to connect to server. Missing or wrong URL, please try again', 'Unable to connect to server');
        } else if (err.status === 0) {
          console.error('Server appears to be temporary unavailable', 'Unable to connect to server');
        } else if (err.status === 500) {
          console.error('Server appears to be temporary unavailable', 'Unable to connect to server');
        }
      }
    );
  }
}
