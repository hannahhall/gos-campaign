import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() successText: string;
  @Input() cancelText: string;
  isVisibleValue: boolean;

  @Input()
  get isVisible() {
    return this.isVisibleValue;
  }

  @Output() isVisibleChange = new EventEmitter();

  set isVisible(val: boolean) {
    this.isVisibleValue = val;
    this.isVisibleChange.emit(this.isVisibleValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
