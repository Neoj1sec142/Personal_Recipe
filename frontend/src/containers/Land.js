import React from 'react'

const Land = () => {
    return(
        <div className='container d-flex jusitify-content-center'>
            <div className='card col-md-5 col-sm-12 mt-5 p-3'>
                <h1 className='card-title'>Welcome to the Recipe Book</h1>
                <p className='card-text text-muted'>Login to your account!</p>
                <a className='btn btn-primary' href='/login'>Login</a>
                <p className='card-text'>Don't have an account? <a href='/register'>CLICK HERE</a> to register for an account.</p>
            </div>
        </div>
    )
}
export default Land