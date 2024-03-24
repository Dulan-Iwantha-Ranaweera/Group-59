import'../admin/admin.css'
import {Card,Table,Button,Watermark } from'antd';
import {AiTwotoneDelete} from "react-icons/ai";



function Admindash(){

return(

   <div className='admin-con'>
    <Watermark content="Sri Lanka Police">
    <div className='admininfodiv'>
    <Card className='admininfocard'>
        <div className='addmininfocard-inner'>
            <div className='admintitle'>
            Administrator
            </div>
            
        </div>

         
        

    </Card>
    </div>
    

<p className='approvetitle'>List Of fines to be Approved</p>

    

<Table className='approvetable'   columns={[
    {
        dataIndex: 'licenNo',
        title:'License Number',
        key:'licenNo',
    },
    {
        dataIndex: 'officeridno',
        title:'OfficerId No',
        key:'officeridno',
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
                    /> Approve? </Button>
           

        )
    },


]} />

    <div
      style={{
        height: 250,
        width:500,
      }}
    />
  </Watermark>

    </div>
);

}
export default Admindash;