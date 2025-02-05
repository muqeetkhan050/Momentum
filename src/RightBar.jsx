import react from 'react';

function RightBar(){
    return (
        <div className='container'>
            <div className='row' style={{display:'flex', flexDirection:'column',justifyContent:'right',alignItems:'right',backgroundColor:'0A1931', width:'fit-content',marginLeft:'1200px',marginTop:'-500px',padding:'10px'}}>
                <h1 style={{color:'white',padding:'10px'}}>Premium </h1>
                <h2 style={{color:'white',padding:'10px'}}>Communities</h2>
                <h2 style={{color:'white',padding:'10px'}}>Features</h2>
                <h2 style={{color:'white',padding:'10px'}}>Look around</h2>
                
            </div>
        </div>

    )


}

export default RightBar;