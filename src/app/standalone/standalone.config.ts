import { ApplicationConfig, ErrorHandler } from "@angular/core";

export const standaloneConfig: ApplicationConfig = {
  providers: [
    {
      provide: ErrorHandler,
      useClass: class implements ErrorHandler {
        handleError(error: any): void {
          console.error("Error in standalone application", error);
        }
      },
    },
  ],
};
