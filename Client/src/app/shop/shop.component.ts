import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: false }) searchTersm: ElementRef;
  products: IProduct[];
  types: IType[];
  brands: IBrand[];
  shopParams = new ShopParams();
  totalCount: number;
  sortOptions = [
    { name: 'Alpahabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to low', value: 'priceDsc' },
  ];
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getTypes();
    this.getBrands();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(
      (response) => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTypes() {
    this.shopService.getTypes().subscribe(
      (response) => {
        this.types = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getBrands() {
    this.shopService.getBrands().subscribe(
      (response) => {
        this.brands = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.shopParams.sort = sort;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onPageChange(event: any) {
    if (this.shopParams.pageNumber != event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchTersm.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onRest() {
    this.searchTersm.nativeElement.value = '';
    this.shopParams = new ShopParams(); //for reset native alement
    this.getProducts();
  }
}
