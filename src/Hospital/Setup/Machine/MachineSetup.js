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
import { EditIcon, TrashIcon } from '../../../icons'
import axiosInstance from '../../../api'



import { Form, Button, Input, Select } from "antd"



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

class MachineSetup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            subCategory: '',
            machineName: '',
            modelName: '',
            machineType: '',
            categories: [],
            machines: [],
            departments: [],

        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.getAllMachines();
        this.getOnlyMachine();
        this.getAllDepartments();
    }

    

    getAllDepartments() {
        axiosInstance.get('/department',
        ).then((resp) => {
            this.setState({
                departments: resp.data.departments
            })
        });
    }


    getAllMachines() {
        axiosInstance.get('/machine'
        ).then(resp => {
            this.setState({
                machines: resp.data.machines
            });
        });
    }
    getOnlyMachine() {
        axiosInstance.get('/category-only'
        ).then(resp => {
            this.setState({
                categories: resp.data.machines
            });
        });
    }

    handleSubmit(event) {
        axiosInstance.post('/machine', {
            parent_id: this.state.category,
            machine_name: this.state.machineName,
            model_name: this.state.modelName,
        }).then((resp) => {
            alert(resp.data.message);
            this.setState({ machineName: '' });
            this.setState({ category: '' });
            this.getAllMachines();
        });

    }


    render() {

        return (
            <div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                    {/* Form Section */}
                    <div className="md:col-span-1">
                        <div className="w-full border-1 shadow-md">
                            {/* Title */}
                            <div className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                <p>Machine Setup</p>
                            </div>
                            {/* Form */}
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">
                                <Form
                                    validateMessages={validateMessages}
                                >

                                    <Label>
                                        <span> Department:</span>
                                        <Form.Item >
                                        <Select
                                                            value={this.state.department}
                                                            onChange={(e) => this.setState({department: e})}>
                                                            {
                                                                this.state.departments.map((dept) => {
                                                                    return <Option key={dept.id}
                                                                                   value={dept.id}>{dept.department_name}</Option>
                                                                })

                                                            }

                                                        </Select>
                                        </Form.Item>
                                    </Label>

                                    <Label>
                                        <span>Machine Category: </span>
                                        <Form.Item>
                                            <Select defaultValue="lucy"
                                                value={this.state.category}
                                                onChange={(e) => this.setState({ category: e })}>

                                                {this.state.categories.map((machine) => {

                                                    return <Option key={machine.id} value={machine.id}>{machine.category_name}</Option>

                                                })}

                                            </Select>
                                        </Form.Item>
                                    </Label>
                                    <Label>
                                        <span>Machine Subcategory: </span>
                                        <Form.Item>
                                            <Select defaultValue="" 
                                                value={this.state.subCategory}
                                                onChange={(e) => this.setState({ subCategory: e })}>

                                                <Option key="subcategory1" value="subcategory1">Subcategory 1</Option>

                                            </Select>
                                        </Form.Item>
                                    </Label>
                                    <Label>
                                        <span>Machine Name: </span>
                                        <Form.Item
                                            value={this.state.machineName}
                                            onChange={(e) => this.setState({ machineName: e.target.value })}
                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                        >
                                            <Input />

                                        </Form.Item>
                                    </Label>
                                    <Label>
                                        <span>Serial Number: </span>
                                        <Form.Item
                                            value={this.state.modelName}
                                            onChange={(e) => this.setState({ modelName: e.target.value })}
                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                        >
                                            <Input />
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
                    <div className="md:col-span-2">
                        {/* Tables */}
                        <TableContainer className="mb-8">
                            <Table>
                                <TableHeader>
                                    <tr>
                                        <TableCell>Department</TableCell>
                                        <TableCell>Category</TableCell>
                                        <TableCell>Subcategory</TableCell>
                                        <TableCell>Machine Name</TableCell>
                                        <TableCell>Serial Number</TableCell>
                                        {/* Machine type is removed from here and machine subcategory is added */}
                                        <TableCell>Actions</TableCell>

                                    </tr>
                                </TableHeader>
                                <TableBody>

                                    {
                                        this.state.machines.map((machine) => {
                                            return <TableRow key={machine.id}>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                {/* Department Name */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                {/* Machine Category comes here */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">
                                                                {/* Machine Subcategory comes here */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">{machine.machine_name}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">{machine.model_name}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                {/* Machine type is removed from here and machine subcategory is added */}
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

export default MachineSetup