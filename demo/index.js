import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import VkLogin from '../src/vk-button';

const responseVk = (response) => {
  console.log(response);
};

class Base extends Component {
  render() {
    return (
      <div>
        <Link to="/dummy">Route to dummy page</Link>
        <VkLogin
          apiId="5376167"
          callback={responseVk}
        >1111</VkLogin>
      </div>
    );
  }
}

class Dummy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>
          This is just a dummy page to test the button<br />
          <a href="https://github.com/keppelen/react-facebook-login/pull/76#issuecomment-262098946">
            survives back and forth routing
          </a>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Base}/>
    <Route path="/dummy" component={Dummy}/>
  </Router>,
  document.getElementById('demo')
);
