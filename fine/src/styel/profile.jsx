
import { Card } from 'antd';
import officerImage from '../assets/4.jpg.jpeg'
import '../styel/dashboard.css';




function Profile(){
    return(

      
    <div>
        <div className='profdiv'>
      <Card className="profcard" >
          <div className="profcard-inne">
          <p>Officer Profile</p>
          </div>
        </Card >
      </div>
      <div className='officerimgdtls'>
        <Card className='officerpic'>
        <img className='officeridimg' src={officerImage} alt="officer Image" />
        </Card>
        <Card className='officerdtls'>
          <div className='dtilsoff'>
            
            <div className='styl3'>

            <div className='styl1'>
              <p> <span className='bold'> Officer ID No: </span> 2456889 </p>
              <p> <span className='bold'>Name with initials:</span> A B C D Ekanayake</p>
              <p> <span className='bold'>Age: </span>45yr</p>
              <p> <span className='bold'> Gender</span>: Male</p>
            </div>

            <div className='styl2'>
            <p><span className='bold'>Recent Officer Rank:</span> Police Sergeant class 1</p>
            <p><span className='bold'>Devision: </span>Homagama</p>
            <p><span className='bold'>Main Service Area:</span> Pitipana North, Homagama</p>
            <p><span className='bold'>Home Address:</span> NO.26, High Level Rd, Pitipana</p>
            </div>
            </div>
           

           

          </div>

                  </Card>

      </div>
    </div>
      
        


    );
}
export default Profile;