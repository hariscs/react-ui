// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/index';

const App = () => {
  return (
    <div className="flex flex-wrap gap-8 m-4 justify-center">
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click here
      </Button>
      <Button variant="secondary" onClick={() => console.log('clicked')}>
        Click here
      </Button>
      <Button variant="danger" onClick={() => console.log('clicked')}>
        Click here
      </Button>
      <Button variant="warning" onClick={() => console.log('clicked')}>
        Click here
      </Button>
      <Button variant="success" onClick={() => console.log('clicked')}>
        Click here
      </Button>
      <Button variant="info" onClick={() => console.log('clicked')}>
        Click here
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
