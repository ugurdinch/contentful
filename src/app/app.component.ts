import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contenful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contentful-boilerplate';
  driverLicence: any;
  locale: string = "en-CA";
  driverLicenceProvinces: any;

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
  }

  getDriverLicence(locale: string) {
    this.contentfulService.getDriverLicence({
      locale: locale
    }).then(driverLicence => {
      this.driverLicence = driverLicence[0];
      this.getDriverLicenceProvinces(this.locale);
    });
  }

  getDriverLicenceProvinces(locale: string) {
    this.contentfulService.getDriverLicenceProvinces({
      locale: locale
    }).then(driverLicenceProvinces => this.driverLicenceProvinces = driverLicenceProvinces);
  }

}
