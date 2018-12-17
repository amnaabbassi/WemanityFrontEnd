import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./routes/authentication/authentication/authentication.component";
import { VoteComponent } from "./routes/vote/vote/vote.component";
import { AuthGuard } from "./auth.guard";
import { HttpClient } from "@angular/common/http";
import { ResultComponent } from './routes/result/result/result.component';

const routes: Routes = [
  { path: "login", component: AuthenticationComponent },
  { path: "vote", component: VoteComponent, canActivate: [AuthGuard] },
  { path: "result", component: ResultComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "vote" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
