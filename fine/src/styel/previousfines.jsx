import '../styel/dashboard.css';
import { Card,Table,Input } from 'antd';


import {AiTwotoneDelete} from "react-icons/ai";
import {Button} from 'antd';

const { Search } = Input;


function Previousfines(){

    return(


<div className='prefinediv'> 
<Card className="prefinecard" >
    <div className="prefinecard-inner">
        <p>Previous Fines</p>
  
        <div className="search">
          <Search placeholder=" Enter Driver's License No:" type="text"/>
        </div> 

    </div>
    
</Card >



<p className='received'>Drivers who received fines</p>
  

<Table className='table1'   columns={[
    {
        dataIndex: 'licenNo',
        title:'License Number',
        key:'licenNo',
    },
    {
        dataIndex: 'name',
        title:'Driver name',
        key:'name',  
    },
    {
        dataIndex: 'date',
        title:'Date',
        key:'date',
    },
    {
        dataIndex: 'type',
        title:'Type of Offence',
        key:'type',
    },
    {
        dataIndex: 'amount',
        title:'Amount',
        key:'amount',
    },

    {
        dataIndex: 'paynon',
        title:'Paid/Non-paid',
        key:'amount',
      
    },




]} />


<p className='receivedp'>Drivers who Paid fines</p>

<Table className='table2'   columns={[
    {
        dataIndex: 'licenNo',
        title:'License Number',
        key:'licenNo',
    },
    {
        dataIndex: 'name',
        title:'Driver name',
        key:'name',
    },
    {
        dataIndex: 'date',
        title:'Date',
        key:'date',
    },
    {
        dataIndex: 'type',
        title:'Type of Offence',
        key:'type',
    },
    {
        dataIndex: 'amount',
        title:'Amount',
        key:'amount',
    },

    {
        title: 'Payment Details',
        render: () => (
           
                <Button type='primary' p size='middle'> <AiTwotoneDelete
                    /> Paid Details </Button>
           

        )
    },


]} />

</div>
    );
}
 
export default Previousfines ;
