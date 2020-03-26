import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

/** @dynamic */
@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class ApiUrlService {
  urlAPI: string;

  isDev = !this.env.production;
  isProduction = this.env.production;

  constructor(@Inject('env') public env, @Inject(DOCUMENT) private document: Document) {}

  getMyConfig(): Observable<string> {
    let resultado = null;
    const toArray = this.document.location.hostname.split('.');
    localStorage.setItem('sigpharma', toArray[0]);

    console.log(`=> ${toArray[0]}`);

    if (toArray[2] === 'com') {
      resultado = 'https://api.' + toArray[0] + '.' + toArray[1] + '.com';
    }

    // if (toArray[2] === 'com' && toArray[3] === 'br') {
    //   resultado = 'https://api.' + toArray[0] + '.' + toArray[1] + '.com.br';
    // }

    if (toArray[2] === 'xyz') {
      if (toArray[0] !== 'febrafar') {
        resultado = 'http://api.' + toArray[0] + '.' + toArray[1] + '.xyz';
      }
      if (toArray[0] === 'febrafar') {
        resultado = 'http://api.' + toArray[0] + '.' + toArray[1] + '.xyz';
      }
    }

    if (toArray[2] === 'net') {
      resultado = 'https://api.' + toArray[0] + '.' + toArray[1] + '.net';
    }

    localStorage.setItem('sigpharma', toArray[0]);

    if (resultado) {
      localStorage.setItem('sigpharma', toArray[0]);

      // mira para o NET para não ter que abrir a API no PC de Devlopment
      // Carlos Eduardo
      this.env.apiCLOUDS3 =
        'https://cloud.' + toArray[1] + '.net' + '/upload/upload-s3';

      this.env.awsS3Assets =
        'https://s3-sa-east-1.amazonaws.com/solucoes-com-br/assets/';

      // https://s3-sa-east-1.amazonaws.com/solucoes-com-br/assets/
      // https://s3-sa-east-1.amazonaws.com/sigpharma-net
      if (this.env.devFAST) {
        resultado = 'https://api.' + toArray[0] + '.' + toArray[1] + '.net';

        if (toArray[0] === 'apresentacao') {
          resultado = 'https://api.apresentacao.solucoessig.com.br';
        }
      }
      // resultado = 'http://192.168.1.18:3000';

      this.env.apiSIG = resultado;
      localStorage.setItem('apiSIG', resultado);
      localStorage.setItem(
        'socketNET',
        (resultado = 'api.' + toArray[0] + '.' + toArray[1] + '.net')
      );

      if (this.isDev) {
        this.env.awsS3Assets =
          'https://s3-sa-east-1.amazonaws.com/sigpharma-net/assets/';
        console.log(0.1, 'fast', this.env.devFAST, this.env.apiSIG);
      } else {
        console.log(0.1, 'API =>', this.isDev);
      }

      console.log(0.2, 'env cloud', this.env.apiCLOUDS3);

      // rodar api-george

      // if (this.isDev && this.env.devFAST) {
      //   this.env.apiSIG = resultado;
      // }

      // console.log(0.3 , 'apiSIG', this.env.apiSIG);
      console.log(0.3, 'fast', this.env.devFAST, this.env.apiSIG);

      return resultado;
    } else {
      localStorage.setItem('sigpharma', 'error');
    }
  }
}
