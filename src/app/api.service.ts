import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow ');  
  }
  
  public getQuestionDetail(questionId: any){
    return this.httpClient.get('https://api.stackexchange.com/2.2/questions/'+questionId+'?order=desc&sort=activity&site=stackoverflow'); 
  }
}
