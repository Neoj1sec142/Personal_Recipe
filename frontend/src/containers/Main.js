import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {load_recipies} from '../store/actions/recipie'
const Main = ({load_recipies, recipies}) => {
    useEffect(() => {
        load_recipies()
    },[])
    console.log(recipies, "RECIPIES")
    return(
        <div className='container-fluid'>
            <div className='row mt-3 sqh text-center'>
                <div className='col card'>
                    <h7>User Profile Info</h7>
                </div>
                <div className='col card'>
                    <h7>Recipie Count & Follower Count</h7>
                </div>
                <div className='col card'>
                    <h7>Follow Button Messaeg Button</h7>
                </div>
            </div>
            <hr className='divider sqh' />
            <div className='row sqh'>
                <div className='card text-center'>
                    <h3 className='card-header'>Recipies in this Kitchen:</h3>
                    <div className='card ovo'>
                        Recipies Mapped
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    recipies: state.recipie.recipies
})

export default connect(mapStateToProps, {load_recipies})(Main)