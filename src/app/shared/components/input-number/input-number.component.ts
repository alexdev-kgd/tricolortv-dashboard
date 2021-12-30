import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

enum CALCULATING_OPERATIONS {
  DECREMENT = "DECREMENT",
  INCREMENT = "INCREMENT"
}
const DEFAULT_FONT_SIZE = 14;

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.sass']
})
export class InputNumberComponent implements OnInit {
  @ViewChild('decrement') decrement: ElementRef;
  @ViewChild('increment') increment: ElementRef;
  @ViewChild('numberInput', { static: true }) numberInput: ElementRef;

  @Input('min') min: number;
  @Input('max') max: number;

  ngOnInit(): void {
      this.numberInput.nativeElement.value = DEFAULT_FONT_SIZE;
  }

  public calculateNumber(operation: CALCULATING_OPERATIONS, predicate): void {
    if(!predicate) return;

    let value = this.numberInput.nativeElement.value;

    switch (operation) {
      case "INCREMENT":
        value++;
        break;
      case "DECREMENT":
        value--;
        break;
      default:
        break;
    }
    
    this.numberInput.nativeElement.value = value;
  }

  public decrementNumber() {
    const predicate = !this.min || this.numberInput.nativeElement.value > this.min;
    this.calculateNumber(CALCULATING_OPERATIONS.DECREMENT, predicate);
  }

  public incrementNumber() {
    const predicate = !this.max || this.numberInput.nativeElement.value < this.max;
    this.calculateNumber(CALCULATING_OPERATIONS.INCREMENT, predicate);
  }

}
