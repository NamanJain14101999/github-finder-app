import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//https://api.github.com/users/NamanJain14101999
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http:HttpClient) { }


  getUserDetails(usrName : string){
    return this.http.get(`https://api.github.com/users/${usrName}`);
  }

  getRepos(repoUrl:string){
    return this.http.get(repoUrl);

  }
}
