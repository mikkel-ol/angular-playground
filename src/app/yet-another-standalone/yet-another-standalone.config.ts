import { ApplicationConfig, ErrorHandler } from "@angular/core";

export const yetAnotherStandaloneConfig: ApplicationConfig = {
  providers: [
    {
      provide: ErrorHandler,
      useClass: class implements ErrorHandler {
        handleError(error: any): void {
          console.error("YET ANOTHER STANDALONE", error);
        }
      },
    },
  ],
};
