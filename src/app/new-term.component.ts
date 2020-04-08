import { Component, OnInit } from '@angular/core';
import {termEnglish} from  "./data-classes";
import {definitions} from "./data-classes";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManagerService } from "./data-manager.service";

@Component({
  selector: 'app-new-term',
  templateUrl: './new-term.component.html',
  styleUrls: ['./new-term.component.css']
})
export class NewTermComponent implements OnInit {

  newTerm: NewTermForm;

  fullEnglishTerm: termEnglish;
  newTermResult: termEnglish;
  id: string;
  json: string;

  newDefinition: definitions;

  constructor(private router: Router, private m: DataManagerService) {}

  ngOnInit(): void {
    this.newTerm = {
      authorName: "",
      wordEnglish: "",
      wordExpanded: "",
      fieldOfStudy: "",
      definition: "",
      linkAuthoritative: "",
      linkWikipedia: "",
      linkYoutube: ""
    };

    this.fullEnglishTerm = new termEnglish;
    this.newDefinition = new definitions;
    this.newTermResult = new termEnglish;
    
  }

  onSubmit(): void{
    
    this.newDefinition.authorName = this.newTerm.authorName;
    this.newDefinition.definition = this.newTerm.definition;

    this.fullEnglishTerm.wordEnglish = this.newTerm.wordEnglish;
    this.fullEnglishTerm.wordNonEnglish = "";
    this.fullEnglishTerm.wordExpanded = this.newTerm.wordExpanded;
    this.fullEnglishTerm.languageCode = "en";
    this.fullEnglishTerm.image = "http://placekitten.com/200/300";
    this.fullEnglishTerm.imageType = "";
    this.fullEnglishTerm.audio= "";
    this.fullEnglishTerm.audioType = "";
    this.fullEnglishTerm.linkAuthoritative= this.newTerm.linkAuthoritative;
    this.fullEnglishTerm.linkWikipedia = this.newTerm.linkWikipedia;
    this.fullEnglishTerm.linkYouTube = this.newTerm.linkYoutube;
    this.fullEnglishTerm.authorName = this.newTerm.authorName; 
    this.fullEnglishTerm.fieldOfStudy= this.newTerm.fieldOfStudy;
    this.fullEnglishTerm.helpYes = 0;
    this.fullEnglishTerm.helpNo = 0;

  
    this.fullEnglishTerm.definitions.push(this.newDefinition)

    this.m.addEnglishTerm(this.fullEnglishTerm).subscribe(u => this.newTermResult = u);
    this.id = this.newTermResult._id;
    
    this.router.navigate(['terms'])
    //do stuff
    console.log(`Author name and definition: ${this.newTerm.authorName}, ${this.newTerm.definition}`);
  }

}

//Data model for form 
class NewTermForm {
    authorName: string;
    wordEnglish: string;
    wordExpanded: string;
    fieldOfStudy: string;
    definition: string;
    linkAuthoritative: string;
    linkWikipedia: string;
    linkYoutube: string;
}

