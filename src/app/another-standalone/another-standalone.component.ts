import { Component } from "@angular/core";

@Component({
  selector: "app-another-standalone",
  standalone: true,
  imports: [],
  templateUrl: "./another-standalone.component.html",
  styleUrl: "./another-standalone.component.scss",
  providers: [
    // {
    //   provide: NgZone,
    //   useFactory: () => inject(THINGY),
    // },
  ],
})
export class AnotherStandaloneComponent {
  error() {
    setTimeout(() => {
      throw new Error("Error in standalone component");
    }, 200);
  }

  ngDoCheck() {
    console.log("AnotherStandaloneComponent.ngDoCheck");
  }
}
