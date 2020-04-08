import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { termEnglish, termNonEnglish } from "./data-classes";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-term-detail',
  templateUrl: './term-detail.component.html',
  styleUrls: ['./term-detail.component.css']
})

export class TermDetailComponent implements OnInit {

  terms: termEnglish[];
  term: termEnglish;

  termsNonEnglish: termNonEnglish[];
  termNonEnglish: termNonEnglish;

  translations: termNonEnglish[];

  helpyes: number;
  helpno: number;

  id: idClass;

  idString: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {

    //this.terms = new Array<termEnglish>();
    this.term = new termEnglish;
    this.termsNonEnglish = new Array<termNonEnglish>();
    this.termNonEnglish = new termNonEnglish;
    this.translations = new Array<termNonEnglish>();
    this.helpyes = 0;
    this.helpno = 0;

    this.id = new idClass;
  
    let id = this.route.snapshot.params['id'];

    this.m.getEnglishTermById(id).subscribe(t => this.term = t);

    this.m.getNonEnglishTerms().subscribe(t => this.termsNonEnglish = t);


    for(let i = 0; i < this.termsNonEnglish.length; i++) {
      if(this.termsNonEnglish[i].termEnglishId == this.term._id){
        console.log(this.termsNonEnglish[i].termEnglishId);
        this.translations.push(this.termsNonEnglish[i]); 
      }
    }

  }

  yes(){

      let id = this.route.snapshot.params['id'];
      this.id._id = id;
      this.m.helpYesEnglish(id, this.id).subscribe(u => this.term = u);
  }

  no() {
      let id = this.route.snapshot.params['id'];
      this.id._id = id;
      this.m.helpNoEnglish(id, this.id).subscribe(u => this.term = u);
  }

  like(id) {
    this.m.likeEnglishDefinition(id).subscribe(u => this.term = u);
  }

}
class idClass {
  _id: string;
}
