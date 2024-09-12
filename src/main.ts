import { enableProdMode, getPlatform, InjectionToken, NgZone } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { createApplication } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AnotherStandaloneComponent } from "./app/another-standalone/another-standalone.component";
import { anotherStandaloneConfig } from "./app/another-standalone/another-standalone.config";
import { AppModule } from "./app/app.module";
import { ModuleComponent } from "./app/module/module.component";
import { ModuleModule } from "./app/module/module.module";
import { StandaloneComponent } from "./app/standalone/standalone.component";
import { standaloneConfig } from "./app/standalone/standalone.config";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

export const THINGY = new InjectionToken<NgZone>("ASDONASDASD");

(async () => {
  const modRef = await platformBrowserDynamic().bootstrapModule(AppModule);

  const zone = modRef.injector.get(NgZone);
  (window as any).__myZone = zone;

  standaloneConfig.providers.push({
    provide: NgZone,
    useValue: zone,
  });

  const { injector: inj1 } = await createApplication(standaloneConfig);

  const element1 = createCustomElement(StandaloneComponent, { injector: inj1 });
  customElements.define("mf-standalone", element1);

  const { injector: inj2 } = await (getPlatform() || platformBrowserDynamic())!.bootstrapModule(ModuleModule);

  const element2 = createCustomElement(ModuleComponent, { injector: inj2 });
  customElements.define("mf-module", element2);

  anotherStandaloneConfig.providers.push({
    provide: NgZone,
    useValue: zone,
  });

  const { injector: inj3 } = await createApplication(anotherStandaloneConfig);

  const element3 = createCustomElement(AnotherStandaloneComponent, { injector: inj3 });
  customElements.define("mf-another-standalone", element3);
})();
