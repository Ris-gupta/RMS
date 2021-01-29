import { Injectable } from '@angular/core';
import * as Catalog from 'src/app/data/catalog.json';

@Injectable({
  providedIn: 'root',
})
export class GetJsonService {
  private catalog: any = (Catalog as any).default;
  private catalogData: any;
  public getJsonData(): void {
    if (this.catalog && this.catalog.status === 'success') {
      this.catalogData = this.catalog.data;
      return this.catalogData;
    }
  }
}
