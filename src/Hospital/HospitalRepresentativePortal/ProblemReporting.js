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
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label, HelperText,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../../icons'
import axios from "axios"


import { Form, Button, Input, Select, DatePicker, TimePicker } from "antd"
import moment from 'moment';
const { Option } = Select;

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

class ProblemReporting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            machine_id: '',
            problem: '',
            issue_occured_date: '',
            issue_occured_time: '',
            machines: [],
            issues: [],
        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(){

    }

    componentDidMount(){
        this.getAllMachines();
        this.getAllIssues();
    }

    getAllMachines() {
        axios.get('http://127.0.0.1:8000/api/machine'
        ).then(resp => {
            this.setState({ 
                machines : resp.data.machines
            });
        });
    }

    getAllIssues() {
        axios.get('http://127.0.0.1:8000/api/issue'
        ).then(resp => {
            this.setState({ 
                issues : resp.data.issues
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
    render() {
        return (
            <div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
                    {/* Form Section */}
                    <div className="sm:col-span-1">
                        <div className="w-full border-1 shadow-md">
                            {/* Title */}
                            <div className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                <p>Problem Reporting</p>
                            </div>
                            {/* Form */}
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">
                                <Form
                                    validateMessages={validateMessages}
                                >

                                    {/* Select Equipment */}
                                    <Label>
                                        <span> Select Equipment:</span>
                                        <Form.Item >
                                            <Select
                                                placeholder="Select an equipment with problem"
                                                value={this.state.machine_id}
                                                onChange={(e) => this.setState({ machine_id: e})}>

                                                    { this.state.machines.map((machine) => {

                                                    return<Option key={machine.id} value={machine.id}>{machine.machine_name}</Option>
                                                    })}
                                            </Select>
                                        </Form.Item>
                                    </Label>

                                    <Label>
                                        <span>Problem:</span>
                                        <Form.Item
                                            value={this.state.problem}
                                            onChange={(e) => this.setState({ problem: e.target.value })}
                                            rules={[{ required: true, }]}
                                        >
                                            <Input.TextArea rows={4} />

                                        </Form.Item>
                                    </Label>


                                    <Label>
                                        <span> Problem Occured Date:</span>
                                        <Form.Item   
                                            rules={[{ required: true, }]}
                                        >
                                            <DatePicker onChange={(date, dateString) => this.setState({ issue_occured_date: dateString })} />
                                        </Form.Item>
                                    </Label>

                                    <Label>
                                        <span> Problem Occured Time:</span>
                                        <Form.Item
                                            rules={[{ required: true, }]}
                                        >
                                            <TimePicker onChange={(time, timeString) => this.setState({ issue_occured_time: timeString})} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                                        </Form.Item>
                                    </Label>


                                    <Form.Item >
                                        <Button onClick={this.handleSubmit} type="primary" htmlType="submit">
                                            Submit
                                            </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    {/* Table Section */}
                    <div className="sm:col-span-2">
                        {/* Tables */}
                        <TableContainer className="mb-8">
                            <Table>
                                <TableHeader>
                                    <tr>
                                        <TableCell>Equipment</TableCell>
                                        <TableCell>Problem</TableCell>
                                        <TableCell>Occured Date</TableCell>
                                        <TableCell>Occured Time</TableCell>
                                        <TableCell>Actions</TableCell>

                                    </tr>
                                </TableHeader>
                                <TableBody>

                                {
                                    this.state.issues.map( (issue) => {
                                        return <TableRow key={issue.id}>
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
                                                    <p className="font-semibold">{issue.problem}</p>
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
                                                    <p className="font-semibold">{issue.occurred_time}</p>
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
                                    })}

                                </TableBody>
                            </Table>
                            <TableFooter>

                            </TableFooter>
                        </TableContainer>
                    </div>
                </div>


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

export default ProblemReporting