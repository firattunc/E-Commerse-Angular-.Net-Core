import http from '../httpService';
import { PagedResultDto } from '../dto/pagedResultDto';
import { PagedProductResultRequestDto } from './dto/PagedProductResultRequestDto';
import { GetAllProductOutput } from './dto/getAllProductOutput';

class ProductService {    
    public async getAll(pagedFilterAndSortedRequest: PagedProductResultRequestDto): Promise<PagedResultDto<GetAllProductOutput>> {
        let result = await http.get('api/services/app/ProductService/GetAll', { params: pagedFilterAndSortedRequest });        
        return result.data.result;
    }
}

export default new ProductService();