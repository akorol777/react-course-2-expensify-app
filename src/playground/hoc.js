// Higher Order Component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>There info is: {props.info}</p>
  </div>
);

const widthAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

const requireAuthenticated = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated
          ? <WrappedComponent {...props}/>
          : 'Fuck off'
      }
    </div>
  )
};

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuthenticated(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));