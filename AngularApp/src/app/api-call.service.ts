import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

export interface ImageDetails{
    source: string;
}

export interface imageTag{
    tag: string;
}
interface flickrCallResponse{
    images: string;
}
interface ocrCallResponse{
    apiData: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private images: string;
  private ocrData: string;
  constructor(private http: HttpClient, private router: Router) { }
  private saveImages(images: string): void{
    localStorage.setItem('mean-image', images);
    this.images = images;
  }
  private saveOCRData(apiData: string): void{
    localStorage.setItem('mean-ocrData', apiData);
    this.ocrData = apiData;

  }
  private request(method: 'post'|'get', type:'sendImageTag'|'showResult'|'sendOCRData', tag?: imageTag){
    let base;
    if(method === 'post' && type === 'sendOCRData'){
        base = this.http.post('/api/sendOCRData', tag);
        const request = base.pipe(
            map((data: ocrCallResponse) => {
                if(data.apiData){
                    this.saveOCRData(data.apiData);
                }
                return data;
            })
            );
            return request;
    }
    else{
        try{
              base = this.http.post('/api/sendImageTag', tag);
              const request = base.pipe(
               map((data: flickrCallResponse) => {
                if(data.images){
                    this.saveImages(data.images);
                }
                return data;
             })
             );
            return request;
        }catch(err){
            console.log(err);
        }
      
    }
  
        
  }
  
  public sendImageTag(tag: imageTag): Observable<any>{
    return this.request('post','sendImageTag', tag);
  
  }
  public showResults(): Observable<any>{
    return this.request('get', 'showResult');
  }
  public sendOCRData(imageUrl: imageTag): Observable<any>{
    return this.request('post','sendOCRData', imageUrl);
  }
  
}
