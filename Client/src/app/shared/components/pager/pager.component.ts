import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Input() pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onPagerChange(event: any) {
    this.pageChanged.emit(event);
    console.log('ff ev', event);
    console.log('ff totalCount', this.totalCount);
    console.log('ff pageChange', this.pageSize);
  }
}
