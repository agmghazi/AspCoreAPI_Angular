import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  constructor(
    private shopService: ShopService,
    private activeRoute: ActivatedRoute,
    private breadcrumb: BreadcrumbService
  ) {
    this.breadcrumb.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService
      .getProduct(+this.activeRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (prodct) => {
          this.product = prodct;
          this.breadcrumb.set('@productDetails', prodct.name);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
