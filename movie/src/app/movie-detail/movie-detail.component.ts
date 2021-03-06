import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movieInfo: Movie;

  constructor(private movieService : MovieService, private route:ActivatedRoute) { 

  }

  ngOnInit() {
    
    this.route.paramMap.subscribe(map => {
      let movieTitle: string = map['params'].name;
      if(movieTitle){
        this.movieService.getMovie(movieTitle).subscribe(
          data => {
            this.movieInfo = data
          }
        );
       }
    });

     
  }

  

}
