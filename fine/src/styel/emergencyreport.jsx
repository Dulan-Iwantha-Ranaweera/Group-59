import '../styel/dashboard.css';
import { Card, Divider } from 'antd';



function emergencyreport(){
    return(
<div>

<div className='emerdiv'>
<Card className="emercard" >
    <div className="emercard-inner">
        <p>Emergency Report</p>
</div>
    
</Card >
</div>



<div className='hotlinesdiv'>
  <Card className='hotlinecard'>
  <div className='no'> 
  <p>
  Police Emergency Hotline
    </p>
    <p>
    118 / 119
    </p>
  </div>
    <Divider />
  <div className='no'> 
  <p>
  Emergency Police Mobile Squad
    </p>
    <p>
    011-5717171
    </p>
  </div>
    <Divider />
  <div className='no'> 
  <p>
  Police Emergency
    </p>
    <p>
    011-2433333
    </p>
  </div>
    <Divider />
  <div className='no'> 
  <p>
  Report Crimes
    </p>
    <p>
    011-2691500
    </p>
  </div>
    <Divider />
  <div className='no'> 
  <p>
  Fire & Ambulance Service
    </p>
    <p>
    011-2422222
    </p>
  </div>
    <Divider />
  <div className='no'> 
  <p>
  Ambulance / Fire & rescue
    </p>
    <p>
    110
    </p>
  </div>
    <Divider />
    

  </Card>    

</div>



</div>
    );
}
export default emergencyreport;