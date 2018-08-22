import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): any {
    // si la imagen no viene informada...
    if (!images) {
      return 'assets/img/noimage.png';
    }

    // si la imagen viene informada...
    if (images.length > 0) {
      return images[0].url;
    } else { // en cualquier otro caso...
      return 'assets/img/noimage.png';
    }
  }

}
