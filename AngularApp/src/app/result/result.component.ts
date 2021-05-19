import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Renderer2, Directive } from '@angular/core';
import { SearchPicsComponent } from '../search-pics/search-pics.component';
import { ApiCallService, imageTag } from '../api-call.service';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
   counter : number = 0;
   public searchStart = false;
   public image1show = false;
   public image2show = false;
   public image3show = false;
   public image4show = false;
   public image5show = false;
   public image6show = false;
   public image7show = false;
   public image8show = false;
   public image9show = false;

   public isLoading: boolean = false;
   
  @ViewChild(SearchPicsComponent, {static: false}) child;
   @ViewChild('galleryRef', {static: false}) galleryElementRef: ElementRef;
   @ViewChild('galleryRef1', {static: false}) galleryElementRef1: ElementRef;
   @ViewChild('galleryRef2', {static: false}) galleryElementRef2: ElementRef;
   @ViewChild('galleryRef3', {static: false}) galleryElementRef3: ElementRef;
   @ViewChild('galleryRef4', {static: false}) galleryElementRef4: ElementRef;
   @ViewChild('galleryRef5', {static: false}) galleryElementRef5: ElementRef;
   @ViewChild('galleryRef6', {static: false}) galleryElementRef6: ElementRef;
   @ViewChild('galleryRef7', {static: false}) galleryElementRef7: ElementRef;
   @ViewChild('galleryRef8', {static: false}) galleryElementRef8: ElementRef;
   @ViewChild('galleryRef9', {static: false}) galleryElementRef9: ElementRef;
   @ViewChild('ocrWordsRef', {static: false}) ocrWordsElementRef: ElementRef;
  @Input() imageData: Array<any>;
  constructor( private renderer: Renderer2, private elementRef: ElementRef, private apiCall: ApiCallService, private router: Router, private authGuard: AuthGuardService ) { }

  ngOnInit() {
    this.authGuard.canActivate()
  }
  imageUrl: imageTag = {
    tag: ''
  }
  
  wordList: string = '';
  searchStatus: string = '';
  urls: string[];
  onClick(event){
    this.isLoading = true;
    this.wordList = 'Extracted Words: ';
    var target = event.target || event.srcElement || event.currentTarget;
    try{
      this.imageUrl.tag = target.attributes.id.value;//saving image url in a string var
    }catch(err){
      this.wordList += 'Image url not found! Please try a different picture...'
      this.isLoading = false 
      return 
    }
    
    this.apiCall.sendOCRData(this.imageUrl).subscribe((data) => {
        var obj = JSON.parse(data.data);
        try{
            for(var c = 0 ; c < obj.regions.length ; c++){
              for(var i = 0 ; i < obj.regions[c].lines.length ; i++){
                for(var j = 0 ; j < obj.regions[c].lines[i].words.length ; j++ ){
                    this.wordList += (obj.regions[c].lines[i].words[j].text) + ", ";
                }  
             }
            }
            this.isLoading = false;
            if(this.wordList === 'Extracted Words: '){
                this.wordList += 'No words were found!';
             
            }
           
           
        }catch(err){
            this.wordList += 'No words were found!';
            this.isLoading = false;
        }
        
    }, (err) => {
        console.error(err);
    });
  }
  
  recieveMessage($event){
    try{
       this.urls = $event.split(" ", 10);
      
       if(this.urls.length === 1){
                this.searchStatus = "No images found!";
                this.image1show = false;
                this.image2show = false;
                this.image3show = false;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', '');
                this.galleryElementRef2.nativeElement.setAttribute('src', '');
                this.galleryElementRef3.nativeElement.setAttribute('src', '');
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       }
       else if(this.urls.length === 2){
                this.searchStatus = "1 image found!";
                this.image1show = true;
                this.image2show = false;
                this.image3show = false;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', '');
                this.galleryElementRef3.nativeElement.setAttribute('src', '');
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }
       else if(this.urls.length === 3){
                this.searchStatus = "2 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = false;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', '');
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }
             else if(this.urls.length === 4){
                this.searchStatus = "3 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }    else if(this.urls.length === 5){
                this.searchStatus = "4 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }
        else if(this.urls.length === 6){
                this.searchStatus = "5 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }
        else if(this.urls.length === 7){
                this.searchStatus = "6 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = true;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[5]);
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }
         else if(this.urls.length === 8){
                this.searchStatus = "7 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = true;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[5]);
                this.galleryElementRef7.nativeElement.setAttribute('src', this.urls[6]);
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }
         else if(this.urls.length === 9){
                this.searchStatus = "8 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = true;
                this.image7show = true;
                this.image8show = true;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[5]);
                this.galleryElementRef7.nativeElement.setAttribute('src', this.urls[6]);
                this.galleryElementRef8.nativeElement.setAttribute('src', this.urls[7]);
                this.galleryElementRef9.nativeElement.setAttribute('src', ''); 
       
       }
       else{
            this.searchStatus = "9 images found!"
            this.image1show = true;
            this.image2show = true;
            this.image3show = true;
            this.image4show = true;
            this.image5show = true;
            this.image6show = true;
            this.image7show = true;
            this.image8show = true;
            this.image9show = true;
             for(var i = 0 ; i < this.urls.length ; i++){
                    this.searchStatus = '';
                    this.counter++;
                    this.searchStart = true;
                  
                    switch(this.counter){
                        case 1: this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[i]);
                        this.galleryElementRef1.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 2:
                        this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef2.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 3:
                        this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef3.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 4:
                        this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef4.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 5:
                        this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef5.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 6:
                        this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef6.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 7:
                        this.galleryElementRef7.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef7.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 8:
                        this.galleryElementRef8.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef8.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        case 9:
                        this.galleryElementRef9.nativeElement.setAttribute('src', this.urls[i]);
                           this.galleryElementRef9.nativeElement.setAttribute('id', 
                        this.urls[i]);
                        break;
                        default:
                        this.counter = 0;
                        break;
             
             
             }
       }
      
       }
    }catch(err){
        console.log(err);
    
    }
    /**
    if($event === "No Images Found!"){
        
         
    }else{
    
        }
    } **/
 
    
  }
  
  ngAfterViewInit(){

  }

}

