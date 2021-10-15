import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../product';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    // sorts the products data based on selected option
    transform(value: Product[], args: string): Product[] {
        if (args === 'popularity') {
            return value.sort((a: any, b: any) => {
                if (a.rating > b.rating) {
                    return -1;
                } else if (a.rating < b.rating) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (args === 'pricelh') {
            return value.sort((a: any, b: any) => {
                if (a.price < b.price) {
                    return -1;
                } else if (a.price > b.price) {
                    return 1;
                } else {
                    return 0;
                }
            });

        } else if (args === 'pricehl') {
            return value.sort((a: any, b: any) => {
                if (a.price > b.price) {
                    return -1;
                } else if (a.price < b.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        return value;
    }
}
