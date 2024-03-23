import { Card,
  Input,
  Button,
  Modal,
  Col,
  DatePicker,
  Form,
  Row,
  Space,
  Select
 } from 'antd';
import  { useState } from 'react';

import {dateChange} from 'react';
import {desiSelector} from 'react';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };




    return(
        <div>
<div className='dashdiv'>
<Card className="dashcard" >
    <div className="dashcard-inner">
    <p>Dashboard</p>
</div>
  
    
  </Card >
</div>
  
  
    

    
          <div className="maintitle">
      Add & Check Fine 
      </div>
   

  <div className="cards">
  <Card className="card2"
    title=" Add E-Fine"
    bordered={false}
  >
    <p>You can proceed with the e-fine process .</p>
    <br/>
    
    <Button className="button00 buttonnew" type="primary" onClick={showModal} >
    
       <p>click here</p>
       
       </Button>
      
   
  </Card>
  <br/>
  <Card className="card3"
    title="Service Locations"
    bordered={false}
  >
    <p>you can mention your service locations and get details about your previous service locations.</p>
    <br/>
    <Button className='buttonnew'
    >
       <p>click here</p>
       </Button>

  </Card>
  </div>

 
  
      <Modal className='addfinemod' width={1200} height={1000} okButtonProps={{style: {display: 'none'}}} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form>

<Row gutter={24}>


    <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">

            <Form.Item label='License No' name='licno' rules={[
                {
                    required: true,
                    message: 'insert license no',
                },
            ]}>
                <Input type='text' variant='filled'
                       placeholder='License No'/>
            </Form.Item>
        </div>

    </Col>


    <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">
            <Form.Item label='Surname'>
                <Input type='text' variant='filled' placeholder='Surname'/>
            </Form.Item>
        </div>

    </Col>



    <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">
            <Space direction='vertical'>
                <Form.Item label='Date'>
                    <DatePicker variant='filled' onChange={dateChange}
                                placeholder='Select  Date'/>
                </Form.Item>
            </Space>
        </div>

    </Col>


    <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">
            <Form.Item label='Email'>
                <Input type='email' variant='filled'
                       placeholder='Email Address'/>
            </Form.Item>
        </div>

    </Col>

    <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">
            <Form.Item label='Phone'>
                <Input type='number' variant='filled'
                       placeholder='Phone Number'/>
            </Form.Item>
        </div>

    </Col>


    {/* <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">
            <Form.Item label=''>
                <Input type='text' variant='filled' placeholder='Street'/>
            </Form.Item>
        </div>

    </Col> */}


    {/* <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">
            <Form.Item label='City'>
                <Input type='text' variant='filled' placeholder='City'/>
            </Form.Item>
        </div>

    </Col> */}

    <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "50%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">
            <Form.Item label='Amount'>
                <Input type='number' 
                       placeholder='Amount'/>
            </Form.Item>
        </div>

    </Col>

    <Col xs={{flex: "100%"}}
         sm={{flex: "100%"}}
         md={{flex: "100%"}}
         lg={{flex: "20%"}}>

        <div className="input-outer">

            <Form.Item label='Type of Fine'>
                <Select variant='filled'
                        defaultValue='Select Type'
                        onChange={desiSelector}
                        options={[
                            {
                                value: 'highspeed',
                                label: 'High Speed',
                                
                            },
                            {
                                value: 'basictrafficvialation',
                                label: 'Basic traffic violation',
                            },
                            {
                                value: 'drunkdriving',
                                label: 'Drunk driving',
                            },
                            {
                                value: 'nosafetyhelmets',
                                label: 'No safety helmets',
                            },
                        ]}/>
            </Form.Item>

        </div>

    </Col>

    


    <Col span={24}>

        <div className="btnNext">

            <Button className='reset' type='dashed' htmlType='reset'>Reset</Button>
            <Button type='primary' htmlType='submit'>Update</Button>


        </div>

    </Col>


</Row>
</Form>
      </Modal>

  
        </div>
    );
}

export default Dashboard;