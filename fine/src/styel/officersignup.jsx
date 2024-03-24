import '../styel/dashboard.css';
import {  Link } from "react-router-dom";
import {Form , Input, Select,Checkbox,Button,Space,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
}

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onReset = () => {
    Form.resetFields();
  };

const desiSelector = (value) => {
    console.log(value);
}



function Signup(){

    return(

<div className='signupcon'>

     <div className='signupname'>
        <h2 className=''>Sign Up</h2>

     </div >
<Form>
<div className='signupinputs'>
        <div className='OfficerID'>
        <Form.Item
      label="Officer ID No"
      name="officeridno"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
        </div>

        <div className='offiName'>
        <Form.Item
      label="User Name"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
        </div>

        <div className='officerimageup'>
          <Form.Item> 
            <p>Upload your official Image (Passport Size)</p>
             <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload></Form.Item>
      
        </div>

        <div className='offipassword'>
        <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
        </div>

        <div className='offipasswordcon'>
        <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
        </div>

        <div className='age'>
        <Form.Item
      label="Age"
      name="age"
      rules={[
        {
          required: true,
          message: 'Please input your Age',
        },
      ]}
    >
      <Input />
    </Form.Item>
        </div>


        <div className='gen'>
        <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender"
          onChange={desiSelector}
          options={[
            {
                value: 'male',
                label: 'Male',
                
            },
            {
                value: 'female',
                label: 'Female',
            },
            {
                value: 'other',
                label: 'Other',
            },
        ]}
          >
          </Select>
        
      </Form.Item>
        </div>
        
        <div className='offirank'>
        <Form.Item
      label="Officer Rank"
      name="officerrank"
      rules={[
        {
            required: true,
          message: 'Please input your Rank of Posistion',
        },
      ]}
    >
      <Input />
    </Form.Item>
        </div>


        <div className='division'>
        <Form.Item
      label="Division"
      name="division"
      rules={[
        {
          required: true,
          message: 'Please enter Division',
        },
      ]}
    >
      <Input />
    </Form.Item>
        </div>
        
        
        <div className='mainservicearea'>
        <Form.Item
      label="Main Service Area"
      name="mainservicearea"
      rules={[
        {
          required: true,
          message: 'Enter your service area',
        },
      ]}
    >
      <Input />
    </Form.Item>
      
        </div>

        <div className='homeaddress'>
        <Form.Item
      label="Home Address"
      name="homeaddress"
      rules={[
        {
          required: true,
          message: 'enter your home address',
        },
      ]}
    >
      <Input />
    </Form.Item>
        </div>
        

        <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Are you sure!that all the above informations are correct?
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
    <Space>
    <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
    </Space>
    </Form.Item>


     </div>
</Form>
     

     <div className='signupbutton'>
    <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item> 

       
      <Link to={"/login"}>
 
  
    Login
    
  
  </Link>
       
     

     </div>

</div>

    );


}
export default Signup;