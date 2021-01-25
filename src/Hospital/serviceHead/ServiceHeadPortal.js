import React, { useState, useEffect } from 'react'
import {
    Table,
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
import axios from "axios"


import { Form, Button, Input, Select, Modal, Collapse, notification, DatePicker, Space } from "antd"
import { CaretRightOutlined, SettingOutlined } from '@ant-design/icons';
const { Option } = Select;
const { Panel } = Collapse;
const { RangePicker } = DatePicker;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const mystyle = {
    background: "#f9f9f9",
    borderRadius: "4px",
    marginBottom: "20px",
    border: "0px",
    overflow: "hidden"
};

const buttonstyle = {
    color: "#ffffff",
    backgroundColor: "#135200",
    border: "#135200"
}

const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
        message: message,
        description: description
    });
};


class ServiceHeadPortal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            // testIssues: [
            //     {
            //         'id': 1, 'hospitalName': 'Hospital1', 'hr': 'prakhsh',
            //         'machine_type': 'MRI Machine',
            //         'problem': 'This is problem 1', 'fault_occured': Date.now()
            //     },
            //     {
            //         'id': 2, 'hospitalName': 'Hospital1', 'hr': 'prakhsh',
            //         'machine_type': 'CT Machine',
            //         'problem': 'This is problem 2', 'fault_occured': Date.now()
            //     },
            //     {
            //         'id': 3, 'hospitalName': 'Hospital1', 'hr': 'prakhsh',
            //         'machine_type': 'LAB Machine',
            //         'problem': 'This is problem 3', 'fault_occured': Date.now()
            //     },
            //     {
            //         'id': 4, 'hospitalName': 'Hospital1', 'hr': 'prakhsh',
            //         'machine_type': 'REM Machine',
            //         'problem': 'This is problem 4', 'fault_occured': Date.now()
            //     },
            // ],
            isOpen: false,
            modalVisible: false,
            expandIconPosition: 'left',
            issueId: 0,
            staff: [],
            estimatedTime: '',
            date: '',
            testStaff: [
                { 'name': 'Staff1', 'id': 1, 'on_progress': true },
                { 'name': 'Staff2', 'id': 2, 'on_progress': true },
                { 'name': 'Staff3', 'id': 3, 'on_progress': false },
                { 'name': 'Staff4', 'id': 4, 'on_progress': false },
                { 'name': 'Staff5', 'id': 5, 'on_progress': false },
            ],


            selectedHospitalProblem: { 'hospitalName': '', 'machine_type': '', 'problem': '', 'problem_id': 0 },
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    setModalVisible(modalVisible, issueId) {
        this.setState({ modalVisible });
        this.setState({ issueId: issueId });
        //call axios request to fetch the staffs 
        //getDetalOfStaff()
        alert(this.state.modalVisible);
        if (!this.state.modalVisible) {
            this.setSelectedHospitalProbelm(issueId);
        }
    }

    setSelectedHospitalProbelm = (issueId) => {
        let selectedProblem = this.state.issues.filter(issue => { return issue.issue_id == issueId });
        console.log(selectedProblem);
        this.setState(prevState => ({
            ...prevState, selectedHospitalProblem: {
                ...prevState.selectedHospitalProblem,
                hospitalName: selectedProblem[0].hospital_name,
                machine_type: selectedProblem[0].machine_name,
                problem: selectedProblem[0].problem,
                issue_id: selectedProblem[0].issue_id,
            },
        }));
    }

    getDetailOfStaff = () => {

    }

    assignTask = (message, staffId) => {
        // console.log(estimatedTime);

        axios.post('http://127.0.0.1:8000/api/issue-assign', {
            'onField_user': staffId,
            'issue_id': this.state.selectedHospitalProblem.problem_id,
            'start_date':this.state.estimatedTime[0],
            'end_date':this.state.estimatedTime[1],
            'assign-date': this.state.date,
            //k k chahinxa thapa la...  maile thapaina sayad tyo 2 ta date binding garne hola hai
        }).then(resp => {

        }).catch();

        openNotificationWithIcon(message, 'Success', 'Sucessfullt assigned Task to Ground Staff');
    }

    openModal = (issueId) => {
        //        alert(issueId);
        this.setState({ isOpen: true });
    }


    closeModal = () => this.setState({ isOpen: false });

    componentDidMount() {
        this.getAllIssues();
    };

    getAllIssues() {
        axios.get('http://127.0.0.1:8000/api/issue'
        ).then(resp => {
             this.setState({ issues: resp.data.issues });
        })
    };

    

    render() {
        const genExtraTest = (on_progress) => {
            return on_progress ? <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">Available</span>
                : <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">On Field</span>
        };

        const { expandIconPosition } = this.state;
        return (
            <div>

                <div className="grid grid-cols-1 gap-6 mt-2">
                    {/* Form Section */}
                    <div className="">
                        <div className="w-full border-1 shadow-md">
                            {/* Title */}
                            <div className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                <p>Service Head portal</p>
                            </div>
                            {/* Form */}
                            {/* <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">
                                
                            </div> */}
                        </div>
                    </div>
                    {/* Table Section */}
                    <div className="">
                        {/* Tables */}
                        <TableContainer className="mb-8">
                            <Table>
                                <TableHeader>
                                    <tr>
                                        <TableCell>Hospital Name</TableCell>
                                        <TableCell>Hospital Representative Name</TableCell>
                                        <TableCell>Machine Type</TableCell>
                                        <TableCell>Problem</TableCell>
                                        <TableCell>Fault occured Date/Time</TableCell>
                                        <TableCell>Assign To</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </tr>
                                </TableHeader>

                                <TableBody>
                                    {this.state.issues.map((issue) => {
                                        return <TableRow key={issue.id}>
                                            <TableCell >
                                                <div style={{ width: "20px" }} className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{issue.hospital_name}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{issue.hospital_representative}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{issue.machine_name}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{issue.problem} </p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{issue.occurred_date}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">
                                                            <Button type="primary" onClick={() => this.setModalVisible(true, issue.issue_id)}>
                                                                Assign To
                                                        </Button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center space-x-4">
                                                    <Button layout="link" size="icon" aria-label="Edit">
                                                        <EditIcon className="w-5 h-5" aria-hidden="true" />
                                                    </Button>
                                                    <Button layout="link" size="icon" aria-label="Delete">
                                                        <TrashIcon className="w-5 h-5" aria-hidden="true" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    })

                                    }
                                </TableBody>
                            </Table>
                            <TableFooter>

                            </TableFooter>
                        </TableContainer>

                        <Modal
                            title="Assign Problem"
                            centered
                            visible={this.state.modalVisible}
                            onOk={() => this.setModalVisible(false)}
                            onCancel={() => this.setModalVisible(false)}
                            width={1000}
                        >
                            {/* Problem Title */}
                            <p className="text-lg font-bold">
                                {this.state.selectedHospitalProblem.problem}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
                            </p>
                            {/* Staffs Lists */}
                            <Collapse
                                bordered={false}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                expandIconPosition={expandIconPosition}
                            >
                                {
                                    this.state.testStaff.map(staffs => {
                                        return <Panel header={staffs.name} key={staffs.id} style={mystyle} extra={genExtraTest(staffs.on_progress)}>
                                            <div className="grid grid-cols-4">
                                                <div className="col-span-1">
                                                    <p className="text-base font-medium">Hospital Name: <span className="font-semibold">
                                                        {this.state.selectedHospitalProblem.hospitalName}</span></p>
                                                </div>
                                                <div className="col-span-1">
                                                    <p className="text-base font-medium">Machine Name: <span className="font-semibold">
                                                        {this.state.selectedHospitalProblem.machine_type}</span></p>
                                                </div>
                                                <div className="col-span-1">
                                                    <p className="text-base font-medium">Problem:<span className="font-semibold">
                                                        {this.state.selectedHospitalProblem.problem}
                                                    </span></p>
                                                </div>
                                            </div>
                                            <Form>
                                                <div className="grid grid-cols-4">

                                                    <div className="col-span-1">
                                                        <p className="text-base font-medium">Date: &nbsp;
                                                    <span className="font-semibold">
                                                                <Space direction="vertical" size={12}>
                                                                    <Form.Item>
                                                                        <DatePicker onChange={(value, dateString) => this.setState({ date: dateString })} />
                                                                    </Form.Item>
                                                                </Space>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <p className="text-base font-medium">Estimated Time: &nbsp;
                                                <span className="font-semibold">
                                                                <Space direction="vertical" size={12}>
                                                                    <Form.Item>
                                                                        <RangePicker
                                                                            onChange={(value, dateString) => this.setState({ estimatedTime: dateString })} />
                                                                    </Form.Item>
                                                                </Space>
                                                            </span></p>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <Form.Item>
                                                            <Button type="primary" size="large" style={buttonstyle} onClick={() => this.assignTask('success', staffs.id)}>Assign</Button>
                                                        </Form.Item>
                                                    </div>

                                                </div>
                                            </Form>
                                        </Panel>
                                    })
                                }
                            </Collapse>
                        </Modal>

                    </div>
                </div>


                {/* Edit Modal */}
                {/* <Modal show={this.state.show} onClose={this.hideModal}>
                <ModalHeader>Edit Region</ModalHeader>
                <ModalBody>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
                    voluptatem tempore!
                </ModalBody>
                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={this.hideModal}>
                            Cancel
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button>Edit</Button>
                    </div>
                    <div className="block w-full sm:hidden">
                        <Button block size="large" layout="outline" onClick={this.hideModal}>
                            Cancel
                        </Button>
                    </div>
                    <div className="block w-full sm:hidden">
                        <Button block size="large">
                            Edit
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
 */}

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

export default ServiceHeadPortal