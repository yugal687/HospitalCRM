import React from 'react'

import { Form, Input, Button, DatePicker, Checkbox, TimePicker, Radio } from 'antd';
const { RangePicker } = DatePicker;
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
                            </div>
                            <div className="md:col-span-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="sm:col-span-1">
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
                                    </div>
                                    <div className="sm:col-span-1">
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1">
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
                                <div className="grid grid-cols-1 sm:grid-cols-3">
                                    <div className="sm:col-span-1">
                                        {/* Installation */}
                                        <Form.Item name="installation" valuePropName="">
                                            <Checkbox>Installation</Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Preventative Maintainence */}
                                        <Form.Item name="preventataiveMaintainence" valuePropName="">
                                            <Checkbox>Preventataive Maintainence (PM)</Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Breakdown Call */}
                                        <Form.Item name="breakdownCall" valuePropName="">
                                            <Checkbox>Breakdown Call (BC)</Checkbox>
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3">
                                    <div className="sm:col-span-1">
                                        {/* Paid */}
                                        <Form.Item name="paid" valuePropName="">
                                            <Checkbox>Paid</Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Update */}
                                        <Form.Item name="update" valuePropName="">
                                            <Checkbox>Update</Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
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


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1">
                                {/* Equipment Type */}
                                <Form.Item
                                    label="Equipment type"
                                    name="equipmenttype"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input equipment type',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="date-picker"
                                            label="Fault Occured Date"
                                        >
                                            <DatePicker disabled />
                                        </Form.Item>
                                    </div>
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="time-picker"
                                            label="Fault Occured Time"
                                        >
                                            <TimePicker disabled />
                                        </Form.Item>
                                    </div>
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="servicecontract"
                                            label="Service Contract"
                                            rules={[{ required: true, message: 'Please select service contract' }]}
                                        >
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="warranty"
                                            label="Warranty"
                                            rules={[{ required: true, message: 'Please select warranty' }]}
                                        >
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1">
                                {/* Customer Refrence */}
                                <Form.Item
                                    label="Customer Reference"
                                    name="customerreference"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input customer reference',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="sm:col-span-1">
                                        {/* SR No. */}
                                        <Form.Item
                                            label="SR No. / EQ ID"
                                            name="srno"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input sr no',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* SW Version. */}
                                        <Form.Item
                                            label="SW Version"
                                            name="swversion"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input sw version',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            {/* Error Message */}
                            <Form.Item
                                label="Error Message"
                                name="errormessage"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input error message',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1">
                            {/* Problem */}
                            <Form.Item
                                label="Problem"
                                name="problem"
                            >
                                <Input.TextArea rows={3} disabled />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-1">
                            {/* Work Done */}
                            <Form.Item
                                label="Work Done"
                                name="workdone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input how work is accomplished',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={6} />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1">
                                <Form.Item
                                    name="systemstatus"
                                    label="System Status"
                                    rules={[{ required: true, message: 'Please select system status' }]}
                                >
                                    <Radio.Group>
                                        <Radio value="complete">Complete</Radio>
                                        <Radio value="incomplete">Incomplete</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <Form.Item
                                    name="parts"
                                    label="Parts"
                                    rules={[{ required: true, message: 'Please select parts replacement status' }]}
                                >
                                    <Radio.Group>
                                        <Radio value="needs_replacement">Needs Replacement</Radio>
                                        <Radio value="replaced">Replaced</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <Form.Item name="service-charge-from-to" label="Service Charge From">
                                <RangePicker />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1">
                            <table className="table-auto border-collapse w-full">
                                <thead>
                                    <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                        <th className="px-4 py-2 bg-gray-200 ">Description</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Part Number</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Qty</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Service Charge Amount</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Add</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-normal text-gray-700">
                                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-2">
                                        <td className="px-4 py-1">
                                            <Form.Item
                                                name="description"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-1">
                                            <Form.Item
                                                name="part-number"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-1">
                                            <Form.Item
                                                name="qty"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-1">
                                            <Form.Item
                                                name="service-charge-amount"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-1">
                                            <Button>
                                                Add
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div className="md:col-span-3">
                                <table className="table-auto border-collapse w-full">
                                    <thead>
                                        <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                            <th className="px-4 py-2 bg-gray-200 ">Attending Engineer</th>
                                            <th className="px-4 py-2 bg-gray-200 ">Date</th>
                                            <th className="px-4 py-2 bg-gray-200 ">Arr. Time</th>
                                            <th className="px-4 py-2 bg-gray-200 ">Dep. Time</th>
                                            <th className="px-4 py-2 bg-gray-200 ">Travel Time</th>
                                            <th className="px-4 py-2 bg-gray-200 ">
                                                Add
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-normal text-gray-700">
                                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-2">
                                            <td className="px-4 py-1">
                                                <Form.Item
                                                    name="attending-engineer"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </td>
                                            <td className="px-4 py-1">
                                                <Form.Item
                                                    name="engineer-attended-date"
                                                >
                                                    <DatePicker />
                                                </Form.Item>
                                            </td>
                                            <td className="px-4 py-1">
                                                <Form.Item
                                                    name="engineer-arr-time"
                                                >
                                                    <TimePicker />
                                                </Form.Item>
                                            </td>
                                            <td className="px-4 py-1">
                                                <Form.Item
                                                    name="engineer-dep-time"
                                                >
                                                    <TimePicker />
                                                </Form.Item>
                                            </td>
                                            <td className="px-4 py-4">
                                                <Form.Item
                                                    name="travel-time"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </td>
                                            <td className="px-4 py-4">
                                                <Button>
                                                    Add
                                            </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="md:col-span-1">
                                {/* Customer Remarks */}
                                <Form.Item
                                    label="Customer Remarks"
                                    name="customer-remarks"
                                >
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                {/* FE Remarks */}
                                <Form.Item
                                    label="FE Remarks"
                                    name="fe-remarks"
                                >
                                    <Input.TextArea rows={4} />
                                </Form.Item>
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