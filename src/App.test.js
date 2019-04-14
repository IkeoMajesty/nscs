import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {

  const result = buildDependencies(args)
  expect(result.status).to.equal(0);

  

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
