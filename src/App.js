import React, { Component } from 'react';
import Validator from './utils/validator';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      subject: '',
      message: '',
      errors: {},
    };
    const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;
    const rules = [
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'The name field is required.',
      },
      {
        field: 'name',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'The name must be at least 5 characters.',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'The email field is required.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'The email must be a valid email address.',
      },
      {
        field: 'address',
        method: 'isEmpty',
        validWhen: false,
        message: 'The address field is required.',
      },
      {
        field: 'message',
        method: requiredWith,
        args: ['subject'],
        validWhen: true,
        message: 'The message field is required when subject is present.',
      },
    ];
    this.validator = new Validator(rules);
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    console.log(this.state);
  };

  hiddenBox = (e) => {
    document.getElementsByClassName('App').style.visibility= "none"
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='container'>
          <div className="navBar">
            <a href='https://istech.vn/'><img src='https://istech.vn/wp-content/uploads/2021/08/cropped-istech-logo-black-transparent-1-1-2.png'/></a>
          </div>
          <div className='apply'>
            <h1 className='text'>ĐĂNG KÝ THÀNH VIÊN GEN 4 - ISTECH</h1>
          </div>
          <button className='btn1' onClick={function() {
                document.getElementById("1").classList.remove("hiddenbox");
                }}>Tham gia ngay</button>

      <div id='1' className="App hiddenbox">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
        <form>
          <h1>ỨNG TUYỂN VÀO ISTECH</h1>
          <div className="contentform">
            <div id="sendmessage"> Thông tin của bạn đã được lưu </div>
            <div className="leftcontact">
              <div className="form-group">
                <p>Họ và tên<span>*</span></p>
                <span className="icon-case"><i className="fa fa-user"></i></span>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                {errors.name && <div className="validation" style={{display: 'block'}}>{errors.name}</div>}
              </div>
              <div className="form-group">
                <p>E-mail <span>*</span></p>
                <span className="icon-case"><i className="fa fa-envelope-o"></i></span>
                <input type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
                {errors.email && <div className="validation" style={{display: 'block'}}>{errors.email}</div>}
              </div>
              <div className="form-group">
                <p>Số điện thoại<span>*</span></p>
                <span className="icon-case"><i className="fa fa-phone"></i></span>
                <input type="text" name="address" value={this.state.address} onChange={this.handleInput}/>
                {errors.address && <div className="validation" style={{display: 'block'}}>{errors.address}</div>}
              </div>
            </div>

          </div>
          <button type="button" className="bouton-contact" onClick={console.log("hello")}>Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
