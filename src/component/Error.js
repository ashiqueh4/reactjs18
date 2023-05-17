import React from 'react'
import Header from './Header';
const Error = () => {
    return (
        <>
     <Header/>
      <div id="error_page">
        <h1>404</h1>
        <p>Not Found</p>
        <p>
        The resource requested could not be found on this server!
        </p>
      </div>
      </>
    );
}

export default Error