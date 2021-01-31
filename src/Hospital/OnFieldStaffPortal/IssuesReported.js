import React, { useState, useEffect } from 'react'
import {
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Pagination,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label, HelperText,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../../icons'

import { Button, Table, Popconfirm, Drawer, Form, Input, Select, DatePicker, Checkbox, TimePicker, Radio, Upload, Modal, Badge } from 'antd';
import { QuestionCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
    { title: 'Issue No.', dataIndex: 'issueNo', key: 'issueNo' },
    { title: 'Assigned Date', dataIndex: 'assignedDate', key: 'assignedDate' },
    { title: 'Machine', dataIndex: 'machine', key: 'machine' },
    { title: 'Hospital Name', dataIndex: 'hospitalName', key: 'hospitalName' },
    { title: 'Hospital Representative', dataIndex: 'hospitalRepresentative', key: 'hospitalRepresentative' },
    {
        title: 'Status',
        key: 'state',
        render: () => (
            <span>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">pending</span>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-yellow-100 bg-yellow-500 rounded-full">on progress</span>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">completed</span>
            </span>
        ),
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <span>
            <Popconfirm title="Is this issue solved successfully?" onConfirm={issueSolved} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                <a>Done</a>
            </Popconfirm>
        </span>,
    },
];

const data = [
    {
        key: 1,
        issueNo: 'Issue No. #1',
        assignedDate: '2020-12-02',
        machine: 'MRI machine',
        hospitalName: 'CMC',
        hospitalRepresentative: 'Jeevan Thapa',
        problem: 'Magnetic coils detection failure on MRI machine.',
        faultOccuredDate: '2021-01-20',
        faultOccuredTime: '13:00'
    },
    {
        key: 2,
        issueNo: 'Issue No. #2',
        assignedDate: '2020-12-02',
        machine: 'X-Rays machine',
        hospitalName: 'CMS',
        hospitalRepresentative: 'Amit Gurung',
        problem: 'Flash Failure On X-RAYS machine.And also changes to be done on some regular parts at time instance.',
        faultOccuredDate: '2021-01-20',
        faultOccuredTime: '13:00'
    },
    {
        key: 3,
        issueNo: 'Issue No. #3',
        assignedDate: '2020-12-02',
        machine: 'Video X-rays',
        hospitalName: 'Bharatpur Hospital',
        hospitalRepresentative: 'Narayan Kandel',
        problem: 'Rotating Joints Stucked on a Video X-RAYS machine. Changing of the respective part is to done.',
        faultOccuredDate: '2021-01-20',
        faultOccuredTime: '13:00'
    },
    {
        key: 4,
        issueNo: 'Issue No. #4',
        assignedDate: '2020-12-02',
        machine: 'CT SCAN',
        hospitalName: 'Narayani Samudayek',
        hospitalRepresentative: 'Bhuwan Chaudhary',
        problem: 'The displaying machine of CT SCAN not working as smoothly it needs to be.Also parts need to be changed on certain time duration.',
        faultOccuredDate: '2021-01-20',
        faultOccuredTime: '13:00'
    },
];


const issueSolved = () => {
    alert('Confirming Issue');
};

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


class IssuesReported extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            //Review Forms
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
            attendedEngineersTable: [{
                attendedEngineerName: '',
                attendedDate: '',
                arrivalTime: '',
                depTime: '',
                travelTime: ''
            }],
            //Table Ends
            customerRemarks: '',
            feRemarks: '',
            //UploadedImageList
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            imageList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMkwZN7BoThw_-a5q4qyQoQXVqxYUlJJWaw&usqp=CAU',
                },
                {
                    uid: '-2',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://lh3.googleusercontent.com/proxy/aThHQdc6FqGg8Xlo2IIlk8bRTThOb9mf1zfztd0jyK5joDqu9a5ymeqh6h8HEc121_-zGwxU-M29iCKuSk-HK-bYpfxiGvoD9IOqFIKxt9q-VHmk-dJC3Z2xzyAGGQPCxjjOm5m_9Q',
                },
                {
                    uid: '-3',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://www.nde-ed.org/EducationResources/CommunityCollege/Radiography/Graphics/xraytube1.jpg',
                },
                {
                    uid: '-4',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Z0R0urYYQ2mWhXE16upDMRNBgEbv919fvw&usqp=CAU',
                },
                {
                    uid: '-xxx',
                    percent: 50,
                    name: 'image.png',
                    status: 'uploading',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMkwZN7BoThw_-a5q4qyQoQXVqxYUlJJWaw&usqp=CAU',
                },
            ],

            //ErrorMessageImagesVisible
            errorMessageModalVisible: false,

        }
        this.addPartsTable = this.addPartsTable.bind(this);
    }

    //ErrorMessageImagesVisible
    setErrorMessageModalVisible(errorMessageModalVisible) {
        this.setState({ errorMessageModalVisible });
    }


    //Cancel Image Preview
    handleCancel = () => this.setState({ previewVisible: false });
    //Open Image Preview
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };



    addPartsTable() {
        let table = {
            description: '',
            partNumber: '',
            qty: '',
            serviceChargeAmt: ''
        };
        this.setState({ partstable: this.state.partsTable.push(table) });
    }

    // Drawer show and close
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    // Drawer show and close ends

    // Add new review
    addNewReview = () => {
        alert('Review Added Successfully!')
    };


    render() {

        const { previewVisible, previewImage, previewTitle, imageList } = this.state;


        return (
            <div>

                <div className="grid grid-cols-1 gap-6 mt-2">
                    <Table
                        columns={columns}
                        expandable={{
                            expandedRowRender: record =>
                                <div>
                                    <div>
                                        <p className="">
                                            <span className="font-semibold">Problem: </span>
                                            {record.problem}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3">
                                            <div className="md:col-span-1">
                                                <p className="">
                                                    <span className="font-semibold">Hospital Name: </span>
                                                    {record.hospitalName}
                                                </p>
                                            </div>
                                            <div className="md:col-span-1">
                                                <p className="">
                                                    <span className="font-semibold">Hospital Representative: </span>
                                                    {record.hospitalRepresentative}
                                                </p>
                                            </div>
                                            <div className="md:col-span-1">
                                                <p className="">
                                                    <span className="font-semibold">Machine: </span>
                                                    {record.machine}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3">
                                            <div className="md:col-span-1">
                                                <p className="">
                                                    <span className="font-semibold">Fault Occured Date: </span>
                                                    {record.faultOccuredDate}
                                                </p>
                                            </div>
                                            <div className="md:col-span-1">
                                                <p className="">
                                                    <span className="font-semibold">Fault Occured Time: </span>
                                                    {record.faultOccuredTime}
                                                </p>
                                            </div>
                                            <div className="md:col-span-1">
                                                <Button type="primary" onClick={() => this.setErrorMessageModalVisible(true)}>
                                                    View Error Images
                                                </Button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <Button type="primary" onClick={this.showDrawer}>
                                        Add Review
                                    </Button>
                                    {/* Error Sections */}
                                    {/* Error Message Images Modal Visible */}
                                    <Modal
                                        width={650}
                                        title="Error Description"
                                        centered
                                        visible={this.state.errorMessageModalVisible}
                                        onCancel={() => this.setErrorMessageModalVisible(false)}
                                        className="z-50"
                                    >
                                        <p className="font-bold">Error Images:</p>
                                        <div>
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={imageList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                            </Upload>
                                            <Modal
                                                visible={previewVisible}
                                                title={previewTitle}
                                                footer={null}
                                                onCancel={this.handleCancel}
                                            >
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                        </div>
                                        <p className="font-semibold mb-1">Error Codes</p>
                                        <div>
                                            <ul>
                                                <li>Error Code - 0001</li>
                                                <li>Error Code - 0002</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1">Optional Representative Details</p>
                                            <div className="grid grid-cols-2">
                                                <div>
                                                    <span className="font-semibold">Department Name: Radiology</span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Representative Name: Aashish Guragain</span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Contact Number: 9812345678</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="font-bold mb-0 mt-2">Called For</p>
                                        <div>
                                            <span class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-green-100 bg-green-700 rounded">Installation</span>
                                            <span class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-indigo-100 bg-indigo-700 rounded">Preventive Maintainence</span>
                                            <span class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-red-100 bg-red-700 rounded">Breakdown Call</span>
                                            <span class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-yellow-100 bg-yellow-500 rounded">Update</span>
                                        </div>
                                    </Modal>
                                    {/* Error Images Modal Ends*/}
                                    {/* Previous Reviews */}
                                    <div className="grid grid-cols-1">
                                        <p className="font-semibold">
                                            Previous Reviews:
                                        </p>
                                        <div className="flex flex-wrap gap-5 font-semibold">
                                            <a onClick={this.showDrawer}>
                                                Review 1
                                            </a>
                                            <a onClick={this.showDrawer}>
                                                Review 2
                                            </a>
                                            <a onClick={this.showDrawer}>
                                                Review 3
                                            </a>
                                        </div>

                                    </div>


                                    {/* Add New Review Drawer */}
                                    <div>
                                        <Drawer
                                            title="Add New Review"
                                            width={900}
                                            onClose={this.onClose}
                                            visible={this.state.visible}
                                            bodyStyle={{ paddingBottom: 40 }}
                                            footer={
                                                <div
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                                        Close
                                                    </Button>
                                                    <Button onClick={this.addNewReview} type="primary">
                                                        Review
                                                    </Button>
                                                </div>
                                            }
                                        >
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
                                                            onChange={(e) => this.setState({ customer: e.target.value })}
                                                        >
                                                            <Input defaultValue="Norvick Hospital" />
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
                                                                    onChange={(e) => this.setState({ requestIDNo: e.target.value })}
                                                                >
                                                                    <Input defaultValue="011453-01" />
                                                                </Form.Item>
                                                            </div>
                                                            <div className="sm:col-span-1">
                                                                {/* Select Date */}
                                                                <Form.Item
                                                                    label="Date"
                                                                    name="date"
                                                                >
                                                                    <DatePicker
                                                                        onChange={(date, dateString) => this.setState({ date: dateString })}
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
                                                            onChange={(e) => this.setState({ department: e.target.value })}
                                                        >
                                                            <Input defaultValue="Radiology" />
                                                        </Form.Item>
                                                        {/* Address */}
                                                        <Form.Item
                                                            label="Address"
                                                            name="address"
                                                            value={this.state.address}
                                                            onChange={(e) => this.setState({ address: e.target.value })}
                                                        >
                                                            <Input defaultValue="Baluwatar, Kathmandu" />
                                                        </Form.Item>
                                                        {/* Telephone */}
                                                        <Form.Item
                                                            label="Telephone"
                                                            name="telephone"
                                                            value={this.state.telephone}
                                                            onChange={(e) => this.setState({ telephone: e.target.value })}
                                                        >
                                                            <Input defaultValue="01456743" />
                                                        </Form.Item>
                                                    </div>
                                                    <div className="md:col-span-1">
                                                        <div className="grid grid-cols-1 sm:grid-cols-3">
                                                            <div className="sm:col-span-1">
                                                                {/* Installation */}
                                                                <Form.Item name="installation" valuePropName="">
                                                                    <Checkbox 
                                                                        onChange={(e) => this.setState({ installation: e.target.checked })}
                                                                    >
                                                                        Installation
                                                                    </Checkbox>
                                                                </Form.Item>
                                                            </div>
                                                            <div className="sm:col-span-1">
                                                                {/* Preventative Maintainence */}
                                                                <Form.Item name="preventataive-maintainence" valuePropName="">
                                                                    <Checkbox checked={true}
                                                                        onChange={(e) => this.setState({ preventataiveMaintainence: e.target.checked })}
                                                                    >
                                                                        Preventataive Maintainence (PM)
                                                                    </Checkbox>
                                                                </Form.Item>
                                                            </div>
                                                            <div className="sm:col-span-1">
                                                                {/* Breakdown Call */}
                                                                <Form.Item name="breakdown-call" valuePropName="">
                                                                    <Checkbox
                                                                        onChange={(e) => this.setState({ breakdownCall: e.target.checked })}
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
                                                                        onChange={(e) => this.setState({ paid: e.target.checked })}
                                                                    >
                                                                        Paid
                                                                    </Checkbox>
                                                                </Form.Item>
                                                            </div>
                                                            <div className="sm:col-span-1">
                                                                {/* Update */}
                                                                <Form.Item name="update" valuePropName="">
                                                                    <Checkbox checked={true}
                                                                        onChange={(e) => this.setState({ update: e.target.checked })}
                                                                    >
                                                                        Update
                                                                    </Checkbox>
                                                                </Form.Item>
                                                            </div>
                                                            <div className="sm:col-span-1">
                                                                {/* Miscellanous */}
                                                                <Form.Item name="miscellanous" valuePropName="">
                                                                    <Checkbox
                                                                        onChange={(e) => this.setState({ miscellanous: e.target.checked })}
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
                                                                onChange={(e) => this.setState({ equipmentUptime: e.target.value })}
                                                            >
                                                                <Input defaultValue="09:13pm" />
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
                                                            onChange={(e) => this.setState({ equipmentType: e.target.value })}
                                                        >
                                                            <Input defaultValue="Molecular Diagnostics" />
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
                                                                        onChange={(date, dateString) => this.setState({ faultOccuredDate: dateString })}
                                                                    />
                                                                </Form.Item>
                                                            </div>
                                                            <div className="md:col-span-1">
                                                                <Form.Item
                                                                    name="fault-occured-time"
                                                                    label="Fault Occured Time"
                                                                >
                                                                    <TimePicker
                                                                        onChange={(date, timeString) => this.setState({ faultOccuredTime: timeString })}
                                                                    />
                                                                </Form.Item>
                                                            </div>
                                                            <div className="md:col-span-1">
                                                                <Form.Item
                                                                    name="service-contract"
                                                                    label="Service Contract"
                                                                >
                                                                    <Radio.Group
                                                                    
                                                                        onChange={(e) => this.setState({ serviceContract: e.target.value })}
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
                                                                        onChange={(e) => this.setState({ warranty: e.target.value })}
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
                                                            onChange={(e) => this.setState({ customerReference: e.target.value })}
                                                        >
                                                            <Input defaultValue="Customer Reference-1" />
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
                                                                    onChange={(e) => this.setState({ srNo: e.target.value })}
                                                                >
                                                                    <Input defaultValue="01-432-98" />
                                                                </Form.Item>
                                                            </div>
                                                            <div className="sm:col-span-1">
                                                                {/* SW Version. */}
                                                                <Form.Item
                                                                    label="SW Version"
                                                                    name="sw-version"
                                                                    value={this.state.swVersion}
                                                                    onChange={(e) => this.setState({ swVersion: e.target.value })}
                                                                >
                                                                    <Input defaultValue="Ver-2.8" />
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
                                                        onChange={(e) => this.setState({ errorMessage: e.target.value })}
                                                    >
                                                        <Input defaultValue="Error msg -1" />
                                                    </Form.Item>
                                                </div>

                                                <div className="grid grid-cols-1">
                                                    {/* Problem */}
                                                    <Form.Item
                                                        label="Problem"
                                                        name="problem"
                                                    >
                                                        <Input.TextArea defaultValue="Misdiagnosis. Error in diagnosis machine. Might be some problem in the machine system " rows={3} disabled />
                                                    </Form.Item>
                                                </div>

                                                <div className="grid grid-cols-1">
                                                    {/* Work Done */}
                                                    <Form.Item
                                                        label="Work Done"
                                                        name="work-done"
                                                        value={this.state.workDone}
                                                        onChange={(e) => this.setState({ workDone: e.target.value })}
                                                    >
                                                        <Input.TextArea defaultValue="System Software is Updated with some changes on machines hardware parts." rows={6} />
                                                    </Form.Item>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="md:col-span-1">
                                                        <Form.Item
                                                            name="system-status"
                                                            label="System Status"
                                                        >
                                                            <Radio.Group
                                                                onChange={(e) => this.setState({ systemStatus: e.target.value })}
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
                                                                onChange={(e) => this.setState({ parts: e.target.value })}
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
                                                            onChange={(date, dateString) => this.setState({ serviceChargeFromTo: dateString })}
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
                                                                <th className="px-4 py-2 bg-gray-200 "></th>
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
                                                                               defaultValue="Software Updated"
                                                                                value={this.state.partsTable[index].description}
                                                                                onChange={(e) => {
                                                                                    let partsTable = [...this.state.partsTable];
                                                                                    partsTable[index].description = e.target.value;
                                                                                    this.setState({ partsTable: partsTable });
                                                                                }}  />


                                                                        </td>
                                                                        <td className="px-4 py-2">
                                                                            <Input
                                                                                defaultValue="10-1932"
                                                                                style={{ marginBottom: "0px" }}
                                                                                name="part-number"
                                                                                value={this.state.partsTable[index].partNumber}
                                                                                onChange={(e) => {
                                                                                    let partsTable = [...this.state.partsTable];
                                                                                    partsTable[index].partNumber = e.target.value;
                                                                                    this.setState({ partsTable: partsTable });
                                                                                }} 
                                                                            />
                                                                        </td>
                                                                        <td className="px-4 py-2">
                                                                            <Input
                                                                                style={{ marginBottom: "0px" }}
                                                                                name="qty"
                                                                                value={this.state.partsTable[index].qty}
                                                                                onChange={(e) => {
                                                                                    let partsTable = [...this.state.partsTable];
                                                                                    partsTable[index].qty = e.target.value;
                                                                                    this.setState({ partsTable: partsTable });
                                                                                }}
                                                                            />
                                                                        </td>
                                                                        <td className="px-4 py-2">
                                                                            {/* <Input
                                                                                style={{ marginBottom: "0px" }}
                                                                                name="service-charge-amount"
                                                                                value={this.state.partsTable[index].serviceChargeAmt}
                                                                                onChange={(e) => {
                                                                                    let partsTable = [...this.state.partsTable];
                                                                                    partsTable[index].serviceChargeAmt = e.target.value;
                                                                                    this.setState({ partsTable: partsTable });
                                                                                }}
                                                                            /> */}
                                                                        </td>
                                                                        <td className="px-4 py-2">
                                                                            <Button onClick={(e) => {
                                                                                alert(index);
                                                                                let partsTable = [...this.state.partsTable];
                                                                                partsTable.splice(index, 1);
                                                                                this.setState({ partsTable: partsTable });
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


                                                        </tbody>
                                                    </table>
                                                </div>


                                                <div className="grid grid-cols-1">
                                                    <div className="col-span-1">
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
                                                                            style={{ marginBottom: "0px" }}
                                                                            name="attending-engineer"
                                                                        >
                                                                            <Input defaultValue="Aashish Guragain" />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td className="px-4 py-2">
                                                                        <Form.Item
                                                                         
                                                                            style={{ marginBottom: "0px" }}
                                                                            name="engineer-attended-date"
                                                                        >
                                                                            <DatePicker  />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td className="px-4 py-2">
                                                                        <Form.Item
                                                                            style={{ marginBottom: "0px" }}
                                                                            name="engineer-arr-time"
                                                                        >
                                                                            <TimePicker />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td className="px-4 py-2">
                                                                        <Form.Item
                                                                            style={{ marginBottom: "0px" }}
                                                                            name="engineer-dep-time"
                                                                        >
                                                                            <TimePicker />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td className="px-4 py-2">
                                                                        <Form.Item
                                                                            style={{ marginBottom: "0px" }}
                                                                            name="travel-time"
                                                                        >
                                                                            <Input defaultValue="3 Hours Approximately" />
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
                                                                        <Button onClick={this.addAttendedEngineersTable}>
                                                                            Add
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="col-span-1">
                                                        {/* Customer Remarks */}
                                                        <Form.Item
                                                            label="Customer Remarks"
                                                            name="customer-remarks"
                                                            value={this.state.customerRemarks}
                                                            onChange={(e) => this.setState({ customerRemarks: e.target.value })}
                                                        >
                                                            <Input.TextArea  defaultValue="Work Completion On Time.Done with Effective Maintainance on Machine.Changed parts as required by Time Instance." rows={4} />
                                                        </Form.Item>
                                                    </div>
                                                    <div className="md:col-span-1">
                                                        {/* FE Remarks */}
                                                        <Form.Item
                                                            label="FE Remarks"
                                                            name="fe-remarks"
                                                            value={this.state.feRemarks}
                                                            onChange={(e) => this.setState({ feRemarks: e.target.value })}
                                                        >
                                                            <Input.TextArea  defaultValue="System Software was updated on machine also with some Checkings done on parts and are changed according to required Instance." rows={4} />
                                                        </Form.Item>
                                                    </div>
                                                </div>

                                            </Form>

                                        </Drawer>
                                    </div>
                                </div>,
                            rowExpandable: record => record.name !== 'Not Expandable',
                        }}
                        dataSource={data}
                    />
                </div>


                {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
                    Table Section
                    <div className="sm:col-span-3">
                        Tables
                        <TableContainer className="mb-8">
                            <Table>
                                <TableHeader>
                                    <tr>
                                        <TableCell>Hospital Name</TableCell>
                                        <TableCell>Hospital Representative</TableCell>
                                        <TableCell>Machine</TableCell>
                                        <TableCell>Problem</TableCell>
                                        <TableCell>Issue Occured Date</TableCell>
                                        <TableCell>Issue Occured Time</TableCell>
                                        <TableCell>Review</TableCell>
                                    </tr>
                                </TableHeader>
                                <TableBody>

                                    <TableRow>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Hospital 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Hospital Representative 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Machine 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm w-60">
                                                <div>
                                                    <p className="font-semibold">
                                                        Lorem ipsum dolor sit amet
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">2020/01/01</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">12:00</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p>
                                                        <Button type="primary">
                                                            Review
                                                        </Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>



                                    </TableRow>

                                </TableBody>
                            </Table>
                            <TableFooter>

                            </TableFooter>
                        </TableContainer>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default IssuesReported