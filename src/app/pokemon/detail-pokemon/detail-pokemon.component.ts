import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon-model';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  typeStyle: {};
  showPagination: boolean;
  @Input() pokemon: Pokemon;
  stateArrayMove: {
    currentArray: {
      start: number;
      end: number;
    }
  };
  ArrayLength: number;

  constructor() {
    this.showPagination = false;
    this.typeStyle = {
      'color': 'white',
      'height': '100px',
      'text-align': 'center',
      'border-radius': '15px',
      'padding': '2em',
      'margin-bottom': '1em'
    };
  }

  ngOnInit() {
    this.ArrayLength =  this.pokemon.moves.length;
    if (this.ArrayLength >= 10)  {
      this.stateArrayMove = {
        currentArray: {
          start: 0,
          end: Math.round(this.ArrayLength / 10)
        }
      };
      this.showPagination = true;
    } else {
        this.stateArrayMove = {
          currentArray: {
            start: 0,
            end: this.ArrayLength
          }
        };
      }
    }

  assignStateArrayMove(event) {
   this.stateArrayMove = {
    currentArray: {
        start: 0,
        end: Math.round(this.pokemon.moves.length / 10),
      }};
   this.stateArrayMove = {...event};
  }
}
