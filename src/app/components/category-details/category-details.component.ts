import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetJsonService } from 'src/app/services/get-json.service';
import * as Catalog from './../../data/catalog.json';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  catalog: any = (Catalog as any).default;
  catalogData: any;
  categoriesDetailData: any[] = [];
  constructor(private acRoute: ActivatedRoute, private getJsonService: GetJsonService) {}

  ngOnInit() {
    this.catalogData = this.getJsonService.getJsonData();
    if(this.catalogData) {
      this.acRoute.queryParams.subscribe((queryParam): any => {
        this.categoriesDetailData = []
        if (queryParam.branchId) {
          let subCat = this.catalogData.locations
            .filter((loc: any) => {
              return loc.dealers_id == queryParam.locId;
            })[0]
            .branches.filter((branch: any) => {
              return branch.branch_id === queryParam.branchId;
            })[0]
            .categories.filter((category: any) => {
              return category.name === queryParam.categoryName;
            })[0].subcategories;
          console.log(subCat, 'sub');
          this.categoriesDetailData.push(...subCat)
        } else {
          alert('You have to choose branch for detail')
        }
      });
    }
  }
}
