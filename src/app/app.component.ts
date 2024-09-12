import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular";

  error() {
    setTimeout(() => {
      throw new Error("Error in ROOT component");
    }, 200);
  }
}
