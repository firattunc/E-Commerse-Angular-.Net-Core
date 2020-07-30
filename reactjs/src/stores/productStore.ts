import { action, observable } from 'mobx';

import productService from '../services/product/productService';
import { GetAllProductOutput } from '../services/product/dto/getAllProductOutput';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { PagedProductResultRequestDto } from '../services/product/dto/PagedProductResultRequestDto';

class ProductStore {
  @observable products!: PagedResultDto<GetAllProductOutput>;

  @action
  async getAll(pagedFilterAndSortedRequest: PagedProductResultRequestDto,isSorted:boolean) {    
    let result= await (await productService.getAll(pagedFilterAndSortedRequest));   
    if(isSorted)
    result.items.sort((a, b) => a.price > b.price ? 1 : -1);     

    this.products = result;
  }
}

export default ProductStore;
