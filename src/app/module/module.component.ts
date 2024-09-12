import { Component } from "@angular/core";

@Component({
  selector: "app-module",
  templateUrl: "./module.component.html",
  styleUrl: "./module.component.scss",
})
export class ModuleComponent {
  error() {
    setTimeout(() => {
      throw new Error("Error in module component");
    }, 200);
  }

  ngDoCheck() {
    console.log("ModuleComponent.ngDoCheck");
  }
}
