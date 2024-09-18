import { Component } from "@angular/core";

@Component({
  selector: "app-yes-yet-another-standalone",
  standalone: true,
  imports: [],
  templateUrl: "./yes-yet-another-standalone.component.html",
  styleUrl: "./yes-yet-another-standalone.component.scss",
})
export class YesYetAnotherStandaloneComponent {
  error() {
    setTimeout(() => {
      throw new Error();
    }, 200);
  }

  ngDoCheck() {
    console.log("YesYetAnotherStandaloneComponent.ngDoCheck");
  }
}
