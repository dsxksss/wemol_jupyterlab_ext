import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the wemol_jupyterlab_ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'wemol_jupyterlab_ext:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension wemol_jupyterlab_ext is activated!');
  }
};

export default plugin;
