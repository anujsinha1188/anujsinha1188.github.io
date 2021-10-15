// Product model
export class Product {
    constructor(public productId: number,
        public productName: string,
        public productCode: string,
        public price: number,
        public description: string,
        public rating:number,
        public imageUrl: string, public manufacturer: string) {
    }
}
