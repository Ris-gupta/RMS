import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GetJsonService } from 'src/app/services/get-json.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoriesData: any[] = [];
  catalogData: any;
  locId: any;
  branchId: any;
  constructor(
    private router: Router,
    private getJsonService: GetJsonService,
    private acRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.catalogData = this.getJsonService.getJsonData();
    if (this.catalogData) {
      this.acRoute.queryParams.subscribe(async (val) => {
        this.locId = val.locId;
        this.branchId = val.branchId;
        this.categoriesData = [];
        let currentLoc = await this.catalogData.locations.find((dt: any) => {
          return dt.dealers_id == val.locId;
        }).branches;
        currentLoc.forEach((branch: any) => {
          if (val.branchId) {
            if (branch.branch_id === val.branchId) {
              this.categoriesData.push(...branch.categories);
            }
          } else {
            this.categoriesData.push(...branch.categories);
          }
          console.log(this.categoriesData, 'categoriesData');
        });
      });
    }
  }
  categoryDetail(categoryName: any) {
    this.router.navigate(['category-details'], {
      queryParams: {
        locId: this.locId,
        branchId: this.branchId,
        categoryName: categoryName,
      },
    });
  }
}
