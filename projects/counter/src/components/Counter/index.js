import { Form, Button, InputNumber, Select } from 'antd'
// import { useState } from 'react'
import store from '../../redux/store'

const Counter = () => {
  const [form] = Form.useForm()
  // const [count, setCount] = useState(undefined)
  const onReset = () => {
    form.resetFields()
    // setCount(() => undefined)
    store.dispatch({ type: 'init', data: 0 })
  }

  const onValuesChange = (cv, { symbol = 'add', firstNum = 0, secondNum = 0 }) => {
    const action = { type: symbol, data: { firstNum, secondNum } }
    store.dispatch(action)
    // switch (symbol) {
    //   case 'add':
    //     setCount(firstNum + secondNum)
    //     break
    //   case 'sub':
    //     setCount(firstNum - secondNum)
    //     break
    //   case 'mul':
    //     setCount(firstNum * secondNum)
    //     break
    //   case 'divi':
    //     setCount(firstNum / secondNum)
    //     break
    //   default:
    //     setCount(firstNum + secondNum)
    //     break
    // }
  }

  return (
    <div className='counter'>
      <h3 className='title'> 简单计算器 </h3>
      <Form
        form={form}
        initialValues={{
          symbol: 'add',
        }}
        layout='inline'
        name='form'
        onValuesChange={onValuesChange}>
        <Form.Item name='firstNum'>
          <InputNumber />
        </Form.Item>

        <Form.Item name='symbol'>
          <Select>
            <Select.Option value='add'>+</Select.Option>
            <Select.Option value='sub'>-</Select.Option>
            <Select.Option value='mul'>*</Select.Option>
            <Select.Option value='divi'>/</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='secondNum'>
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Button type='primary' size='small' onClick={onReset}>
            清空
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: '30px', display: 'flex' }}>
        <h3>结果是: {store.getState()} </h3>
      </div>
    </div>
  )
}

export default Counter
