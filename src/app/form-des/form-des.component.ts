import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {QueryServiceService} from '../../services/query-service.service';
import {ResultServiceService} from '../../services/result-service.service';

@Component({
  selector: 'app-form-des',
  templateUrl: './form-des.component.html',
  styleUrls: ['./form-des.component.scss']
})
export class FormDesComponent implements OnInit {

  @Output() update = new EventEmitter();

  xValues: any[];
  pointX: number;
  pointY: number;
  radius: number;
  rX: number;
  rY: number;
  rH: number;
  rW: number;
  triangle: string;
  circle: string;
  pX: number;
  pY: number;
  pFill: string;
  constructor(private queryService: QueryServiceService, private resultService: ResultServiceService) {
    this.xValues = [];
    [this.pointX, this.pointY, this.radius] = [0, 0, 3];
    [this.rX, this.rY, this.rH, this.rW] = [0, 0, 0, 0];
    this.triangle = '';
    this.circle = '';
    this.pFill = 'blue';
    [this.pX, this.pY] = [0, 0];
    for (let i = -2; i <= 2; i += 0.5) {
      this.xValues.push({name: i.toString(), value: i});
    }
  }

  ngOnInit(): void {
    this.updateSVG();
  }
  updateSVG(): void {
    this.rX = 150 - this.radius * 30;
    this.rY = 150;
    this.rH = this.radius * 15;
    this.rW = this.radius * 30;
    this.triangle = `M150 150 L${150 + this.radius * 30} 150 L150 ${150 - this.radius * 15}Z`;
    this.circle = `M150 ${150 - this.radius * 15} A${this.radius * 15} ${this.radius * 15} 0 0 0 ${150 - this.radius * 15} 150 L150 150Z`;
    this.pX = 150 + this.pointX * 30;
    this.pY = 150 - this.pointY * 30;
    this.pFill = this.isInside() ? 'blue' : 'red';
  }
  isInside(): boolean {
    if (-this.radius <= this.pointX && this.pointX <= 0 && -this.radius / 2 <= this.pointY && this.pointY <= 0) {
      return true;
    }
    if (-this.radius / 2 <= this.pointX && this.pointX <= 0 && 0 <= this.pointY && this.pointY <= this.radius / 2) {
      if (Math.pow(this.pointX, 2) + Math.pow(this.pointY, 2) <= Math.pow(this.radius, 2)) {
        return true;
      }
    }
    if (0 <= this.pointX && this.pointX <= this.radius && 0 <= this.pointY && this.pointY <= this.radius / 2) {
      if ((this.radius - this.pointX) / 2 >= this.pointY) {
        return true;
      }
    }
    return false;
  }

  onSubmit(): void {
    this.update.emit({x: this.pointX, y: this.pointY, r: this.radius});
  }
  onClick(e: any): void {
    this.pointX = Number(((e.offsetX - 150) / 30).toFixed(2));
    this.pointY = Number((-(e.offsetY - 150) / 30).toFixed(2));
    this.updateSVG();
    this.onSubmit();
  }
}
