import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // استيراد HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940';

  constructor(private http: HttpClient) {}  // حقن HttpClient

  getTrendingMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // استخدام HttpClient لعمل الطلب
  }
}



