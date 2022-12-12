import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsumoApiService {
  httpOptions = {
    headers: new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Access-Control-Allow-Origin' :'*'
    })
  };

    // apiURL = 'https://jsonplaceholder.typicode.com';

    // eslint-disable-next-line max-len
    apiURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=99gygp09wGAHmk8wXKfF_Xd-i3ssYWFSYtk2x4jqFZ4bsLtSbOA0Wst9fW2qLxqiDG4hlWnBT_zOqN8R-YPIK60nGXGZb-KFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG0Y6rmP8xAOsxW_bzxQ9tIMkbXBRndoPfZmpUJY0sh2FiGkkunwi-QPnYuaSKXD9Mu7VB-D1ZVd8taE7UE50CMufw8vtalTk9z9Jw9Md8uu&lib=MpPouhMBl2r8iyMeERr2Mo2Zav8tK1yjp';

  constructor(private http: HttpClient) { }

  // getPosts(): Observable<any>{
  //   return this.http.get(this.apiURL+'/posts/').pipe(
  //   retry(3)
  //   );
  //   }

    getPosts(): Observable<any>{
      return this.http.get(this.apiURL).pipe(
      retry(3)
      );
      }
}
