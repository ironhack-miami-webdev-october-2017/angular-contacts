import { Component, OnInit } from '@angular/core';

import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  jokeList: string[] = [];

  constructor(private jokeThang: JokeService) { }

  ngOnInit() {
  }

  fetchJoke() {
      this.jokeThang.getRandomJoke()
        .subscribe(
          // SUCCESS
          (jokeData: any) => {
              console.log('Random joke!');
              console.log(jokeData);

              this.jokeList.push(jokeData.value.joke);
          },

          // ERROR
          (err) => {
              alert('Sorry! Something went wrong.');
              console.log('SHEEEEET');
              console.log(err);
          }
        );
  } // fetchJoke()

}
