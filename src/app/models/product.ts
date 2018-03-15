export class Product {
  constructor(
      public productId = 0,
      public name = "",
      public brand = "",
      public screen = "",
      public camera = "",
      public ois = "",
      public os = "",
      public description = "",
      public images: string[] = [],
      public price = "",
      public currency = "",
      public stock = 0
     ) {
     }
}
