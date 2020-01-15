import React from 'react';
import PropTypes from 'prop-types';

class vkLogin extends React.Component {
  static propTypes = {
    isDisabled: PropTypes.bool,
    callback: PropTypes.func.isRequired,
    apiId: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    render: PropTypes.func.isRequired,
  };

  state = {
    isSdkLoaded: false,
    isProcessing: false,
  };

  componentDidMount() {
    if (document.getElementById('vk-jssdk')) {
      this.sdkLoaded();
      return;
    }
    this.setVkAsyncInit();
    this.loadSdkAsynchronously();
  }

  setVkAsyncInit() {
    const { apiId } = this.props;
    window.vkAsyncInit = () => {
      window.VK.init({ apiId });
      this.setState({ isSdkLoaded: true });
    };
  }

  sdkLoaded() {
    this.setState({ isSdkLoaded: true });
  }

  loadSdkAsynchronously() {
    const el = document.createElement('script');
    el.type = 'text/javascript';
    el.src = 'https://vk.com/js/api/openapi.js?163';
    el.async = true;
    el.id = 'vk-jssdk';
    document.getElementsByTagName('head')[0].appendChild(el);
  }

  checkLoginState = response => {
    this.setState({ isProcessing: false });

    if (this.props.callback) {
      this.props.callback(response);
    }
  };

  click = () => {
    if (
      !this.state.isSdkLoaded ||
      this.state.isProcessing ||
      this.props.isDisabled
    ) {
      return;
    }
    this.setState({ isProcessing: true });
    window.VK.Auth.login(this.checkLoginState);
  };

  render() {
    const { render } = this.props;

    if (!render) {
      throw new Error('ReactVkontakteLogin requires a render prop to render');
    }

    const propsForRender = {
      onClick: this.click,
      isDisabled: !!this.props.isDisabled,
      isProcessing: this.state.isProcessing,
      isSdkLoaded: this.state.isSdkLoaded,
    };
    return this.props.render(propsForRender);
  }
}

export default vkLogin;
