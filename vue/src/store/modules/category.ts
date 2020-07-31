import ListModule from "./list-module";
import Category from "../entities/category";
import ListState from "./list-state";
import { ActionContext } from "vuex";
import Ajax from '../../lib/ajax'
import PageResult from "../entities/page-result";
interface CategoryState extends  ListState<Category>{    
}
class CategoryModule extends ListModule<CategoryState,any,Category>{
    state={        
        totalCount:0,
        currentPage:1,
        pageSize:10,
        list: new Array<Category>(),
        loading:false,
    }
    actions={
        async getAll(context:ActionContext<CategoryState,any>,payload:any){
            context.state.loading=true;
            let reponse=await Ajax.get('/api/services/app/CategoryService/GetAll',{params:payload.data});
            context.state.loading=false;
            let page=reponse.data.result as PageResult<Category>;
            context.state.totalCount=page.totalCount;
            context.state.list=page.items;            
        },
    }
}
const categoryModule=new CategoryModule();
export default categoryModule;