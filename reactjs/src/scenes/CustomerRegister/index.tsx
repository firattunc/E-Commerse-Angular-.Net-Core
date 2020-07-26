import * as React from 'react';

import { Form, Icon, Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';

import AccountStore from '../../stores/accountStore';
import AuthenticationStore from '../../stores/authenticationStore';
import { FormComponentProps } from 'antd/lib/form';
import { L } from '../../lib/abpUtility';
import {  Link } from 'react-router-dom';
import SessionStore from '../../stores/sessionStore';
import Stores from '../../stores/storeIdentifier';
import rules from './index.validation';
import UserStore from '../../stores/userStore';
import AppComponentBase from '../../components/AppComponentBase';
import userService from '../../services/user/userService';
import LoginModel from '../../models/Login/loginModel';

export interface IUserProps {
  userStore: UserStore;
}

export interface IUserState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  userId: number;
  filter: string;
}
const FormItem = Form.Item;
declare var abp: any;

export interface ILoginProps extends FormComponentProps {
  authenticationStore?: AuthenticationStore;
  sessionStore?: SessionStore;
  accountStore?: AccountStore;
  history: any;
  location: any;
}

@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore, Stores.UserStore)
@observer
class CustomerRegister extends AppComponentBase<ILoginProps> {
    formRef:any;
    handleSubmit = async (e: any) => {
      e.preventDefault();      
      const { loginModel } = this.props.authenticationStore!;
      const registeredUser=new LoginModel()
      await this.props.form.validateFields(async (err: any, values: any) => {
        if (!err) {          
           userService.create(values).finally(async ()=> {
           registeredUser.userNameOrEmailAddress=values.userName
           registeredUser.password=values.password
           registeredUser.rememberMe=false
           registeredUser.tenancyName="Default"
           await this.props.authenticationStore!.login(registeredUser);
           sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
           const { state } = this.props.location;
           window.location = state ? state.from.pathname : '/';})    
         
        }
      });
    };
  public render() {    
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
                  New Account
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6">
            <div className="box">
              <h1>New account</h1>
              <p className="lead">Not our registered customer yet?</p>
              <p>
                With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you
                more than a minute!
              </p>
              <p className="text-muted">
                If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you
                24/7.
              </p>
              <hr />
              <Form className="" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <FormItem>
                    {getFieldDecorator('name', { rules: rules.name })(
                      <Input placeholder={'Name'} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" />
                    )}
                  </FormItem>
                </div>
                <div className="form-group">
                  <FormItem>
                    {getFieldDecorator('surname', { rules: rules.surname })(
                      <Input placeholder={'SurName'} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" />
                    )}
                  </FormItem>
                </div>
                <div className="form-group">
                  <FormItem>
                    {getFieldDecorator('emailAddress', { rules: rules.emailAddress })(
                      <Input placeholder='Email' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" />
                    )}
                  </FormItem>
                </div>
                <div className="form-group">
                  <FormItem>
                    {getFieldDecorator('userName', { rules: rules.userName })(
                      <Input placeholder='UserName' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" />
                    )}
                  </FormItem>
                </div>
                <div className="form-group">
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
                    {L('Register')}
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

export default Form.create()(CustomerRegister);
