//import { InMemoryDbService } from 'angular-in-memory-web-api';
import { posInField } from './player';
//export class InMemoryDataService implements InMemoryDbService {
  export class InMemoryDataService {
  createDb() {
    let players = [
        { id: 1, name: 'K. Navas', position: posInField.PT },
        { id: 2, name: 'S. Ramos', position: posInField.DF },
        { id: 3, name: 'Modric', position: posInField.MC },
        { id: 4, name: 'Bale', position: posInField.DC },
        { id: 5, name: 'D. López', position: posInField.PT },
        { id: 6, name: 'Piqué', position: posInField.DF },
        { id: 7, name: 'Iniesta', position: posInField.MC },
        { id: 8, name: 'Messi', position: posInField.DC },
        { id: 9, name: 'N. Pareja', position: posInField.DF },
        { id: 10, name: 'Vitolo', position: posInField.MC },
        { id: 11, name: 'C. Vela', position: posInField.DC },
        { id: 12, name: 'Victor R.', position: posInField.DF },
        { id: 13, name: 'J. Viera', position: posInField.MC },
        { id: 14, name: 'Aduriz', position: posInField.DC }
    ];
    return {players};
  }
}