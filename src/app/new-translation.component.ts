import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { termNonEnglish, definitions, termEnglish } from './data-classes';

@Component({
  selector: 'app-new-translation',
  templateUrl: './new-translation.component.html',
  styleUrls: ['./new-translation.component.css']
})
export class NewTranslationComponent implements OnInit {

  newTerm: NewOtherTermForm;
  otherTerm: termNonEnglish;


  newTermResult: termNonEnglish;
  id: string;

  newDefinition: definitions;

  relatedTerm: termEnglish;


  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.newTerm = {
      languageCode: "",
      authorName: "",
      wordNonEnglish: "",
      fieldOfStudy: "",
      definition: "",
      linkAuthoritative: "",
      linkWikipedia: "",
      linkYoutube: ""
    };

    this.otherTerm = new termNonEnglish;
    this.newDefinition = new definitions;
    this.newTermResult = new termNonEnglish;
    this.relatedTerm = new termEnglish;
    this.id = this.route.snapshot.params['id'];
    this.m.getEnglishTermById(this.id).subscribe(u => this.relatedTerm = u);
  }

  onSubmit(): void{
    
    this.newDefinition.authorName = this.newTerm.authorName;
    this.newDefinition.definition = this.newTerm.definition;
    
    this.otherTerm.languageCode = this.newTerm.languageCode;
    this.otherTerm.termEnglishId = this.id;
    this.otherTerm.wordEnglish = this.relatedTerm.wordEnglish;
    this.otherTerm.wordNonEnglish = this.newTerm.wordNonEnglish;
    this.otherTerm.wordExpanded = "";
    this.otherTerm.image = "http://placekitten.com/200/300";
    this.otherTerm.imageType = "";
    this.otherTerm.audio= "";
    this.otherTerm.audioType = "";
    this.otherTerm.linkAuthoritative= this.newTerm.linkAuthoritative;
    this.otherTerm.linkWikipedia = this.newTerm.linkWikipedia;
    this.otherTerm.linkYouTube = this.newTerm.linkYoutube;
    this.otherTerm.authorName = this.newTerm.authorName; 
    this.otherTerm.fieldOfStudy= this.newTerm.fieldOfStudy;
    this.otherTerm.helpYes = 0;
    this.otherTerm.helpNo = 0;

    this.otherTerm.definitions.push(this.newDefinition)

    this.m.addNonEnglishTerm(this.otherTerm).subscribe(u => this.newTermResult = u);
    
    //this.id = this.newTermResult._id;
    
    this.router.navigate(['other/detail', this.newTermResult._id])
    //do stuff
    //console.log(`Author name and definition: ${this.newTerm.authorName}, ${this.newTerm.definition}`);
  }

}
//Data model for form 
class NewOtherTermForm {
  languageCode: string;
  authorName: string;
  wordNonEnglish: string;
  fieldOfStudy: string;
  definition: string;
  linkAuthoritative: string;
  linkWikipedia: string;
  linkYoutube: string;
}