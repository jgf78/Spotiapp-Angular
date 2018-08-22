import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any [] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
       // console.log("ID recibido: "+ params.id);
       this.getArtista(params['id']);
       this.getTopTracks(params['id']);
      });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
      this.spotify.getArtista(id).subscribe( artista => {
        console.log("id del artista: "+ artista);
        this.artista = artista;
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      this.topTracks = topTracks;
      console.log("topTracks: "+ topTracks);
      this.loading = false;
    });
}
}
