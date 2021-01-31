import React, {useState, useEffect} from 'react'
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    //Pagination,
    //Modal,
    //ModalHeader,
    //ModalBody,
    //ModalFooter,
    Label,
    //HelperText,
} from '@windmill/react-ui'
import {EditIcon, TrashIcon, InfoIcon} from '../../icons'
import axios from "axios"


import {Form, Button, Input, Select, DatePicker, TimePicker, Radio, Upload, Modal, Checkbox} from "antd"
import moment from 'moment';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

const {Option} = Select;

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


class NewProblemReporting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errorCodes: [{
                errorCode: ''
            }],
            department: '',
            machine_id: '',
            serialNumber: '',
            problem: '',
            issue_occured_date: '',
            issue_occured_time: '',
            calledFor: '',
            // is_Installation: false,
            // is_PreventiveMaintainence: false,
            // is_breakdownCall: false,
            // update: false,
            key: 1,
            //Image Upload Section
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: [],
            //Image Upload Section Ends
            machines: [],
            issues: [],
            //InfoModal
            infoModalVisible: false,
            installationInfoModalVisible: false,
            preventativeMaintainenceInfoModalVisible: false,
            //UploadedImageList
            imageList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://media.gettyimages.com/photos/medical-equipment-are-damaged-after-russian-warplanes-hit-residential-picture-id1197609576?s=2048x2048',
                },
                {
                    uid: '-2',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://i.jauns.lv/t/2020/06/09/1972346/1000x620.jpg?v=1591728809',
                },
                {
                    uid: '-3',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://i.pinimg.com/564x/f5/85/e4/f585e4fd32c7ab8a0212d2d4bf4276be.jpg',
                },
                {
                    uid: '-4',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://i.jauns.lv/t/2020/06/09/1972346/1000x620.jpg?v=1591728809',
                },
                {
                    uid: '-5',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://i.pinimg.com/564x/f5/85/e4/f585e4fd32c7ab8a0212d2d4bf4276be.jpg',
                },
            ],


        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.addErrors = this.addErrors.bind(this);
        this.toogleView = this.toogleView.bind(this);
    }

    //Adding Errors
    addErrors() {
        let table = {
            errorCode: ''
        }
        this.setState({errorcode: this.state.errorCodes.push(table)});
    }

    handleChange() {

    }

    toogleView(data) {
        return this.setState({key: data})
    }

    componentDidMount() {
        this.getAllMachines();
        this.getAllIssues();
    }

    getAllMachines() {
        axios.get('http://127.0.0.1:8000/api/machine'
        ).then(resp => {
            this.setState({
                machines: resp.data.machines
            });
        });
    }

    getAllIssues() {
        axios.get('http://127.0.0.1:8000/api/issue'
        ).then(resp => {
            this.setState({
                issues: resp.data.issues
            });
        });
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.machine_id + this.state.problem + this.state.issue_occured_date + this.state.issue_occured_time);

        axios.post('http://127.0.0.1:8000/api/issue', {
            machine_id: this.state.machine_id,
            problem: this.state.problem,
            occurred_date: this.state.issue_occured_date,
            occurred_time: this.state.issue_occured_time,
        }).then((resp) => {
            alert(resp.data.message);
            this.getAllIssues();
        });
        event.preventDefault();
    }


//Cancel Image Preview
    handleCancel = () => this.setState({previewVisible: false});
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
//Image Uplaod Handle Change
    handleChangeImageUpload = ({fileList}) => this.setState({fileList});


//Info Modal
    setInfoModalVisible(infoModalVisible) {
        this.setState({infoModalVisible});
    }

    setInstallationInfoModalVisible(installationInfoModalVisible) {
        this.setState({installationInfoModalVisible});
    }

    setPreventativeMaintainenceInfoModalVisible(preventativeMaintainenceInfoModalVisible) {
        this.setState({preventativeMaintainenceInfoModalVisible});
    }

    render() {

        const {previewVisible, previewImage, fileList, previewTitle, imageList} = this.state;

        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div style={{marginTop: 5}}>Upload</div>
            </div>
        );


        return (
            <div>
                <div className="grid grid-cols-1 gap-6 mt-2">
                    <div className="">
                        {/*  <Radio.Group defaultValue="installation" buttonStyle="solid">
                            <Radio.Button value="installation"
                                          onChange={this.toogleView('installation')}>Installation</Radio.Button>
                            <Radio.Button value="preventativeMaintainence" onChange={this.toogleView('preventive')}>Preventative
                                Maintainence</Radio.Button>
                            <Radio.Button value="breakdownCall" onChange={this.toogleView('breakdown')}>Breakdown
                                Call</Radio.Button>
                       </Radio.Group>*/}
                        <Button value="installation"
                                onClick={(e) => this.toogleView(1)}>Installation</Button>
                        <Button value="preventative" onClick={(e) => this.toogleView(2)}>Preventative
                            Maintainence</Button>
                        <Button value="breakdown" onClick={(e) => this.toogleView(3)}>Breakdown
                            Call</Button>


                    </div>
                    {/* Installation Call Form Section */}
                    {this.state.key == 1 ?
                        <div>
                            <div className="">
                                <div className="w-full border-1 shadow-md">
                                    {/* Title */}
                                    <div
                                        className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                        <p>Installation</p>
                                    </div>
                                    {/* Form */}
                                    <div
                                        className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">

                                        <Form
                                            validateMessages={validateMessages}
                                            layout="vertical"
                                        >

                                            <p className="font-semibold">Select Equipment for Installation</p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                                <Label>
                                                    <span> Select Department:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.installationDepartment}
                                                            onChange={(e) => this.setState({installationDepartment: e.target.value})}>

                                                            <Option key="" value="">Department 1</Option>
                                                            <Option key="" value="">Department 2</Option>
                                                            <Option key="" value="">Department 3</Option>

                                                        </Select>
                                                    </Form.Item>
                                                </Label>
                                                {/* Select Equipment Category */}
                                                <Label>
                                                    <span> Select Equipment Category:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.installationMachineCategory}
                                                            onChange={(e) => this.setState({installationMachineCategory: e.target.value})}>
                                                            <Option key="" value="">Machine 1</Option>
                                                            <Option key="" value="">Machine 2</Option>
                                                            <Option key="" value="">Machine 3</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </Label>
                                                {/* Select Equipment Category */}
                                                <Label>
                                                    <span> Select Equipment Subcategory:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.installationMachineSubcategory}
                                                            onChange={(e) => this.setState({installationMachineSubcategory: e.target.value})}>
                                                            <Option key="" value="">Machine 1</Option>
                                                            <Option key="" value="">Machine 2</Option>
                                                            <Option key="" value="">Machine 3</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </Label>
                                                {/* Select Equipment */}
                                                <Label>
                                                    <span> Select Equipment:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.installationMachineId}
                                                            onChange={(e) => this.setState({installationMachineId: e.target.value})}>
                                                            <Option key="" value="">Machine 1</Option>
                                                            <Option key="" value="">Machine 2</Option>
                                                            <Option key="" value="">Machine 3</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </Label>

                                            </div>

                                            <Label>
                                                <span>Review:</span>
                                                <Form.Item
                                                    value={this.state.installationReview}
                                                    onChange={(e) => this.setState({installationReview: e.target.value})}
                                                >
                                                    <Input.TextArea rows={4}/>
                                                </Form.Item>
                                            </Label>

                                            <Form.Item>
                                                <Button onClick={this.handleSubmit} type="primary" htmlType="submit">
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>

                            </div>

                            {/*Inctallation Call Table Section */}
                            <div className="">
                                <p className="font-semibold">
                                    Installation Table Details
                                </p>
                            </div>
                            <div className="">
                                {/* Tables */}
                                <TableContainer className="mb-8">
                                    <Table>
                                        <TableHeader>
                                            <tr>
                                                <TableCell>Department</TableCell>
                                                <TableCell>Category</TableCell>
                                                <TableCell>Subcategory</TableCell>
                                                <TableCell>Equipment</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </tr>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="">
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Lab Department
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Category 1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Sub Category 1.1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Machine 1-1-1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-4">
                                                        <Button layout="link" size="icon" aria-label="Edit"
                                                                onClick={() => this.setInstallationInfoModalVisible(true)}>
                                                            <InfoIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                        <Button layout="link" size="icon" aria-label="Edit">
                                                            <EditIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                        <Button layout="link" size="icon" aria-label="Delete">
                                                            <TrashIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                    <TableFooter>

                                    </TableFooter>
                                </TableContainer>
                            </div>

                            {/* Installation Info Modal */}
                            <Modal
                                width={650}
                                title="Installation Info"
                                centered
                                visible={this.state.installationInfoModalVisible}
                                onCancel={() => this.setInstallationInfoModalVisible(false)}
                                className="z-50"
                            >
                                <p className="font-semibold text-base">Review</p>
                                <p className="text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit
                                    in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </p>

                            </Modal>

                        </div> : ''
                    }

                    {this.state.key == 2 ?

                        <div>
                            {/*Preventative Maintainece Call Form Section */}

                            <div className="">
                                <div className="w-full border-1 shadow-md">
                                    {/* Title */}
                                    <div
                                        className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                        <p>Preventive Maintainence</p>
                                    </div>
                                    {/* Form */}
                                    <div
                                        className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">

                                        <Form
                                            validateMessages={validateMessages}
                                            layout="vertical"
                                        >

                                            <p className="font-semibold">Select Equipment for Installation</p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                                <Label>
                                                    <span> Select Department:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.preventativeMaintainenceDepartment}
                                                            onChange={(e) => this.setState({preventativeMaintainenceDepartment: e.target.value})}>

                                                            <Option key="" value="">Department 1</Option>
                                                            <Option key="" value="">Department 2</Option>
                                                            <Option key="" value="">Department 3</Option>

                                                        </Select>
                                                    </Form.Item>
                                                </Label>
                                                {/* Select Equipment Category */}
                                                {/* <Label>
                                                <span> Select Equipment Category:</span>
                                                <Form.Item >
                                                    <Select
                                                        value={this.state.preventativeMaintainenceMachineCategory}
                                                        onChange={(e) => this.setState({ preventativeMaintainenceMachineCategory: e.target.value })}>
                                                            <Option key="" value="">Category 1</Option>
                                                            <Option key="" value="">Category 2</Option>
                                                            <Option key="" value="">Category 3</Option>
                                                    </Select>
                                                </Form.Item>
                                            </Label> */}
                                                {/* Select Equipment Category */}
                                                {/* <Label>
                                                <span> Select Equipment Subcategory:</span>
                                                <Form.Item >
                                                    <Select
                                                        value={this.state.preventativeMaintainenceMachineSubcategory}
                                                        onChange={(e) => this.setState({ preventativeMaintainenceMachineSubcategory: e.target.value })}>
                                                            <Option key="" value="">Subcategory 1</Option>
                                                            <Option key="" value="">Subcategory 2</Option>
                                                            <Option key="" value="">Subcategory 3</Option>
                                                    </Select>
                                                </Form.Item>
                                            </Label> */}
                                                {/* Select Equipment */}
                                                <Label>
                                                    <span> Select Equipment:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.preventativeMaintainenceMachineId}
                                                            onChange={(e) => this.setState({preventativeMaintainenceMachineId: e.target.value})}>
                                                            <Option key="" value="">Machine 1</Option>
                                                            <Option key="" value="">Machine 2</Option>
                                                            <Option key="" value="">Machine 3</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </Label>
                                                {/* Select Equipment */}
                                                <Label>
                                                    <span> Select Serial Number:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.preventativeMaintainenceSerialNumber}
                                                            onChange={(e) => this.setState({preventativeMaintainenceSerialNumber: e.target.value})}>
                                                            <Option key="" value="">Machine 1</Option>
                                                            <Option key="" value="">Machine 2</Option>
                                                            <Option key="" value="">Machine 3</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </Label>

                                            </div>

                                            <Label>
                                                <span>Review:</span>
                                                <Form.Item
                                                    value={this.state.installationReview}
                                                    onChange={(e) => this.setState({installationReview: e.target.value})}
                                                >
                                                    <Input.TextArea rows={4}/>
                                                </Form.Item>
                                            </Label>

                                            <Form.Item>
                                                <Button onClick={this.handleSubmit} type="primary" htmlType="submit">
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>

                            </div>

                            {/*Preventative Maintainence Table Section */}
                            <div className="">
                                <p className="font-semibold">
                                    Preventative Maintainence Details
                                </p>
                            </div>
                            <div className="">
                                {/* Tables */}
                                <TableContainer className="mb-8">
                                    <Table>
                                        <TableHeader>
                                            <tr>
                                                <TableCell>Department</TableCell>
                                                <TableCell>Machine</TableCell>
                                                <TableCell>Serial Number</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </tr>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="">
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Lab Department
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Machine 1-1-1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Serial Number 00001
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-4">
                                                        <Button layout="link" size="icon" aria-label="Edit"
                                                                onClick={() => this.setPreventativeMaintainenceInfoModalVisible(true)}>
                                                            <InfoIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                        <Button layout="link" size="icon" aria-label="Edit">
                                                            <EditIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                        <Button layout="link" size="icon" aria-label="Delete">
                                                            <TrashIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                    <TableFooter>

                                    </TableFooter>
                                </TableContainer>
                            </div>


                            {/* Preventative Maintainence Info Modal */}
                            <Modal
                                width={650}
                                title="Preventative Maintainence Info"
                                centered
                                visible={this.state.preventativeMaintainenceInfoModalVisible}
                                onCancel={() => this.setPreventativeMaintainenceInfoModalVisible(false)}
                                className="z-50"
                            >
                                <p className="font-semibold text-base">Review</p>
                                <p className="text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit
                                    in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </p>

                            </Modal>

                        </div> : ''
                    }

                    {this.state.key == 3 ?
                        <div>
                            {/*Breakdown Call Form Section */}
                            <div className="">
                                <div className="w-full border-1 shadow-md">
                                    {/* Title */}
                                    <div
                                        className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                        <p>Problem Reporting</p>
                                    </div>
                                    {/* Form */}
                                    <div
                                        className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">

                                        <Form
                                            validateMessages={validateMessages}
                                            layout="vertical"
                                        >
                                            <p className="font-semibold">Upload Error Images</p>
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChangeImageUpload}
                                            >
                                                {fileList.length >= 10 ? null : uploadButton}
                                            </Upload>
                                            <Modal
                                                visible={previewVisible}
                                                title={previewTitle}
                                                footer={null}
                                                onCancel={this.handleCancel}
                                            >
                                                <img alt="example" style={{width: '100%'}} src={previewImage}/>
                                            </Modal>

                                            <div className="grid grid-cols-1 sm:grid-cols-3">
                                                {
                                                    this.state.errorCodes.map((error, index) => {
                                                        return <div key={index} className="grid grid-cols-2 gap-4">
                                                            <div className="">
                                                                <Form.Item
                                                                    label="Error Code"
                                                                    value={this.state.errorCodes[index].errorCode}
                                                                    onChange={(e) => {
                                                                        let errorCodes = [...this.state.errorCodes];
                                                                        errorCodes[index].errorCode = e.target.value;
                                                                        this.setState({errorCodes: errorCodes});
                                                                    }}
                                                                >
                                                                    <Input/>

                                                                </Form.Item>
                                                            </div>
                                                            <div className="">

                                                                <MinusCircleOutlined
                                                                    style={{fontSize: 24, marginTop: 30}}
                                                                    onClick={(e) => {
                                                                        alert(index);
                                                                        let errorCodes = [...this.state.errorCodes];
                                                                        errorCodes.splice(index, 1);
                                                                        this.setState({errorCodes: errorCodes});
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                                <Button onClick={this.addErrors} style={{width: 60, marginTop: 25}}>
                                                    Add
                                                </Button>
                                            </div>

                                            <p className="font-semibold">Select Equipment with Problem</p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                                <Label>
                                                    <span> Department:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.department}
                                                            onChange={(e) => this.setState({department: e.target.value})}>

                                                            <Option key="" value="">Department 1</Option>

                                                        </Select>
                                                    </Form.Item>
                                                </Label>
                                                {/* Select Equipment */}
                                                <Label>
                                                    <span> Select Equipment:</span>
                                                    <Form.Item>
                                                        <Select
                                                            placeholder="Select an equipment with problem"
                                                            value={this.state.machine_id}
                                                            onChange={(e) => this.setState({machine_id: e})}>

                                                            {this.state.machines.map((machine) => {

                                                                return <Option key={machine.id}
                                                                               value={machine.id}>{machine.machine_name}</Option>
                                                            })}
                                                        </Select>
                                                    </Form.Item>
                                                </Label>

                                                <Label>
                                                    <span> Serial Number:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.serialNumber}
                                                            onChange={(e) => this.setState({serialNumber: e.target.value})}>

                                                            <Option key="" value="">Serial Number - 0011</Option>

                                                        </Select>
                                                    </Form.Item>
                                                </Label>

                                            </div>

                                            <Label>
                                                <span>Problem:</span>
                                                <Form.Item
                                                    value={this.state.problem}
                                                    onChange={(e) => this.setState({problem: e.target.value})}
                                                    rules={[{required: true,}]}
                                                >
                                                    <Input.TextArea rows={4}/>

                                                </Form.Item>
                                            </Label>

                                            <div className="grid grid-flow-col">
                                                <Label>
                                                    <span> Problem Occured Date:</span>
                                                    <Form.Item
                                                        rules={[{required: true,}]}
                                                    >
                                                        <DatePicker style={{width: 250}}
                                                                    onChange={(date, dateString) => this.setState({issue_occured_date: dateString})}/>
                                                    </Form.Item>
                                                </Label>

                                                <Label>
                                                    <span> Problem Occured Time:</span>
                                                    <Form.Item
                                                        rules={[{required: true,}]}
                                                    >
                                                        <TimePicker style={{width: 250}}
                                                                    onChange={(time, timeString) => this.setState({issue_occured_time: timeString})}
                                                                    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}/>
                                                    </Form.Item>
                                                </Label>
                                                {/* <Label>
                                            <span>Called For:</span>
                                            <Form.Item>
                                                <Radio.Group
                                                    onChange={(e) => this.setState({ calledFor: e.target.value })}
                                                >
                                                    <Radio value="installation">Installation</Radio>
                                                    <Radio value="preventiveMaintainence">Preventive Maintainence</Radio>
                                                    <Radio value="breakdownCall">Breakdown Call</Radio>
                                                    <Radio value="update">Update</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Label> */}

                                            </div>

                                            <p className="font-semibold">Whom you may concern:</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <Label>
                                                    <span>Optional Representative Department:</span>
                                                    <Form.Item>
                                                        <Select
                                                            value={this.state.optionalRepresentativeDepartment}
                                                            onChange={(e) => this.setState({optionalRepresentativeDepartment: e.target.value})}>

                                                            <Option key="" value="">Optional Representative Department
                                                                1</Option>

                                                        </Select>
                                                    </Form.Item>
                                                </Label>
                                                <Label>
                                                    <span>Optional Representative Name:</span>
                                                    <Form.Item
                                                        value={this.state.optionalRepresentativeName}
                                                        onChange={(e) => this.setState({optionalRepresentativeName: e.target.value})}
                                                    >
                                                        <Input/>

                                                    </Form.Item>
                                                </Label>
                                                <Label>
                                                    <span>Optional Representative Contact:</span>
                                                    <Form.Item
                                                        value={this.state.optionalRepresentativeContact}
                                                        onChange={(e) => this.setState({optionalRepresentativeContact: e.target.value})}
                                                    >
                                                        <Input/>

                                                    </Form.Item>
                                                </Label>
                                            </div>


                                            <Form.Item>
                                                <Button onClick={this.handleSubmit} type="primary" htmlType="submit">
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </div>


                            {/*Breakdown Call Table Section */}
                            <div className="">
                                <p className="font-semibold">
                                    Breakdown Call Table Details
                                </p>
                            </div>
                            <div className="">
                                {/* Tables */}
                                <TableContainer className="mb-8">
                                    <Table>
                                        <TableHeader>
                                            <tr>
                                                <TableCell>Department</TableCell>
                                                <TableCell>Equipment</TableCell>
                                                <TableCell>Serial Number</TableCell>
                                                <TableCell>Fault Occured Date</TableCell>
                                                <TableCell>Fault Occured Time</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </tr>
                                        </TableHeader>
                                        <TableBody>

                                            {/* {
                                        this.state.issues.map((issue) => {
                                            return  */}
                                            <TableRow key="">
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Intensive Care
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Machine 2-2-2
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                Serial Number 0000002
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                2021-01-23
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                13:00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-4">
                                                        <Button layout="link" size="icon" aria-label="Edit"
                                                                onClick={() => this.setInfoModalVisible(true)}>
                                                            <InfoIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                        <Button layout="link" size="icon" aria-label="Edit">
                                                            <EditIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                        <Button layout="link" size="icon" aria-label="Delete">
                                                            <TrashIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                            {/* })} */}

                                        </TableBody>
                                    </Table>
                                    <TableFooter>

                                    </TableFooter>
                                </TableContainer>
                            </div>
                        </div> : ''
                    }
                </div>

                {/* Breakdown Call Info Modal */}
                <Modal
                    width={650}
                    title="Breakdown Call Info"
                    centered
                    visible={this.state.infoModalVisible}
                    onCancel={() => this.setInfoModalVisible(false)}
                    className="z-50"
                >
                    <p className="font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="font-bold">Error Images</p>
                    <div>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={imageList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                        </Upload>
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
                                <span className="font-semibold">Department Name: </span> Lab
                            </div>
                            <div>
                                <span className="font-semibold">Representative Name: </span> Representative 1
                            </div>
                            <div>
                                <span className="font-semibold">Contact Number: </span> 98675278267
                            </div>
                        </div>
                    </div>
                    <p className="font-bold mb-0">Called For</p>
                    <div>
                        <span
                            class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-green-100 bg-green-700 rounded">Installation</span>
                        <span
                            class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-indigo-100 bg-indigo-700 rounded">Preventive Maintainence</span>
                        <span
                            class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-red-100 bg-red-700 rounded">Breakdown Call</span>
                        <span
                            class="inline-flex items-center justify-center mx-2 px-2 py-1 text-base font-bold leading-none text-yellow-100 bg-yellow-500 rounded">Update</span>
                    </div>
                </Modal>

                {/* Edit Modal */}
                {/* <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
                    <ModalHeader>Edit Region</ModalHeader>
                    <ModalBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
                        voluptatem tempore!
                    </ModalBody>
                    <ModalFooter>
                        <div className="hidden sm:block">
                            <Button layout="outline" onClick={closeEditModal}>
                                Cancel
                            </Button>
                        </div>
                        <div className="hidden sm:block">
                            <Button>Edit</Button>
                        </div>
                        <div className="block w-full sm:hidden">
                            <Button block size="large" layout="outline" onClick={closeEditModal}>
                                Cancel
                            </Button>
                        </div>
                        <div className="block w-full sm:hidden">
                            <Button block size="large">
                                Edit
                            </Button>
                        </div>
                    </ModalFooter>
                </Modal> */}


                {/* Delete Modal */}
                {/* <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
                <ModalHeader>Delete Region</ModalHeader>
                <ModalBody>
                    Lorem, ipsum dolor sit
                </ModalBody>
                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={closeDeleteModal}>
                            Cancel
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button>Delete</Button>
                    </div>
                    <div className="block w-full sm:hidden">
                        <Button block size="large" layout="outline" onClick={closeDeleteModal}>
                            Cancel
                        </Button>
                    </div>
                    <div className="block w-full sm:hidden">
                        <Button block size="large">
                            Delete
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
             */}
            </div>
        )
    }
}

export default NewProblemReporting