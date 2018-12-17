import { Injectable } from '@angular/core';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  country: Country[] = [
          {id: 1 , name: 'Paris' },
          {id: 2 , name: 'USA' },
          {id: 3 , name: 'Finland' },
          {id: 4 , name: 'Suède' },
  ];

  myCountry() {
    return this.country;
  }
}
