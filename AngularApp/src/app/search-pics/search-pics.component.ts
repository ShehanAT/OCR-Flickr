import { Component, OnInit, Renderer2, Directive, ViewChild, Input, ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { ApiCallService, imageTag } from '../api-call.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-search-pics',
  templateUrl: './search-pics.component.html',
  styleUrls: ['./search-pics.component.css']
})

export class SearchPicsComponent implements OnInit, AfterViewInit {
    public isLoading: boolean = false;
    potentialTags: imageTag = {
        tag: ''
    }
    validImageCounter = 0;
    imageData: string;

  constructor(private apiCall: ApiCallService, private router: Router) { }
  @Output() sendDataEvent = new EventEmitter<string>();
  ngOnInit() {
  }
  ngAfterViewInit(){
  }
 
  sendAndGetImages(){
    this.isLoading = true;
    this.apiCall.sendImageTag(this.potentialTags).subscribe((data) => {
       
           for(var i = 0; i < 10 ; i++){
                if(!data.data[i]){
                    break;
                }
            this.validImageCounter++;
         }
        this.imageData = '';
         for(var i = 0; i < this.validImageCounter ; i++){
            this.imageData += data.data[i] + " ";
            
       }
     
      this.sendDataEvent.emit(this.imageData);
      this.validImageCounter = 0;
      this.isLoading = false;
  
    
    }, (err) => {
        console.error(err);
    });
  }

}
