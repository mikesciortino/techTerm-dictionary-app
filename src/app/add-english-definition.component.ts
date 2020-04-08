import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { termEnglish } from './data-classes';
import {definitions} from './data-classes';

@Component({
  selector: 'app-add-english-definition',
  templateUrl: './add-english-definition.component.html',
  styleUrls: ['./add-english-definition.component.css']
})
export class AddEnglishDefinitionComponent implements OnInit {

  term: termEnglish;
  newDefinition: NewDefinitionForm;
  definition: definitions;
  id: string;


  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.newDefinition = {
      authorName: "",
      definition: ""
    };


    this.term = new termEnglish;
    this.newDefinition = new NewDefinitionForm;
    this.definition = new definitions;
  

    this.id = this.route.snapshot.params['id'];

    this.m.getEnglishTermById(this.id).subscribe(t => this.term = t);

  }

  onSubmit(): void{
    
    this.definition.authorName = this.newDefinition.authorName;
    this.definition.definition = this.newDefinition.definition;    

    this.m.addEnglishDefinition(this.term._id,this.definition).subscribe(u => this.term = u);
    //this.m.addEnglishTerm(this.json);
    this.router.navigate(['terms/detail',this.term._id])
    //do stuff
  }

}
//Data model for form 
class NewDefinitionForm {
  authorName: string;
  definition: string;
}
