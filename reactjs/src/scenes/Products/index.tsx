import React from 'react';
import Product from './components/product';
import ProductStore from '../../stores/productStore';
import { FormComponentProps } from 'antd/lib/form';
import AppComponentBase from '../../components/AppComponentBase';
import { observer, inject } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
export interface IProductProps extends FormComponentProps {
  productStore: ProductStore;
}

export interface IProductState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  productId: number;
  filter: string;
  isSorted:boolean;
}
@inject(Stores.ProductStore)
@observer
class Products extends AppComponentBase<IProductProps, IProductState> {
  state = {
    modalVisible: false,
    maxResultCount: 1,
    skipCount: 0,
    productId: 0,
    filter: '',
    isSorted:false,
  };
  async componentDidMount() {
    await this.getAll();
  }
  SortByPrice=()=>{
    this.setState({isSorted:!this.state.isSorted},async ()=>await this.getAll());
  }
  handleShowChange = (e: any) => {
    this.setState({ maxResultCount: e }, async () => await this.getAll());
  };
  async getAll() {
    await this.props.productStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter },this.state.isSorted);
  }
  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box info-bar">
              <div className="row">
                <div className="col-md-12 col-lg-4 products-showing">
    Showing <strong>{this.state.maxResultCount}</strong> of <strong>{this.props.productStore.products?.totalCount}</strong> products
                </div>
                <div className="col-md-12 col-lg-7 products-number-sort">
                  <div className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                  <div className="products-number">
                    <strong>Show</strong>
                    <button onClick={() => this.handleShowChange(1)} className="btn btn-outline-secondary btn-sm">
                      1
                    </button>
                    <button onClick={() => this.handleShowChange(2)} className="btn btn-outline-secondary btn-sm">
                      2
                    </button>
                    <button onClick={() => this.handleShowChange(this.props.productStore.products.totalCount)} className="btn btn-outline-secondary btn-sm">
                      All
                    </button>
                    <span>products</span>
                  </div>
                  <div className="products-sort-by mt-2 mt-lg-0">  
                  <span>Sort By Price </span>   
                  {
                    !this.state.isSorted?(
                    <button onClick={this.SortByPrice} className="btn btn-primary">
                      Sort
                    </button>
                    ):(
                      <button onClick={this.SortByPrice} className="btn btn-danger">
                      Remove Filter
                    </button>
                    )
                  }               
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row products">
              {this.props.productStore.products?.items.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <Product name={item.name} price={item.price} imgUrl={item.imgUrl} />
                </div>
              ))}

              {/* <div className="pages">
                <p className="loadMore">
                  <a href="#" className="btn btn-primary btn-lg">
                    <i className="fa fa-chevron-down"></i> Load more
                  </a>
                </p>
                <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" aria-label="Previous" className="page-link">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" aria-label="Next" className="page-link">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
