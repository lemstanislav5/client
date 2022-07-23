import React from 'react';

const LayoutLoginPage =({children}) =>{
    return(
        <div className="container">
            <main className="form-signin">{children}</main>
        </div>
    )
}

export default LayoutLoginPage;
