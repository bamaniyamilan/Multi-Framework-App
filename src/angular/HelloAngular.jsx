import React, { useEffect } from 'react';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../angular/app.module';

const HelloAngular = () => {
  useEffect(() => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }, []);

  return <div id="angular-app"><hello-angular></hello-angular></div>;
};

export default HelloAngular;
