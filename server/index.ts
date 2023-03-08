import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { MuleJob } from './src/job';

const PLUGIN_NAME = 'Mule Job';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
    MuleJob.init();
});
