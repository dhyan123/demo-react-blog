import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/index.js';
import NavHeader from './base/NavHeader/NavHeader.js';
import PageFooter from './base/PageFooter/PageFooter.js';
import {Layout} from 'antd';

const {Header, Footer} = Layout;

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension()
  )
);

const style = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  footerBg: {
    backgroundColor: '#001529',
    color: 'rgba(255, 255, 255, 0.65)',
    textAlign: 'center',
    cursor: 'default'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout style={style.container}>
            <Header>
              <NavHeader></NavHeader>
            </Header>
            <div style={{flex: 1}}>
              
            </div>
            <Footer style={style.footerBg}>
              <PageFooter/>
            </Footer>
          </Layout>
        </Router>
      </Provider>
    );
  }

}

export default App;