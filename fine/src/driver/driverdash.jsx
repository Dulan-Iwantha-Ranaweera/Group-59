import '../driver/driver.css'
import {Card,Table,} from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const { Dragger } = Upload;



const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };


function Driverdash(){
return(


    
    <div className='driver-con'>


       
<div className='driverinfodiv'>
    <Card className='driverinfocard'>
        <div className='driverinfocard-inner'>
            <div className='driverinfo'>
            Driver Info
            </div>
            <div className='driverdetails'>
                <div className='drivername'>
                D S Samarasinghe
                </div>
                <div className='driverlicenseno'>
                    B4958102
                </div>
                <div className='driveraddress'>
                    Galpamunuwa,Palatuwa,Matara.
                </div>
               
            </div>

         
        </div>

    </Card>

    <p className='driveroffence'><b>Your Offence</b></p>
  

<Table className='driveroffencetable'   columns={[

{
    dataIndex: 'officerid ',
    title:'Officer ID',
    key:'officerid',  
},

    {
        dataIndex: 'date',
        title:'Date',
        key:'date',
    },
    {
        dataIndex: 'typeof offence',
        title:'Type of Offence',
        key:'typeofoffence',  
    },
    {
        dataIndex: 'amount',
        title:'Amount',
        key:'amount',
    },
    
   
   



]} />
<div className='slipuplaod'>
    <p className='Uploadyourbanksliporreceipt' >Upload your bank slip or receipt image here... </p>
    <br />
    <p className='Uploadyourbanksliporreceipt access' > <b>Only images can be uploaded</b></p>

<div className='slipdragger'>
<Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
</div>

</div>





</div>


    </div>
);

}

export default Driverdash;