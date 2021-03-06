import React from 'react';
import * as _ from 'lodash';
import FA from 'react-fontawesome';
import ModalErrors from '../alerts/ModalErrors';

const initialState = {
  email: '',
  password: ''
};

const demoUser = {
  email: 'd@d.com',
  password: 'password',
};

class LoginModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.clickSignup = this.clickSignup.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = _.merge({}, this.state);
    this.props.handleSubmit(user);
    if (this.props.loggedIn) {
      this.setState(initialState);
    }
  }
  
  handleChange(fieldName) {
    if (fieldName === 'email') {
      return e => this.setState({ email: e.target.value });
    } else if (fieldName === 'password') {
      return e => this.setState({ password: e.target.value });
    }
  }
  
  handleCloseModal(e) {
    if (e.currentTarget === e.target) {  
      e.stopPropagation();
      this.props.toggleLoginModal();
    }
  }

  clickSignup(e) {
    e.preventDefault();
    this.props.toggleSignupModal();
  }
  
  loginAsGuest(e) {
    e.preventDefault();
    const user = _.merge({}, demoUser);
    this.props.handleSubmit(user);
    this.setState(initialState);
  }
    
  render() {
    if (this.props.display) {
      return (
        <div onClick={ this.handleCloseModal } className='modal-wrapper'>
          <div id='login-modal' className='modal'>
            <div id='modal-close-btn'>
              <button>
                <img onClick={ this.handleCloseModal } src={ window.staticImages.x } />
              </button>
            </div>
            <div className='title-wrapper'>
              <span className="title modal-title">{ this.props.titleText }</span>
            </div>
            { !!this.props.errors && this.props.errors.length > 0 &&
              <ModalErrors errors={ this.props.errors } />
            }
            <div>
              <form onSubmit={ this.handleSubmit }>
                <div className='input-wrapper'>
                  <div className='input-inner-wrapper'>
                    <input type="email"
                      placeholder='Email Address'
                      onChange={ this.handleChange('email') }/>
                  </div>
                  <div className='input-inner-icon'>
                    <FA name='envelope-o' size='2x' />
                  </div>
                </div>
                <div className='input-wrapper'>
                  <div className='input-inner-wrapper'>
                    <input type="password"
                      placeholder='Password'
                      onChange={ this.handleChange('password') }/>
                  </div>
                  <div className='input-inner-icon'>
                    <FA name='lock' size='2x' />
                  </div>
                </div>
                <div className='button-wrapper modal-button-wrapper'>
                  <button className='modal-button submit-button' type="submit">{ this.props.buttonText }</button>
                </div>
                <div id='forgot-password'>
                  <span>Forgot Password?</span>
                </div>
                <div className='divider-wrapper' id='footer-divider'>
                  <span className='divider-fill'></span>
                </div>
                <div id='login-signup'>
                  <span>Don't have an account? </span>
                  <a href="" onClick={ this.clickSignup }>Sign up</a>
                </div>
                <div id='demo-user'>
                  <span>Here for a demo? </span>
                  <a href="" onClick={ this.loginAsGuest }>Login as guest</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      ); 
    } else {
      return (
        <div></div>
      );
    }
  }
  
}

export default LoginModal;