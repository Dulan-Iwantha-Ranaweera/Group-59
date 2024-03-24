import '../styel/dashboard.css';
import { Form , Input,Button,Space} from 'antd';


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

function Login(){

return(
    
<div className='logincon'>

<div className='loginname'>
<h2> Login</h2>
</div>
<Form>
<div className='logininputs'>
<Form.Item
      label="Officer ID No"
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
</Form>

<div className='loginbutton'>

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



</div>
    
);

}

export default Login;