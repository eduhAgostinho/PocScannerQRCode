import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Decode } from '../decode';

@Injectable()
export class EstacaoService {

  private readonly url = '10.96.127.74:3000/estacao';
  constructor(private http: HttpClient) { }

  postQRCode(decode: Decode) {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(this.url, decode, options);
  }

}