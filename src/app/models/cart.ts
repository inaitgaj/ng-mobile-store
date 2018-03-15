import {Entry} from './entry';
export class Cart {
  constructor(
      // public cartId = 0,
      public entries : Entry[],
      public user : string = "",
      public total : number = 0,
      public createdTs : Date = new Date
     ) {
     }
}
