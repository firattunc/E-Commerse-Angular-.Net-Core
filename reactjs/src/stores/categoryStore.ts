import { action, observable } from 'mobx';

import { PagedResultDto } from '../services/dto/pagedResultDto';
import { getAllCategoryOutput } from '../services/category/dto/getAllCategoryOutput';
import categoryservice from '../services/category/categoryservice';
import { PagedCategoryResultRequestDto } from '../services/category/dto/PagedCategoryResultRequestDto';

class CategoryStore {
  @observable categories!: PagedResultDto<getAllCategoryOutput>;    

  @action
  async getAll(pagedFilterAndSortedRequest: PagedCategoryResultRequestDto) {
    let result = await categoryservice.getAll(pagedFilterAndSortedRequest);
    this.categories = result;
  }
}

export default CategoryStore;
