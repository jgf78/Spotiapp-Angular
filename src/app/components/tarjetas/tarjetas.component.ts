import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  verArtista(item: any) {
     console.log("item seleccionado: "+item.id);
     let artistaID;
     if ( item.type === 'artist') {
       artistaID = item.id;
     } else {
      artistaID = item.artists[0].id;
     }

     // console.log("artistaID: "+artistaID);
     this.router.navigate(['artist', artistaID]);
  }

}
