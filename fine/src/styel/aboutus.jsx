/* eslint-disable react/no-unescaped-entities */
import '../styel/dashboard.css';
import policelogo from '../assets/7.jpg.jpeg';
import plymouthlogo from '../assets/8.jpg.jpg';
import { Card, Divider } from 'antd';

function Aboutus(){

return(
<div >

<div className='emerdiv'>
<Card className="emercard" >
    <div className="emercard-inner">
        <p>About Us</p>
</div>
    
</Card >
</div>

<div className='plc'>
<div className='aboutplc'>

<Divider orientation="left">Sri Lankan Police (Traffic Devision)</Divider>
<p>The Sri Lankan traffic police play a pivotal role in ensuring road safety and regulating 
    traffic flow across the island nation. Committed to upholding the law and safeguarding citizens, 
    these dedicated officers enforce traffic regulations with diligence and fairness. With a focus on maintaining
     order amidst the bustling streets of cities like Colombo and Kandy, they exhibit professionalism and integrity in 
     their duties. From managing intersections to conducting roadside checks for licenses and vehicle registrations,
      the Sri Lankan traffic police work tirelessly to minimize accidents and promote responsible driving behavior. 
      Their presence serves as a reassuring beacon for commuters and visitors alike, contributing significantly to 
      the overall harmony and efficiency of Sri Lanka's transportation network.</p>
</div>
<div className='policeimg'>
<img className='officeridimg' src={policelogo} alt="policel logo" />
</div>

</div>


<div className='plc'>
<div className='policeimg'>
<img className='officeridimg' src={plymouthlogo} alt="plymouth logo" />
</div>
<div className='aboutplc'>
<Divider orientation="left">Developers  (Plymouth University(UK)) </Divider>
<p>
As students of Plymouth University, we embark on the development
 of a web application designed to tackle the complex issue of managing traffic fines in Sri Lanka. 
 Our team, comprising individuals with diverse academic backgrounds ranging from computer science to user
 experience design, is united by a shared vision of leveraging technology for societal betterment.
  With a deep understanding of the challenges faced by both authorities and citizens in navigating the intricacies
   of traffic regulations, we are driven by a collective passion to simplify processes and promote compliance. Our
    project is not merely about coding and design; it's about making a tangible difference in people's lives. Through meticulous research, innovative problem-solving, and a commitment to user-centric design principles, we aim to create a platform that empowers individuals to navigate fines efficiently while fostering a culture of road safety awareness. As Plymouth University students, we embrace this opportunity to apply our skills and knowledge to address real-world issues, catalyzing positive change and leaving a lasting impact on communities both near and far.
</p>
</div>


</div>

<div className='styleend'>

</div>

</div>

);

}
export default Aboutus;