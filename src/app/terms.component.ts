import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
//import { Observable } from "rxjs";
import { termEnglish, termNonEnglish } from "./data-classes";

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private m: DataManagerService) { }

  // Properties for the class
  terms: termEnglish[];
  search: string;

  ngOnInit() {

    // Just take ten (10) of them 

    // Fetch posts...
    this.m.getEnglishTerms().subscribe(response => this.terms = response);


  }

  doSearch(){
    if (this.search == ""){
      this.ngOnInit();
    }else if (this.search.length > 2){
      this.m.getEnglishTermByWord(this.search).subscribe(response => this.terms = response);
    }
  }

}
