import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {
  skillSet : Array<string> = [	
    'Assamese','Bengali','Bodo','Dogri', 'Englis', ' Gujarati', 'Hindi', 'Kannada', 'Kashmiri', 'Konkani',' Maithili', 'Malayalam', ' Marathi', 'Meitei']
  constructor() { }

  ngOnInit(): void {
  }

}
