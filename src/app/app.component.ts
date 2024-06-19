import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bhagycalculator';
  Cal: number = 0;
  funct: any = 'Nonfunction';
  calNumber: string = 'noValue';
  firstnumber: number = 0;
  secondnumber: number = 0;
  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onfunctionClick(val);
    }

    console.log(val, type);
  }
  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.Cal = parseFloat(this.calNumber);
  }

  onfunctionClick(val: string) {
    if (this.funct == 'c') {
      this.clearAll();
    }

    if (this.funct == 'Nonfunction') {
      this.firstnumber = this.Cal;
      this.Cal = 0;
      this.calNumber = 'noValue';
      this.funct = val;
    } else if (this.funct != 'NoFunction') {
      this.secondnumber = this.Cal;
      this.valCalculate(val);
    }
  }
  valCalculate(val: string) {
    if (this.funct == '+') {
      const Total = this.firstnumber + this.secondnumber;
      this.totalAssignValue(Total, val);
    } else if (this.funct == '-') {
      const Total = this.firstnumber - this.secondnumber;
      this.totalAssignValue(Total, val);
    } else if (this.funct == '*') {
      const Total = this.firstnumber * this.secondnumber;
      this.totalAssignValue(Total, val);
    } else if (this.funct == '/') {
      const Total = this.firstnumber / this.secondnumber;
      this.totalAssignValue(Total, val);
    } else if (this.funct == '%') {
      const Total = this.firstnumber % this.secondnumber;
      this.totalAssignValue(Total, val);
    }
  }

  totalAssignValue(Total: number, val: string) {
    this.Cal = Total;
    this.firstnumber = Total;
    this.secondnumber = 0;
    this.calNumber = 'noValue';
    this.funct = val;
  }

  clearAll() {
    this.Cal = 0;
    this.funct = 'Nonfunction';
    this.calNumber = 'noValue';
    this.firstnumber = 0;
    this.secondnumber = 0;
  }

  onEqualPress() {
    this.firstnumber = 0;
    this.secondnumber = 0;
    this.funct = 'Nonfunction';
    this.calNumber = 'noValue';
  }
}
