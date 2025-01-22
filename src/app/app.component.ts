import { Component } from "@angular/core";
import { MatAnchor, MatButton } from "@angular/material/button";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [MatButton, MatAnchor],
})
export class AppComponent {
  title = "angular";
}
