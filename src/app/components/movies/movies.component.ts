import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  standalone: false
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getTrendingMovies().subscribe(
      (response) => {
        console.log('Response:', response);  // لعرض البيانات
        this.movies = response.results;
      },
      (error) => {
        console.error('Error fetching movies:', error);  // لعرض الأخطاء
      }
    );
  }
}

