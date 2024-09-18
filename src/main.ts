import { enableProdMode, NgZone } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { createApplication } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AnotherStandaloneComponent } from "./app/another-standalone/another-standalone.component";
import { anotherStandaloneConfig } from "./app/another-standalone/another-standalone.config";
import { AppModule } from "./app/app.module";
import { StandaloneComponent } from "./app/standalone/standalone.component";
import { standaloneConfig } from "./app/standalone/standalone.config";
import { YesYetAnotherStandaloneComponent } from "./app/yes-yet-another-standalone/yes-yet-another-standalone.component";
import { yesYetAnotherStandaloneConfig } from "./app/yes-yet-another-standalone/yes-yet-another-standalone.config";
import { YetAnotherStandaloneComponent } from "./app/yet-another-standalone/yet-another-standalone.component";
import { yetAnotherStandaloneConfig } from "./app/yet-another-standalone/yet-another-standalone.config";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(async (hostRef) => {
    const zone = hostRef.injector.get(NgZone);

    const appRef1 = await createApplication(standaloneConfig);
    const zone1 = appRef1.injector.get(NgZone);

    const element1 = createCustomElement(StandaloneComponent, { injector: appRef1.injector });
    customElements.define("mf-standalone", element1);

    const appRef2 = await createApplication(anotherStandaloneConfig);
    const zone2 = appRef2.injector.get(NgZone);

    const element2 = createCustomElement(AnotherStandaloneComponent, { injector: appRef2.injector });
    customElements.define("mf-another-standalone", element2);

    const appRef3 = await createApplication(yetAnotherStandaloneConfig);
    const zone3 = appRef3.injector.get(NgZone);

    const element3 = createCustomElement(YetAnotherStandaloneComponent, { injector: appRef3.injector });
    customElements.define("mf-yet-another-standalone", element3);

    const appRef4 = await createApplication(yesYetAnotherStandaloneConfig);
    const zone4 = appRef4.injector.get(NgZone);

    const element4 = createCustomElement(YesYetAnotherStandaloneComponent, { injector: appRef4.injector });
    customElements.define("mf-yes-yet-another-standalone", element4);

    let flag = false;

    const z1 = () => {
      appRef1.tick();
    };

    const z2 = () => {
      appRef2.tick();
    };

    const z3 = () => {
      appRef3.tick();
    };

    const z4 = () => {
      appRef4.tick();
    };

    function doIt(me: any) {
      if (flag) return;

      flag = true;

      if (z1 !== me) z1();
      if (z2 !== me) z2();
      if (z3 !== me) z3();
      if (z4 !== me) z4();

      flag = false;
    }

    zone1.onMicrotaskEmpty.subscribe((x) => {
      doIt(z1);
    });

    zone2.onMicrotaskEmpty.subscribe((x) => {
      doIt(z2);
    });

    zone3.onMicrotaskEmpty.subscribe((x) => {
      doIt(z3);
    });

    zone4.onMicrotaskEmpty.subscribe((x) => {
      doIt(z4);
    });
  });
