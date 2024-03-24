import '../driver/driver.css'
import {Form , Input,Checkbox,Button,Space,} from 'antd'


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




function Driversignup(){

return(
<div className='driversignup-con'>

<div className='driversignup-name'>
<h2> Sign Up</h2>
</div>

<Form>

<div className='driversignup-input'>

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


<div className='driversignup-button'>

<Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item> 


      <Button type="link">
    Login
  </Button>

  

</div>



</div>

);

}

export default Driversignup;