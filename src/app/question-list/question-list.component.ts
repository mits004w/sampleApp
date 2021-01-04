import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  
  questionList: any;
  searchedKeyword: any;
  p: any;



  constructor(private apiService: ApiService) {
   }

  ngOnInit(): void {
    this.apiService.get().subscribe((data: any)=>{  
      console.log(data);
      this.questionList = data.items;  
		})  
  }


}
