import http from '../httpService';
import { getAllCategoryOutput} from './dto/getAllCategoryOutput';
import { PagedCategoryResultRequestDto } from './dto/PagedCategoryResultRequestDto'
import { PagedResultDto } from '../dto/pagedResultDto';

class CategoryService {    
    public async getAll(pagedFilterAndSortedRequest: PagedCategoryResultRequestDto): Promise<PagedResultDto<getAllCategoryOutput>> {
        let result = await http.get('api/services/app/CategoryService/GetAll', { params: pagedFilterAndSortedRequest });        
        return result.data.result;
    }
}

export default new CategoryService();