import { makeInstaller } from '@en-element/utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import components from './components';
import '@en-element/theme/index.css';

library.add(fas);
const installer = makeInstaller(components);
export * from '@en-element/components';
export default installer;
