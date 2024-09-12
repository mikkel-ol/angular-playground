import { ChangeDetectorRef, Component, inject } from "@angular/core";

@Component({
  selector: "app-standalone",
  standalone: true,
  imports: [],
  templateUrl: "./standalone.component.html",
  styleUrl: "./standalone.component.scss",
  providers: [
    // {
    //   provide: NgZone,
    //   useFactory: () => inject(THINGY),
    // },
  ],
})
export class StandaloneComponent {
  private _cdr = inject(ChangeDetectorRef);

  error() {
    setTimeout(() => {
      throw new Error("Error in standalone component");
    }, 200);
  }

  doChanges() {
    this._cdr.detectChanges();
  }
}
