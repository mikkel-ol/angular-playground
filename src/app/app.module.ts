import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: ErrorHandler,
      useClass: class implements ErrorHandler {
        handleError(error: any): void {
          console.error("Error in ROOT", error);
        }
      },
    },
  ],
})
export class AppModule {}
