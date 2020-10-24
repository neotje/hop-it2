import { Component, Input, OnInit } from "@angular/core";
import { Button } from "../models/button";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() config: Button;

  constructor() {}

  ngOnInit() {}
}
