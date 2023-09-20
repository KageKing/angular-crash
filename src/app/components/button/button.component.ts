import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = ''; // Initialize with an empty string or your desired default value
  @Input() color: string = 'defaultColor'; // Initialize with a default color value
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit();
  }
}

