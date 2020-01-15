# React Vk Login

> A Component React for Vk Login

## Getting Started

```shell
git clone https://github.com/msklyarov/react-vkontakte-login.git && cd react-vkontakte-login
npm install react react-dom react-vkontakte-login --save --force
```

## Development

```shell
npm start
```

- navigate to [localhost:8080](http://localhost:8080)

## How to use

### Basic

```js
import React from 'react';
import ReactDOM from 'react-dom';
import VkLogin from 'react-vkontakte-login';

const responseVk = response => {
  console.log(response);
};

ReactDOM.render(
  <VkLogin
    apiId="5376167"
    callback={responseVk}
    render={renderProps => (
      <button onClick={renderProps.onClick}>This is my custom VK button</button>
    )}
  />,
  document.getElementById('demo'),
);
```

## Parameters

|     params     |  value   |                    default value                    |
| :------------: | :------: | :-------------------------------------------------: |
|     appId      |  string  |                      Required                       |
|      size      |  string  |               small - medium - metro                |
|     scope      |  string  |        public_profile, email, user_birthday         |
|     fields     |  string  |                 name,email,picture                  |
|    callback    | function |                    resultVkLogin                    |
|    autoLoad    | boolean  |                        false                        |
|     xfbml      | boolean  |                        false                        |
| reAuthenticate | boolean  |                        false                        |
|   textButton   |  string  |                    Login with Vk                    |
|    cssClass    |  string  | kep-login-facebook kep-login-facebook-[button-size] |
|  redirectUri   |  string  |         window.location.href (mobile-only)          |
|    version     |  string  |                         2.3                         |
|      icon      |  string  |                       element                       | none |
|    language    |  string  |                        en_US                        |
|    onClick     | function |           Initial click on the component            |
