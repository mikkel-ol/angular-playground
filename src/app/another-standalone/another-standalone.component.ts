import { Component } from "@angular/core";

@Component({
  selector: "app-another-standalone",
  standalone: true,
  imports: [],
  templateUrl: "./another-standalone.component.html",
  styleUrl: "./another-standalone.component.scss",
})
export class AnotherStandaloneComponent {
  error() {
    setTimeout(() => {
      throw new Error();
    }, 200);
  }

  ngDoCheck() {
    console.log("AnotherStandaloneComponent.ngDoCheck");
  }
}
