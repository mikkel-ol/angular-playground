import { ApplicationConfig, ErrorHandler } from "@angular/core";

export const yesYetAnotherStandaloneConfig: ApplicationConfig = {
  providers: [
    {
      provide: ErrorHandler,
      useClass: class implements ErrorHandler {
        handleError(error: any): void {
          console.error("YES YET ANOTHER STANDALONE", error);
        }
      },
    },
  ],
};
