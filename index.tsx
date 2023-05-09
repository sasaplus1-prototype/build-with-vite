import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

function Hello() {
  return (
    <React.Fragment>
      <div>Hello World</div>
    </React.Fragment>
  );
}

const domRoot = document.getElementById('js-root');

if (domRoot) {
  const root = ReactDOM.createRoot(domRoot);

  root.render(<Hello />);
}
