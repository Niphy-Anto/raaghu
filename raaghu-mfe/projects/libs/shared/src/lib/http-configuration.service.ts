import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HttpConfigurationService {
    constructor(){

    }
    blobToText(blob: any): Observable<string> {
        return new Observable<string>((observer: any) => {
            if (!blob) {
                observer.next("");
                observer.complete();
            } else {
                let reader = new FileReader();
                reader.onload = function () {
                    observer.next(this.result);
                    observer.complete();
                }
                reader.readAsText(blob);
            }
        });
      }

    
}
export interface IAjaxResponse {
    success: boolean;
    result?: any;
    targetUrl?: string;
    error?: IErrorInfo;
    unAuthorizedRequest: boolean;
    __abp: boolean;
}
export interface IErrorInfo {
    code: number;
    message: string;
    details: string;
    validationErrors: IValidationErrorInfo[];
}
export interface IValidationErrorInfo {
    message: string;
    members: string[];
}