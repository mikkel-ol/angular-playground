import { ApplicationConfig, ErrorHandler } from "@angular/core";

export const anotherStandaloneConfig: ApplicationConfig = {
  providers: [
    {
      provide: ErrorHandler,
      useClass: class implements ErrorHandler {
        handleError(error: any): void {
          console.error("ANOTHER STANDALONE", error);
        }
      },
    },
  ],
};
