import { ErrorHandler, NgModule, NgZone } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModuleComponent } from "./module.component";

@NgModule({
  declarations: [ModuleComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: class implements ErrorHandler {
        handleError(error: any): void {
          console.error("Error in module application", error);
        }
      },
    },
    {
      provide: NgZone,
      useFactory: () => (window as any).__myZone,
    },
  ],
})
export class ModuleModule {
  ngDoBootstrap() {}
}
