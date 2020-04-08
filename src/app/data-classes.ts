//Data model classes for the app

//Describe a definition
export class definitions {
    _id? : string;
    authorName: string = 'Michael';
    dateCreated: string; //use the JavaScript Date object’s toISOstring()
    definition: string = "test";
    quality: Number = 0;
    likes: Number = 0;

    constructor() {
        let date: Date = new Date();
        this.dateCreated = date.toISOString();
    }
}

//Describe an english term
export class termEnglish {
    _id? : string;
    wordEnglish: string = "Default";
    wordNonEnglish: string = "def";
    wordExpanded: string = "default";
    languageCode: string = "";
    image: string = "http://placekitten.com/200/300";
    imageType: string = "image/png";
    audio: string = "example audio";
    audioType: string = "audio/mp4";
    linkAuthoritative: string = "www.";
    linkWikipedia: string = "www.";
    linkYouTube: string = "www.";
    authorName: string = "Default";
    dateCreated: string; //use the JavaScript Date object’s toISOstring()
    dateRevised: string; //use the JavaScript Date object’s toISOstring()
    fieldOfStudy: string = "compsci";
    helpYes: number = 0;
    helpNo: number = 0;
    definitions: definitions[];

    constructor() {
        let date: Date = new Date();
        this.dateCreated = date.toISOString();
        this.dateRevised = date.toISOString();
        this.definitions = new Array<definitions>();
    }
}

export class termNonEnglish {
    _id? : string;
    termEnglishId: string = "";
    wordEnglish: string = "Default";
    wordNonEnglish: string = "def";
    wordExpanded: string = "default";
    languageCode: string = "";
    image: string = "http://placekitten.com/200/300";
    imageType: string = "image/png";
    audio: string = "example audio";
    audioType: string = "audio/mp4";
    linkAuthoritative: string = "www.";
    linkWikipedia: string = "www.";
    linkYouTube: string = "www.";
    authorName: string = "Default";
    dateCreated: string; //use the JavaScript Date object’s toISOstring()
    dateRevised: string; //use the JavaScript Date object’s toISOstring()
    fieldOfStudy: string = "compsci";
    helpYes: number = 0;
    helpNo: number = 0;
    definitions: definitions[];
    

    constructor() {
        let date: Date = new Date();
        this.dateCreated = date.toISOString();
        this.dateRevised = date.toISOString();
        this.definitions = new Array<definitions>();
    }
}

export class idClass {
    _id: string;
  }