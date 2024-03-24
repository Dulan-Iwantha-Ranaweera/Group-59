import '../driver/driver.css'
import { Form , Input,Button,Space} from 'antd'

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

function Driverlogin(){

return(

<div className='driverlogin-con'>


    <div className='driverlogin-name'>
<h2>Login</h2>
    </div>
    <Form>
    <div className='driverlogin-inputs'>
    <Form.Item
      label="License Number"
      name="officeridno"
      rules={[
        {
          required: true,
          message: 'Enter your ID No!',
        },
      ]}
    >
      <Input />
    </Form.Item>

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



<div className='driverlogin-button'>
<Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
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
    

    
</div>

);

}

export default Driverlogin;