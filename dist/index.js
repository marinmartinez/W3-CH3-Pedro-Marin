import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { PetList } from './components/petlist.js';
import { PETS } from './models/data.js';
console.log('Loaded index');
console.log(PETS);
new Header('body');
new Main('body');
new PetList('main');
new Footer('body');
