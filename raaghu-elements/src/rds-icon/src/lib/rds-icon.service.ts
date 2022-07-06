import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RdsIconService {

  constructor(private http: HttpClient) { }


  public async getSvgIcon(icon: string): Promise<any> {
    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');
    const svgString =
      await this.http.get(`assets/icons/${icon}.svg`, { headers, responseType: 'text' }).toPromise();
    return svgString;


  }

}