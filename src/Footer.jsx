import react from 'react';

function Footer(){
    return(
        <div className='container'>
            <div className='row' style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'left',backgroundColor:'#0A1931', color:'white', padding:'10px', marginTop:'500px'}}>
               

              <span>
                Contact us on Email : Muqeetkhan050@gmail.com
              </span>
         
             
                <span style={{marginLeft:'100px'}}>This is our linkedin</span>
                <a href='https://www.linkedin.com/in/muhammadmuqeetkhan/' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-linkedin' style={{marginLeft:'10px', color:'white', fontSize:'20px'}}>Linkedin</i>
                </a>
               
               

            </div>


        </div>
    )
}

export default Footer;