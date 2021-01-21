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

const genExtra = () => (
    <>
        <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">Available</span>
        <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">On Field</span>
    </>
);

const openNotificationWithIcon = type => {
    notification[type]({
        message: 'Success',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};


class ServiceHeadPortal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            isOpen: false,
            modalVisible: false,
            expandIconPosition: 'left',
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    openModal = () => this.setState({ isOpen: true });

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
                                    <TableRow>
                                        <TableCell >
                                            <div style={{ width: "20px" }} className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">hospital name</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Arun shiwakoti</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">MRI machine </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">nut fuskiyoo, oil leak vairakhya cha </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">2021/01/12 | 1:00pm</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">
                                                        <Button type="primary" onClick={() => this.setModalVisible(true)}>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
                            </p>
                            {/* Staffs Lists */}
                            <Collapse
                                bordered={false}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                expandIconPosition={expandIconPosition}
                            >
                                <Panel header="Staff 1" key="1" style={mystyle} extra={genExtra()}>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Hospital Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Machine Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Modal Number: <span className="font-semibold">---------------</span></p>
                                        </div>
                                    </div>
                                    <Form>
                                        <div className="grid grid-cols-4">
                                            
                                                <div className="col-span-1">
                                                    <p className="text-base font-medium">Date: &nbsp;
                                                        <span className="font-semibold">
                                                            <Space direction="vertical" size={12}>
                                                                <Form.Item>
                                                                    <DatePicker />
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
                                                                    <RangePicker />
                                                                </Form.Item>
                                                            </Space>
                                                        </span></p>
                                                </div>
                                                <div className="col-span-1">
                                                    <Form.Item>
                                                        <Button type="primary" size="large" style={buttonstyle} onClick={() => openNotificationWithIcon('success')}>Assign</Button>
                                                    </Form.Item>
                                                </div>
                                            
                                        </div>
                                    </Form>
                                </Panel>
                                <Panel header="Staff 2" key="2" style={mystyle} extra={genExtra()}>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Hospital Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Machine Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Modal Number: <span className="font-semibold">---------------</span></p>
                                        </div>
                                    </div>
                                    <Form>
                                        <div className="grid grid-cols-4">
                                            
                                                <div className="col-span-1">
                                                    <p className="text-base font-medium">Date: &nbsp;
                                                        <span className="font-semibold">
                                                            <Space direction="vertical" size={12}>
                                                                <Form.Item>
                                                                    <DatePicker />
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
                                                                    <RangePicker />
                                                                </Form.Item>
                                                            </Space>
                                                        </span></p>
                                                </div>
                                                <div className="col-span-1">
                                                    <Form.Item>
                                                        <Button type="primary" size="large" style={buttonstyle} onClick={() => openNotificationWithIcon('success')}>Assign</Button>
                                                    </Form.Item>
                                                </div>
                                            
                                        </div>
                                    </Form>
                                </Panel>
                                <Panel header="Staff 3" key="3" style={mystyle} extra={genExtra()}>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Hospital Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Machine Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Modal Number: <span className="font-semibold">---------------</span></p>
                                        </div>
                                    </div>
                                    <Form>
                                        <div className="grid grid-cols-4">
                                            
                                                <div className="col-span-1">
                                                    <p className="text-base font-medium">Date: &nbsp;
                                                        <span className="font-semibold">
                                                            <Space direction="vertical" size={12}>
                                                                <Form.Item>
                                                                    <DatePicker />
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
                                                                    <RangePicker />
                                                                </Form.Item>
                                                            </Space>
                                                        </span></p>
                                                </div>
                                                <div className="col-span-1">
                                                    <Form.Item>
                                                        <Button type="primary" size="large" style={buttonstyle} onClick={() => openNotificationWithIcon('success')}>Assign</Button>
                                                    </Form.Item>
                                                </div>
                                            
                                        </div>
                                    </Form>
                                </Panel>
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