import * as React from 'react';
import './index.less';

function AppOtoFooter () {
  return (
    <>
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Pages</h4>
            <ul className="list-unstyled">
              <li><a href="text.html">About us</a></li>
              <li><a href="text.html">Terms and conditions</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
            <hr/>
            <h4 className="mb-3">User section</h4>
            <ul className="list-unstyled">
              <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
              <li><a href="register.html">Regiter</a></li>
            </ul>
          </div>          
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Top categories</h4>
            <h5>Men</h5>
            <ul className="list-unstyled">
              <li><a href="category.html">T-shirts</a></li>
              <li><a href="category.html">Shirts</a></li>
              <li><a href="category.html">Accessories</a></li>
            </ul>
            <h5>Ladies</h5>
            <ul className="list-unstyled">
              <li><a href="category.html">T-shirts</a></li>
              <li><a href="category.html">Skirts</a></li>
              <li><a href="category.html">Pants</a></li>
              <li><a href="category.html">Accessories</a></li>
            </ul>
          </div>          
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Where to find us</h4>
            <p><strong>Obaju Ltd.</strong><br/>13/25 New Avenue<br/>New Heaven<br/>45Y 73J<br/>England<br/><strong>Great Britain</strong></p><a href="contact.html">Go to contact page</a>
            <hr className="d-block d-md-none"/>
          </div>          
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Get the news</h4>
            <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <hr/>
            <h4 className="mb-3">Stay in touch</h4>
            <p className="social"><a href="#" className="facebook external"><i className="fa fa-facebook"></i></a><a href="#" className="twitter external"><i className="fa fa-twitter"></i></a><a href="#" className="instagram external"><i className="fa fa-instagram"></i></a><a href="#" className="gplus external"><i className="fa fa-google-plus"></i></a><a href="#" className="email external"><i className="fa fa-envelope"></i></a></p>
          </div>          
        </div>        
      </div>      
    </div>
    <div id="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-2 mb-lg-0">
          <p className="text-center text-lg-left">©2019 Your name goes here.</p>
        </div>
        <div className="col-lg-6">
          <p className="text-center text-lg-right">Template design by <a href="https://bootstrapious.com/p/big-bootstrap-tutorial">Bootstrapious</a>           
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}
export default AppOtoFooter;
