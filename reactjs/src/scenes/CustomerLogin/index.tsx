import * as React from 'react';

import { Form, Icon, Input, Modal, Button } from 'antd';
import { inject, observer } from 'mobx-react';

import AccountStore from '../../stores/accountStore';
import AuthenticationStore from '../../stores/authenticationStore';
import { FormComponentProps } from 'antd/lib/form';
import { L } from '../../lib/abpUtility';
import { Redirect, Link } from 'react-router-dom';
import SessionStore from '../../stores/sessionStore';
import Stores from '../../stores/storeIdentifier';
import TenantAvailabilityState from '../../services/account/dto/tenantAvailabilityState';
import rules from './index.validation';
import CustomerRegister from '../CustomerRegister';

const FormItem = Form.Item;
declare var abp: any;

export interface ILoginProps extends FormComponentProps {
  authenticationStore?: AuthenticationStore;
  sessionStore?: SessionStore;
  accountStore?: AccountStore;
  history: any;
  location: any;
}

@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class CustomerLogin extends React.Component<ILoginProps> {
  changeTenant = async () => {
    let tenancyName = this.props.form.getFieldValue('tenancyName');
    const { loginModel } = this.props.authenticationStore!;

    if (!tenancyName) {
      abp.multiTenancy.setTenantIdCookie(undefined);
      window.location.href = '/';
      return;
    } else {
      await this.props.accountStore!.isTenantAvailable(tenancyName);
      const { tenant } = this.props.accountStore!;
      switch (tenant.state) {
        case TenantAvailabilityState.Available:
          abp.multiTenancy.setTenantIdCookie(tenant.tenantId);
          loginModel.tenancyName = tenancyName;
          loginModel.toggleShowModal();
          window.location.href = '/';
          return;
        case TenantAvailabilityState.InActive:
          Modal.error({ title: L('Error'), content: L('TenantIsNotActive') });
          break;
        case TenantAvailabilityState.NotFound:
          Modal.error({ title: L('Error'), content: L('ThereIsNoTenantDefinedWithName{0}', tenancyName) });
          break;
      }
    }
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
    const { loginModel } = this.props.authenticationStore!;
    await this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        await this.props.authenticationStore!.login(values);
        sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : '/';
      }
    });
  };

  handleSubmitRegister = async (e: any) => {
    e.preventDefault();
    const { loginModel } = this.props.authenticationStore!;
    await this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        await this.props.authenticationStore!.login(values);
        sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : '/';
      }
    });
  };
  public render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticationStore!.isAuthenticated) return <Redirect to={from} />;

    const { getFieldDecorator } = this.props.form;
    return (      
      <div className="container">
        <div className="row">
       
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/appoto/home">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Sign in
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6">
        <CustomerRegister/>
        </div>
        <div className="col-lg-6">
          <div className="box">
            <h1>Login</h1>
            <p className="lead">Already our customer?</p>
            <p className="text-muted">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
              ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
              eleifend leo.
            </p>
            <hr />
            <Form className="" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <FormItem>
                  {getFieldDecorator('userNameOrEmailAddress', { rules: rules.userNameOrEmailAddress })(
                    <Input placeholder={L('UserNameOrEmail')} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" />
                  )}
                </FormItem>
              </div>
              <div className="form-group">
                <label>Password</label>
                <FormItem>
                  {getFieldDecorator('password', { rules: rules.password })(
                    <Input
                      placeholder={L('Password')}
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      size="large"
                    />
                  )}
                </FormItem>
              </div>
              <div className="text-center">
                <Button style={{ backgroundColor: '#f5222d', color: 'white' }} htmlType={'submit'} type="danger">
                  {L('LogIn')}
                </Button>
              </div>
            </Form>
          </div>
        </div>
        
        </div>
       
      </div>
         
    );
  }
}

export default Form.create()(CustomerLogin);
