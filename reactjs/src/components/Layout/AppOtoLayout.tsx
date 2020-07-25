import './AppOtoLayout.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/css/style.default.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';
import * as React from 'react';
import AppOtoHeader from '../AppOtoHeader';
import AppOtoFooter from '../AppOtoFooter';
import { Switch, Redirect, Route } from 'react-router-dom';
import { appOtoRouter } from '../Router/router.config';

// import utils from '../../utils/utils';
// import LanguageSelect from '../LanguageSelect';

// import DocumentTitle from 'react-document-title';

function AppOtoLayout() {
  return (
      <>
      <AppOtoHeader />
      <div id="all">
        <div id="content">
        <Switch>
        
        {appOtoRouter
          .filter((item: any) => !item.isLayout)
          .map((item: any, index: number) => (
            <Route key={index} path={item.path} component={item.component} exact={item.exact} />
          ))}

        <Redirect from="/app" to="/app/home" />
      </Switch>
        </div>
      </div>  
     
      <AppOtoFooter />
    </>
  );
}

export default AppOtoLayout;
