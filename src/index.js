import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './Config/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/service';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
}
