import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { environment } from "./environments/environment";
import { HostComponent } from "./host/host.component";
import { config } from "./host/host.config";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(HostComponent, config).catch((err) => console.error(err));
