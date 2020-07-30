import './index.less';
import AuthenticationStore from '../../stores/authenticationStore';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect';
import { Col, Dropdown, Badge, Avatar, Menu, Icon } from 'antd';
import { L } from '../../lib/abpUtility';
import profilePicture from '../../images/user.png';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import categoryservice from '../../services/category/categoryservice';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { getAllCategoryOutput } from '../../services/category/dto/getAllCategoryOutput';
const userDropdownMenu = (
  <Menu>
    <Menu.Item key="2">
      <Link to="/logout">
        <Icon type="logout" />
        <span> {L('Logout')}</span>
      </Link>
    </Menu.Item>
  </Menu>
);
export interface ILoginProps {
  authenticationStore?: AuthenticationStore;
}
@inject(Stores.AuthenticationStore)
@observer
class AppOtoHeader extends React.Component<ILoginProps> {
  categories!: PagedResultDto<getAllCategoryOutput>;
  componentDidMount() {
    this.getAll();
  }
  getAll() {
    categoryservice.getAll({ maxResultCount: 255, skipCount: 0, keyword: '' }).then((data) => this.setState((this.categories = data)));
  }
  public render() {
    return (
      <header className="header mb-5">
        <div id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offer mb-3 mb-lg-0">
                <a href="#" className="btn btn-success btn-sm">
                  Offer of the day
                </a>
                <a href="#" className="ml-1">
                  Get flat 35% off on orders over $50!
                </a>
              </div>
              <div className="col-lg-6 text-center text-lg-right">
                <ul className="menu list-inline mb-0">
                  {this.props.authenticationStore?.isAuthenticated ? (
                    <Col>
                      <LanguageSelect /> {'   '}
                      <Dropdown overlay={userDropdownMenu} trigger={['click']}>
                        <Badge style={{}} count={3}>
                          <Avatar style={{ height: 24, width: 24 }} shape="circle" alt={'profile'} src={profilePicture} />
                        </Badge>
                      </Dropdown>
                    </Col>
                  ) : (
                    <>
                      <li className="list-inline-item">
                        <Link to="/appoto/customerlogin">Login|Register</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div id="login-modal" role="dialog" aria-labelledby="Login" aria-hidden="true" className="modal fade">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Customer login</h5>
                  <button type="button" data-dismiss="modal" aria-label="Close" className="close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="customer-orders.html" method="post">
                    <div className="form-group">
                      <input id="email-modal" type="text" placeholder="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <input id="password-modal" type="password" placeholder="password" className="form-control" />
                    </div>
                    <p className="text-center">
                      <button className="btn btn-primary">
                        <i className="fa fa-sign-in"></i> Log in
                      </button>
                    </p>
                  </form>
                  <p className="text-center text-muted">Not registered yet?</p>
                  <p className="text-center text-muted">
                    <a href="register.html">
                      <strong>Register now</strong>
                    </a>
                    ! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="index.html" className="navbar-brand home">
              <img src="img/logo.png" alt="Obaju logo" className="d-none d-md-inline-block" />
              <img src="img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none" />
              <span className="sr-only">Obaju - go to homepage</span>
            </a>
            <div className="navbar-buttons">
              <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler">
                <span className="sr-only">Toggle navigation</span>
                <i className="fa fa-align-justify"></i>
              </button>
              <button type="button" data-toggle="collapse" data-target="#search" className="btn btn-outline-secondary navbar-toggler">
                <span className="sr-only">Toggle search</span>
                <i className="fa fa-search"></i>
              </button>
              <a href="basket.html" className="btn btn-outline-secondary navbar-toggler">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
            <div id="navigation" className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/appoto/home" className="nav-link">
                    Home
                  </Link>
                </li>
                {this.categories
                  ? this.categories?.items.map((item) => (
                      <li className="nav-item" key={item.id}>
                        <Link className="nav-link" to="/appoto/products">
                          {item.name}
                        </Link>
                      </li>
                    ))
                  : () => ''}
              </ul>
              <div className="navbar-buttons d-flex justify-content-end">
                <div id="search-not-mobile" className="navbar-collapse collapse"></div>
                <a data-toggle="collapse" href="#search" className="btn navbar-btn btn-primary d-none d-lg-inline-block">
                  <span className="sr-only">Toggle search</span>
                  <i className="fa fa-search"></i>
                </a>
                <div id="basket-overview" className="navbar-collapse collapse d-none d-lg-block">
                  <a href="basket.html" className="btn btn-primary navbar-btn">
                    <i className="fa fa-shopping-cart"></i>
                    <span>3 items in cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div id="search" className="collapse">
          <div className="container">
            <form role="search" className="ml-auto">
              <div className="input-group">
                <input type="text" placeholder="Search" className="form-control" />
                <div className="input-group-append">
                  <button type="button" className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default AppOtoHeader;
