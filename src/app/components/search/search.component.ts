import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artistas: any [] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
   console.log("termino: "+ termino);
   this.loading = true;
   this.spotify.getArtistas(termino).subscribe( (data: any) => {
      console.log("Data: "+ data);
      this.artistas = data;
      this.loading = false;
   });
  }

}