import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetJsonService } from './services/get-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  catalogData: any;
  constructor(private router: Router, private getJsonService: GetJsonService) {}
  ngOnInit(): void {
    this.catalogData = this.getJsonService.getJsonData();
  }
  public branchChange(locindex: any, branchIndex: any) {
    this.router.navigate(['/categories'], {
      queryParams: { locId: locindex, branchId: branchIndex },
    });
  }
  public locChange(locindex: any, branchIndex: any) {
    this.router.navigate(['/categories'], {
      queryParams: { locId: locindex, branchId: branchIndex },
    });
  }
}
