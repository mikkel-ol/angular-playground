import { ChangeDetectorRef, Component, inject } from "@angular/core";

@Component({
  selector: "app-standalone",
  standalone: true,
  imports: [],
  templateUrl: "./standalone.component.html",
  styleUrl: "./standalone.component.scss",
})
export class StandaloneComponent {
  private _cdr = inject(ChangeDetectorRef);

  error() {
    setTimeout(() => {
      throw new Error();
    }, 200);
  }

  doChanges() {
    this._cdr.detectChanges();
  }

  ngDoCheck() {
    console.log("StandaloneComponent.ngDoCheck");
  }
}
