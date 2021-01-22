import React from 'react'

import { Form, Input, Button, DatePicker, Checkbox } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


class ReviewProblem extends React.Component {



    render() {
        return (
            <div>

                <div className="">
                    <Form

                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <div className="md:col-span-1">
                                {/* Customer */}
                                <Form.Item
                                    label="Customer"
                                    name="customer"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input customer name',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                {/* Department */}
                                <Form.Item
                                    label="Department"
                                    name="department"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input department name',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                {/* Address */}
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input address',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                {/* Telephone */}
                                <Form.Item
                                    label="Telephone"
                                    name="telephone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input telephone number',
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            
                            
                            <div className="md:col-span-1">
                                <div class="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        {/* Request ID No. */}
                                        <Form.Item
                                            label="Request ID No."
                                            name="requestIDNo"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input request ID number',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="col-span-1">
                                                {/* Installation */}
                                                <Form.Item name="installation" valuePropName="">
                                                    <Checkbox>Installation</Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className="col-span-1">
                                                {/* Preventative Maintainence */}
                                                <Form.Item name="preventataiveMaintainence" valuePropName="">
                                                    <Checkbox>Preventataive Maintainence (PM)</Checkbox>
                                                </Form.Item>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-span-1">
                                        {/* Select Date */}
                                        <Form.Item
                                            label="Date"
                                            name="date"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select date',
                                                },
                                            ]}
                                        >
                                            <DatePicker />
                                        </Form.Item>
                                        {/* Breakdown Call */}
                                        <Form.Item name="breakdownCall" valuePropName="">
                                            <Checkbox>Breakdown Call (BC)</Checkbox>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-1">
                                        {/* Paid */}
                                        <Form.Item name="paid" valuePropName="">
                                            <Checkbox>Paid</Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="col-span-1">
                                        {/* Update */}
                                        <Form.Item name="update" valuePropName="">
                                            <Checkbox>Update</Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="col-span-1">
                                        {/* Miscellanous */}
                                        <Form.Item name="miscellanous" valuePropName="">
                                            <Checkbox>Miscellanous</Checkbox>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1">
                                    {/* Equipment uptime */}
                                    <Form.Item
                                        label="Equipment uptime"
                                        name="equipmentUptime"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input equipment uptime',
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>

                        {/* Review Button */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Review
                            </Button>
                        </Form.Item>

                    </Form>

                </div>



            </div >
        );
    }
}

export default ReviewProblem