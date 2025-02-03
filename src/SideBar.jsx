import React from 'react';
import Post from './Post'

function SideBar() {
    return (
        <div className='container' style={{display:'flex',flexDirection:'row',}}>
            <div className='row'>
            <div className='SideBar'>


                <div className='col-span-3'>
                    <h1 className='SideBar-title'>Explore</h1>
                    <h1 className='SideBar-title'>About</h1>
                    <h1 className='SideBar-title'>Contact</h1>
                    <h1 className='SideBar-title'>Support</h1>
                    <h1 className='SideBar-title'>Messages</h1>
                    <h1 className='SideBar-title'>Logout</h1>
                    <h1 className='SideBar-title'>Notifications</h1>
                    <h1 className='SideBar-title'>Communities</h1>
                    <h1 className='SideBar-title'>Profile</h1>
                </div>

            </div>
          
                
              
                
         
            </div>
        </div>
    )
}

export default SideBar;