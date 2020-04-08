import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { termNonEnglish } from './data-classes';
import {definitions} from './data-classes';

@Component({
  selector: 'app-add-other-definition',
  templateUrl: './add-other-definition.component.html',
  styleUrls: ['./add-other-definition.component.css']
})
export class AddOtherDefinitionComponent implements OnInit {

  term: termNonEnglish;
  newDefinition: NewDefinitionForm;
  definition: definitions;
  id: string;


  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.newDefinition = {
      authorName: "",
      definition: ""
    };


    this.term = new termNonEnglish;
    this.newDefinition = new NewDefinitionForm;
    this.definition = new definitions;
  

    this.id = this.route.snapshot.params['id'];

    this.m.getNonEnglishTermById(this.id).subscribe(t => this.term = t);
  }

  onSubmit(): void{
    
    this.definition.authorName = this.newDefinition.authorName;
    this.definition.definition = this.newDefinition.definition;    

    this.m.addNonEnglishDefinition(this.term._id,this.definition).subscribe(u => this.term = u);
    //this.m.addEnglishTerm(this.json);
    this.router.navigate(['other/detail',this.term._id])
    //do stuff
  }

}
//Data model for form 
class NewDefinitionForm {
  authorName: string;
  definition: string;
}
