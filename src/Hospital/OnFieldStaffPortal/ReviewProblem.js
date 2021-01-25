import React from 'react'

import {Form, Input, Button, DatePicker, Checkbox, TimePicker, Radio, Space} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

const {RangePicker} = DatePicker;


class ReviewProblem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: '',
            requestIDNo: '',
            date: '',
            department: '',
            address: '',
            telephone: '',
            installation: false,
            preventataiveMaintainence: false,
            breakdownCall: false,
            paid: false,
            update: false,
            miscellanous: false,
            equipmentUptime: '',
            equipmentType: '',
            faultOccuredDate: '',
            faultOccuredTime: '',
            serviceContract: '',
            warranty: '',
            customerReference: '',
            srNo: '',
            swVersion: '',
            errorMessage: '',
            workDone: '',
            systemStatus: '',
            parts: '',
            serviceChargeFromTo: '',
            //Table
            partsTable: [{
                description: '',
                partNumber: '',
                qty: '',
                serviceChargeAmt: ''
            }],
            attendedEngineerTable: [{
                attendedEngineerName: '',
                attendedDate: '',
                arrivalTime: '',
                depTime: '',
                travelTime: ''
            }],
            //Table Ends
            customerRemarks: '',
            feRemarks: ''

        }
        this.addPartsTable = this.addPartsTable.bind(this);
    }

    handleSubmit(event) {
        alert('Success!!');
    }

    addPartsTable() {
        let table = {
            description: '',
            partNumber: '',
            qty: '',
            serviceChargeAmt: ''
        };
        // var tableState = this.state;
        // tableState.partsTable.push(table);
        // this.setState(tableState);

        this.setState({partstable: this.state.partsTable.push(table)});
    }

    /*
        addAttendentEngineer() {
            let table = {
                description: '',
                partNumber: '',
                qty: '',
                serviceChargeAmt: ''
            };
            // var tableState = this.state;
            // tableState.partsTable.push(table);
            // this.setState(tableState);

            this.setState({partstable: this.state.partsTable.push(table)});
        }
    */

    //------------------

    render() {

        return (
            <div>

                <div className="">
                    <Form
                        layout="vertical"
                        name="basic"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1">
                                {/* Customer */}
                                <Form.Item
                                    label="Customer"
                                    name="customer"
                                    value={this.state.customer}
                                    onChange={(e) => this.setState({customer: e.target.value})}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="sm:col-span-1">
                                        {/* Request ID No. */}
                                        <Form.Item
                                            label="Request ID No."
                                            name="request-id-no"
                                            value={this.state.requestIDNo}
                                            onChange={(e) => this.setState({requestIDNo: e.target.value})}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Select Date */}
                                        <Form.Item
                                            label="Date"
                                            name="date"
                                        >
                                            <DatePicker
                                                onChange={(date, dateString) => this.setState({date: dateString})}
                                            />
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
                                    value={this.state.department}
                                    onChange={(e) => this.setState({department: e.target.value})}
                                >
                                    <Input/>
                                </Form.Item>
                                {/* Address */}
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={(e) => this.setState({address: e.target.value})}
                                >
                                    <Input/>
                                </Form.Item>
                                {/* Telephone */}
                                <Form.Item
                                    label="Telephone"
                                    name="telephone"
                                    value={this.state.telephone}
                                    onChange={(e) => this.setState({telephone: e.target.value})}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <div className="grid grid-cols-1 sm:grid-cols-3">
                                    <div className="sm:col-span-1">
                                        {/* Installation */}
                                        <Form.Item name="installation" valuePropName="">
                                            <Checkbox
                                                onChange={(e) => this.setState({installation: e.target.checked})}
                                            >
                                                Installation
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Preventative Maintainence */}
                                        <Form.Item name="preventataive-maintainence" valuePropName="">
                                            <Checkbox
                                                onChange={(e) => this.setState({preventataiveMaintainence: e.target.checked})}
                                            >
                                                Preventataive Maintainence (PM)
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Breakdown Call */}
                                        <Form.Item name="breakdown-call" valuePropName="">
                                            <Checkbox
                                                onChange={(e) => this.setState({breakdownCall: e.target.checked})}
                                            >
                                                Breakdown Call (BC)
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3">
                                    <div className="sm:col-span-1">
                                        {/* Paid */}
                                        <Form.Item name="paid" valuePropName="">
                                            <Checkbox
                                                onChange={(e) => this.setState({paid: e.target.checked})}
                                            >
                                                Paid
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Update */}
                                        <Form.Item name="update" valuePropName="">
                                            <Checkbox
                                                onChange={(e) => this.setState({update: e.target.checked})}
                                            >
                                                Update
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* Miscellanous */}
                                        <Form.Item name="miscellanous" valuePropName="">
                                            <Checkbox
                                                onChange={(e) => this.setState({miscellanous: e.target.checked})}
                                            >
                                                Miscellanous
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                </div>


                                <div className="grid grid-cols-1">
                                    {/* Equipment uptime */}
                                    <Form.Item
                                        label="Equipment Uptime"
                                        name="equipment-uptime"
                                        value={this.state.equipmentUptime}
                                        onChange={(e) => this.setState({equipmentUptime: e.target.value})}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1">
                                {/* Equipment Type */}
                                <Form.Item
                                    label="Equipment type"
                                    name="equipment-type"
                                    value={this.state.equipmentType}
                                    onChange={(e) => this.setState({equipmentType: e.target.value})}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="fault-occured-date"
                                            label="Fault Occured Date"
                                        >
                                            <DatePicker
                                                onChange={(date, dateString) => this.setState({faultOccuredDate: dateString})}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="fault-occured-time"
                                            label="Fault Occured Time"
                                        >
                                            <TimePicker
                                                onChange={(date, timeString) => this.setState({faultOccuredTime: timeString})}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="service-contract"
                                            label="Service Contract"
                                        >
                                            <Radio.Group
                                                onChange={(e) => this.setState({serviceContract: e.target.value})}
                                            >
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div className="md:col-span-1">
                                        <Form.Item
                                            name="warranty"
                                            label="Warranty"
                                        >
                                            <Radio.Group
                                                onChange={(e) => this.setState({warranty: e.target.value})}
                                            >
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
                                    name="customer-reference"
                                    value={this.state.customerReference}
                                    onChange={(e) => this.setState({customerReference: e.target.value})}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="sm:col-span-1">
                                        {/* SR No. */}
                                        <Form.Item
                                            label="SR No. / EQ ID"
                                            name="sr-no"
                                            value={this.state.srNo}
                                            onChange={(e) => this.setState({srNo: e.target.value})}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </div>
                                    <div className="sm:col-span-1">
                                        {/* SW Version. */}
                                        <Form.Item
                                            label="SW Version"
                                            name="sw-version"
                                            value={this.state.swVersion}
                                            onChange={(e) => this.setState({swVersion: e.target.value})}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            {/* Error Message */}
                            <Form.Item
                                label="Error Message"
                                name="error-message"
                                value={this.state.errorMessage}
                                onChange={(e) => this.setState({errorMessage: e.target.value})}
                            >
                                <Input/>
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1">
                            {/* Problem */}
                            <Form.Item
                                label="Problem"
                                name="problem"
                            >
                                <Input.TextArea rows={3} disabled/>
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1">
                            {/* Work Done */}
                            <Form.Item
                                label="Work Done"
                                name="work-done"
                                value={this.state.workDone}
                                onChange={(e) => this.setState({workDone: e.target.value})}
                            >
                                <Input.TextArea rows={6}/>
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1">
                                <Form.Item
                                    name="system-status"
                                    label="System Status"
                                >
                                    <Radio.Group
                                        onChange={(e) => this.setState({systemStatus: e.target.value})}
                                    >
                                        <Radio value="complete">Complete</Radio>
                                        <Radio value="incomplete">Incomplete</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                <Form.Item
                                    name="parts"
                                    label="Parts"
                                >
                                    <Radio.Group
                                        onChange={(e) => this.setState({parts: e.target.value})}
                                    >
                                        <Radio value="needs_replacement">Needs Replacement</Radio>
                                        <Radio value="replaced">Replaced</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <Form.Item name="service-charge-from-to" label="Service Charge From">
                                <RangePicker
                                    onChange={(date, dateString) => this.setState({serviceChargeFromTo: dateString})}
                                />
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
                                    <th className="px-4 py-2 bg-gray-200 ">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="text-sm font-normal text-gray-700">
                                {
                                    this.state.partsTable.map((parts, index) => {
                                        return <tr className="hover:bg-gray-100 border-b border-gray-200 py-2"
                                                   key={index}>
                                            <td className="px-4 py-2">
                                                <Input type="text"
                                                       value={this.state.partsTable[index].description}
                                                       onChange={(e) => {
                                                           let partsTable = [...this.state.partsTable];
                                                           partsTable[index].description = e.target.value;
                                                           this.setState({partsTable: partsTable});
                                                       }}/>


                                            </td>
                                            <td className="px-4 py-2">
                                                <Input
                                                    style={{marginBottom: "0px"}}
                                                    name="part-number"
                                                    value={this.state.partsTable[index].partNumber}
                                                    onChange={(e) => {
                                                        let partsTable = [...this.state.partsTable];
                                                        partsTable[index].partNumber = e.target.value;
                                                        this.setState({partsTable: partsTable});
                                                    }}
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                <Input
                                                    style={{marginBottom: "0px"}}
                                                    name="qty"
                                                    value={this.state.partsTable[index].qty}
                                                    onChange={(e) => {
                                                        let partsTable = [...this.state.partsTable];
                                                        partsTable[index].qty = e.target.value;
                                                        this.setState({partsTable: partsTable});
                                                    }}
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                <Input
                                                    style={{marginBottom: "0px"}}
                                                    name="service-charge-amount"
                                                    value={this.state.partsTable[index].serviceChargeAmt}
                                                    onChange={(e) => {
                                                        let partsTable = [...this.state.partsTable];
                                                        partsTable[index].serviceChargeAmt = e.target.value;
                                                        this.setState({partsTable: partsTable});
                                                    }}
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                <Button onClick={(e) => {
                                                    alert(index);
                                                    let partsTable = [...this.state.partsTable];
                                                    partsTable.splice(index, 1);
                                                    this.setState({partsTable: partsTable});
                                                }}>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    })
                                }

                                <tr>
                                    <td>
                                        <Button onClick={this.addPartsTable}>
                                            Add
                                        </Button>
                                    </td>
                                </tr>

                                {/* Rendering Rows */}
                                </tbody>
                                </table>
                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                            <div className="lg:col-span-3">
                                <table className="table-auto border-collapse w-full">
                                    <thead>
                                    <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                        <th className="px-4 py-2 bg-gray-200 ">Attending Engineer</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Date</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Arr. Time</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Dep. Time</th>
                                        <th className="px-4 py-2 bg-gray-200 ">Travel Time</th>
                                        <th className="px-4 py-2 bg-gray-200 ">
                                            Actions
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-sm font-normal text-gray-700">
                                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-2">
                                        <td className="px-4 py-2">
                                            <Form.Item
                                                style={{marginBottom: "0px"}}
                                                name="attending-engineer"
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-2">
                                            <Form.Item
                                                style={{marginBottom: "0px"}}
                                                name="engineer-attended-date"
                                            >
                                                <DatePicker/>
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-2">
                                            <Form.Item
                                                style={{marginBottom: "0px"}}
                                                name="engineer-arr-time"
                                            >
                                                <TimePicker/>
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-2">
                                            <Form.Item
                                                style={{marginBottom: "0px"}}
                                                name="engineer-dep-time"
                                            >
                                                <TimePicker/>
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-2">
                                            <Form.Item
                                                style={{marginBottom: "0px"}}
                                                name="travel-time"
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </td>
                                        <td className="px-4 py-2">
                                            <Button>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">
                                            <Button>
                                                Add
                                            </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="lg:col-span-1">
                                {/* Customer Remarks */}
                                <Form.Item
                                    label="Customer Remarks"
                                    name="customer-remarks"
                                    value={this.state.customerRemarks}
                                    onChange={(e) => this.setState({customerRemarks: e.target.value})}
                                >
                                    <Input.TextArea rows={4}/>
                                </Form.Item>
                            </div>
                            <div className="md:col-span-1">
                                {/* FE Remarks */}
                                <Form.Item
                                    label="FE Remarks"
                                    name="fe-remarks"
                                    value={this.state.feRemarks}
                                    onChange={(e) => this.setState({feRemarks: e.target.value})}
                                >
                                    <Input.TextArea rows={4}/>
                                </Form.Item>
                            </div>
                        </div>


                        {/* Review Button */}
                        <div className="grid">
                            <Form.Item>
                                <Button onClick={this.handleSubmit} type="primary" htmlType="submit">
                                    Review
                                </Button>
                            </Form.Item>
                        </div>

                    </Form>

                </div>


            </div>
    );
    }
    }

    export default ReviewProblem