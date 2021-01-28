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

class SubCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            category: '',
            subCategoryName: '',
            machines: [],
            
         };

       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getAllMachines();
     }

    getAllMachines() {
        axiosInstance.get('/category-only'
        ).then(resp => {
            this.setState({machines : resp.data.machines});
           
        });
    }
    

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.category + this.state.subCategoryName 
        );
        axiosInstance.post('/machine', {
          category_name: this.state.subCategoryName,
          category_id: 1,
          parent_id: this.state.id
            
        }).then((resp) => {
            alert(resp.data.message);
            this.getAllMachines();
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
                                <p>Machine Category Setup</p>
                            </div>
                            {/* Form */}
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">
                                <Form
                                validateMessages={validateMessages}
                                >                        
                                    <Label>
                                    <Form.Item >
                                        <span> Category:</span>
                                    <Select defaultValue="lucy" style={{ width: 230 }}
                                    value={this.state.category}  
                                    onChange = {(e)=> this.setState({category : e})}>

                                        { this.state.machines.map((machine) => {

                                        return  <Option key={machine.id} value={machine.id}>{machine.category_name}</Option>
                                        })}
                                            

                                    </Select>
                                    </Form.Item>
                                    </Label>

                                    <Label>
                                        <span>Sub-Category Name:</span>
                                        <Form.Item
                                            value={this.state.subCategoryName} 
                                            onChange = {(e)=> this.setState({subCategoryName : e.target.value})}
                                            rules={[{ required: true,  }]}
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
                    <div className="">
                        {/* Tables */}
                        <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Sub-Category</TableCell>
                                    <TableCell>Actions</TableCell>
                                    
                                    
                                </tr>
                            </TableHeader>
                            <TableBody>     

                                   {
                                    this.state.machines.map( (machine) => {
                                        return  <TableRow key={machine.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{machine.category_name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                {
                                    this.state.machines.map( (machine) => {
                                        return <p key={machine.children.id} className="font-semibold">{machine.children.category_name}</p>
                                    })}
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

export default SubCategory