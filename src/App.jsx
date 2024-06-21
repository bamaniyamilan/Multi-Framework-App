import React, { useEffect } from 'react';
import { createApp } from 'vue';
import HelloVue from './vue/HelloVue.vue';
import './angular/main.ts';  // Import Angular's main.ts to bootstrap Angular

const App = () => {
  useEffect(() => {
    createApp(HelloVue).mount('#vue-app');
  }, []);

  return (
    <div>
      <h1>Hello from React</h1>
      <hello-angular></hello-angular>  {/* Use the custom element defined by Angular */}
      <div id="vue-app"></div>
    </div>
  );
};

export default App;
