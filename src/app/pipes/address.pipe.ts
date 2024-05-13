import { Pipe, PipeTransform } from '@angular/core';
import { IAdress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(addres: IAdress): string {
    const INVALID_ADDRESS =
      !addres ||
      !addres.rua ||
      !addres.cidade ||
      !addres.estado ||
      !addres.numero === null || addres.numero === undefined;

    if (INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido';
    }

    return `${addres.rua}, ${addres.numero}, ${addres.cidade} - ${addres.estado}`;

  }

}
