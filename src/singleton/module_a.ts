import { MyDatabaseClassic } from './database/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Vyctor', age: 27 });
myDatabaseClassic.add({ name: 'Nani', age: 22 });
myDatabaseClassic.add({ name: 'Sueli', age: 90 });
myDatabaseClassic.add({ name: 'Bolinas', age: 31 });

export { myDatabaseClassic };
