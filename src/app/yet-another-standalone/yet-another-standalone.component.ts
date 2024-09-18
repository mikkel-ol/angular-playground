import { Component } from "@angular/core";

@Component({
  selector: "app-yet-another-standalone",
  standalone: true,
  imports: [],
  templateUrl: "./yet-another-standalone.component.html",
  styleUrl: "./yet-another-standalone.component.scss",
})
export class YetAnotherStandaloneComponent {
  error() {
    setTimeout(() => {
      throw new Error();
    }, 200);
  }

  ngDoCheck() {
    console.log("YetAnotherStandaloneComponent.ngDoCheck");
  }
}
