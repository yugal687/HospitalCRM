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
import axios from "axios"



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

class Staffs extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            Name: '',
            Email: '',
            Address: '',
            ContactNo: '',
            Region: '',
            Role: '',
            regions: [],
            users: [],
            roles: [],
         };

       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getRegion();
        this.getStaffs();
        this.getRole();
    }

    getRole() {
        axios.get('http://127.0.0.1:8000/api/role', 
        ).then((resp) => {
            this.setState({roles: resp.data.roles })
        });
    }

    getRegion(){
        axios.get('http://127.0.0.1:8000/api/region', 
        ).then((resp) => {
            this.setState({regions: resp.data.regions })
        });
    }

    
    getStaffs(){
        axios.get('http://127.0.0.1:8000/api/user', 
        ).then((resp) => {
            this.setState({
                users: resp.data.users
             })
        });
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.Name + this.state.Address + this.state.Email + this.state.ContactNo +
        this.state.Region + this.state.Role
        );
        axios.post('http://127.0.0.1:8000/api/user', {
            name: this.state.Name,
            address: this.state.Address,
            email:  this.state.Email,
            contact_number: this.state.ContactNo,
            region_id: this.state.Region,
            role_id: this.state.Role,

        }).then((resp) => {
            alert(resp.data.message);
            this.getStaffs();
        });

        event.preventDefault();
    }


    render() {

        return (
            <div>

                <div className="grid grid-cols-1 gap-6 mt-2">
                    {/* Form Section */}
                    <div className="">
                        <div className="w-full border-1 shadow-md">
                            {/* Title */}
                            <div className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                <p>Staffs Setup</p>
                            </div>
                            {/* Form */}
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">
                                <Form
                                validateMessages={validateMessages}
                                >
                                    <Label>
                                        <span>Name:</span>
                                        <Form.Item
                                            value={this.state.Name} 
                                            onChange = {(e)=> this.setState({Name : e.target.value})}
                                            rules={[{ required: true,  }]}
                                        >
                                            <Input />
                                            
                                        </Form.Item>
                                    </Label>
                                    <Label>
                                        <span> Address:</span>
                                        <Form.Item
                                            value={this.state.Address} 
                                            onChange = {(e)=> this.setState({Address : e.target.value})}
                                            rules={[{ required: true,   }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Label>
                                    <Label>
                                        <span> Email:</span>
                                        <Form.Item
                                            type= 'email'
                                            value={this.state.Email} 
                                            onChange = {(e)=> this.setState({Email : e.target.value})}
                                            rules={[{ required: true, }]}
                                        >
                                            <Input  />
                                        </Form.Item>
                                    </Label>
                                    <Label>
                                        <span> Contact:</span>
                                        <Form.Item
                                            value={this.state.ContactNo} 
                                            onChange = {(e)=> this.setState({ContactNo : e.target.value})}
                                            rules={[{ required: true, }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Label>

                                    <Label>
                                    <Form.Item >
                                        <span> Select Region:</span>
                                    <Select defaultValue="lucy" style={{ width: 230 }}
                                    value={this.state.Region}  
                                    onChange = {(e)=> this.setState({Region : e})}>
                                            { this.state.regions.map((region) => {

                                     return <Option key={region.id} value={region.id}>{region.region_name}</Option>
                                         }) }
                                            {/* <Option value={this.state.Region}>Jack</Option> */}
                                    </Select>
                                    </Form.Item>
                                    </Label>

                                    <Label>
                                    <Form.Item >
                                        <span> Role:</span>
                                    <Select defaultValue="lucy" style={{ width: 230 }}
                                    value={this.state.Role}  
                                    onChange = {(e)=> this.setState({Role : e})}>
                                        { this.state.roles.map((role) => {
                                         return   <Option key={role.id} value={role.id}>{role.role_name}</Option>    
                                        })}    
                                    </Select>
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
                    <div className="">
                        {/* Tables */}
                        <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Contact</TableCell>
                                    <TableCell>Region</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Actions</TableCell>
                                    
                                </tr>
                            </TableHeader>
                            <TableBody>
                            {
                                    this.state.users.map( (user) => {
                                        return  <TableRow key={user.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{user.name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{user.address}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{user.email}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{user.contact_number}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{user.region.region_name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{this.state.Role}</p>
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

export default Staffs