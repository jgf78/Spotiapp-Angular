import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCg6Amh9YBDfkcWYIeaYnSf-dQeDPdB2VBpsAJhszzlthP7w5WHl4L4lhTyFQVVc46NOzEwoCt0HobML8M'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAIKbdTYg_iw_xfwpGxj8RTvUK68pKbuyezDNQa7F9pyVO3itOD8dsXWEd4_cdI6s1iC5bSBhudfVGyY4lM2A7J8QiG37fALAimy7MY37Bg-UXjOaoy1dWZBUs2_YvwB4t1'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //    .pipe(map(data => {
    //     // Busca dentro de la data un nodo albums
    //             return data['albums'].items;
    //    }));
    // .subscribe( data => {
    //  console.log(data);
    // });

    return this.getQuery('browse/new-releases')
    .pipe(map(data => {
      // Busca dentro de la data un nodo albums
                  return data['albums'].items;
         }));
  }

  getArtistas(termino: string) {
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer BQAIKbdTYg_iw_xfwpGxj8RTvUK68pKbuyezDNQa7F9pyVO3itOD8dsXWEd4_cdI6s1iC5bSBhudfVGyY4lM2A7J8QiG37fALAimy7MY37Bg-UXjOaoy1dWZBUs2_YvwB4t1'
  //   });

  //    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
  //    .pipe(map(data => {
  //     // Busca dentro de la data un nodo artists
  //           return data['artists'].items;
  //    }));
  // }
    let query: string;
    query = `search?q=${ termino }&type=artist`;
    return this.getQuery(query)
    .pipe(map(data => {
      // Busca dentro de la data un nodo artists
                  return data['artists'].items;
         }));
    }

    getArtista(id: string) {
      let query: string;
      query = `artists/${ id }`;
      return this.getQuery(query);
    }

    getTopTracks(id: string) {
      // console.log("**********************"+id);
      let query: string;
      query = `artists/${ id }/top-tracks?country=es`;
      return this.getQuery(query)
      .pipe(map(data => {
        // Busca dentro de la data un nodo tracks
                    return data['tracks'];
           }));
    }
}
