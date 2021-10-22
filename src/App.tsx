import * as React from 'react';
import HeaderMsg from './components/header/header-message';
import Header from './components/header/header';
import Form from './components/form/index';
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div style={{
      borderTop: '10px solid #FFCB3D',
    }}>
        <Header />
        <HeaderMsg />
        <Form />
    </div>
  )
};

export default App;
