// https://www.contentful.com/developers/docs/javascript/tutorials/using-contentful-in-an-angular-project/

import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable()
export class ContentfulService {

  CONFIG = {
    space: '18h1enwiw7y1',
    accessToken: '68baa1d4ca65f1f17097821228735fb24d499482e9861b6c5cab22f332bb47ea',
  
    contentTypeIds: {
      testDriverLicence: 'testDriverLicence',
      testDriverLicenceProvince: 'testDriverLicenceProvince'
    }
  }

  private cdaClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken
  });

  constructor() { }

  getDriverLicence(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: this.CONFIG.contentTypeIds.testDriverLicence
    }, query))
    .then(res => res.items);
  }

  getDriverLicenceProvinces(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: this.CONFIG.contentTypeIds.testDriverLicenceProvince
    }, query))
    .then(res => res.items);
  }

}