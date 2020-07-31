import ListModule from "./list-module";
import ListState from "./list-state";
import { ActionContext } from "vuex";
import Ajax from '../../lib/ajax'
import PageResult from "../entities/page-result";
import Product from "../entities/product";
interface ProductState extends  ListState<Product>{    
    isSorted:boolean,
    maxResultCount:number,
}
class ProductModule extends ListModule<ProductState,any,Product>{
    state={        
        totalCount:0,
        currentPage:1,
        pageSize:10,
        list: new Array<Product>(),
        loading:false,
        isSorted:false,
        maxResultCount:1
    }
    actions={
        async getAll(context:ActionContext<ProductState,any>,payload:any){
            context.state.loading=true;
            let reponse=await Ajax.get('/api/services/app/ProductService/GetAll',{params:payload.data});
            context.state.loading=false;
            let page=reponse.data.result as PageResult<Product>;
            context.state.totalCount=page.totalCount;

            if(context.state.isSorted)
            page.items=page.items.sort((a, b) => a.price > b.price ? 1 : -1);   

            context.state.list=page.items.slice(0,context.state.maxResultCount);            
        },
    }
    mutations={
        setCurrentPage(state:ProductState,page:number){
            state.currentPage=page;
        },
        setPageSize(state:ProductState,pagesize:number){
            state.pageSize=pagesize;
        },
        setSort(state:ProductState){
            state.isSorted=!state.isSorted;
        },
        setMaxResultCount(state:ProductState,maxResultCount:number){
            state.maxResultCount=maxResultCount;
        },
        
    }
}
const productModule=new ProductModule();
export default productModule;