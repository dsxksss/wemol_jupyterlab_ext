import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ILayoutRestorer } from '@jupyterlab/application';
import { createMyApp } from '../src/wemol_jupyterlab_ext_ui/dist/wemol_jupyterlab_ext_ui.umd.cjs';
import '../src/wemol_jupyterlab_ext_ui/dist/style.css';
import '../src/wemol_jupyterlab_ext_ui/dist/vite.svg';
import { Widget } from '@lumino/widgets';

declare global {
  interface Window {
    wemol_jupyterlab_ext_ui: any;
  }
}
class MyAppWidget extends Widget {
  constructor() {
    super();
    this.id = 'wemol_jupyterlab_ext_ui';
    this.title.label = 'Jobs';
    this.title.closable = true;
  }

  onAfterAttach() {
    this.node.innerHTML = '<div id="app"></div>';
    // Assuming your Vue app is exposed as a function `createApp`
    createMyApp({ el: '#app' });
  }
}

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'wemol_jupyterlab_ext:plugin',
  autoStart: true,
  description: 'A JupyterLab extension for wemol.',
  requires: [ILayoutRestorer],
  activate: (app: JupyterFrontEnd, restorer: ILayoutRestorer) => {
    let widget = new MyAppWidget();
    restorer.add(widget, 'wemol_jupyterlab_ext_ui');
    app.shell.add(widget, 'left');

    console.log('wemol_jupyterlab_ext is activated test vue!');
  }
};

export default plugin;
