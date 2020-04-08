import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { termNonEnglish, termEnglish } from './data-classes';

@Component({
  selector: 'app-term-other-detail',
  templateUrl: './term-other-detail.component.html',
  styleUrls: ['./term-other-detail.component.css']
})
export class TermOtherDetailComponent implements OnInit {

  otherTerm: termNonEnglish;
  englishTerms: termEnglish[];
  relatedTerm: termEnglish;

  id: idClass;
  relatedID: string;

  constructor(private m: DataManagerService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.otherTerm = new termNonEnglish;
    this.relatedTerm = new termEnglish;
    this.englishTerms = new Array<termEnglish>();
    this.id = new idClass;

    let id = this.route.snapshot.params['id'];

    this.m.getNonEnglishTermById(id).subscribe(t => this.otherTerm = t);
    this.relatedID = this.otherTerm.termEnglishId;
    this.m.getEnglishTermById(this.relatedID).subscribe(u => this.relatedTerm = u);
  }

  yes(){

    let id = this.route.snapshot.params['id'];
    this.id._id = id;
    this.m.helpYesNonEnglish(id, this.id).subscribe(u => this.otherTerm = u);
  }

  no() {
    let id = this.route.snapshot.params['id'];
    this.id._id = id;
    this.m.helpNoNonEnglish(id, this.id).subscribe(u => this.otherTerm = u);
  }

  like(id) {
    this.m.likeNonEnglishDefinition(id).subscribe(u => this.otherTerm = u);
  }

}
class idClass {
  _id: string;
}

