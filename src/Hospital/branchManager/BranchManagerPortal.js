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



import { Form, Button, Input, Select } from "antd"



const { Option } = Select;



class BranchManagerPortal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            issues: [],
            
         };
         
    };

    
    

    componentDidMount(){
      this.getAllIssues();
    };

    getAllIssues() {
        axios.get('http://127.0.0.1:8000/api/issue'
        ).then(resp => {
            this.setState({issues: resp.data.issues});
        })
    };
    


    render() {

        return (
            <div>

                <div className="grid grid-cols-1 gap-6 mt-2">
                    {/* Form Section */}
                    <div className="">
                        <div className="w-full border-1 shadow-md">
                            {/* Title */}
                            <div className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                <p>Branch Manager Portal</p>
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
                                    <TableCell>Machine Name</TableCell>
                                    <TableCell>Problem</TableCell>
                                    <TableCell>Fault occured Date/Time</TableCell>
                                    <TableCell>Assign To</TableCell>
                                    <TableCell>Staff Status</TableCell>
                                    <TableCell>Actions</TableCell>         
                                </tr>
                            </TableHeader>

                            <TableBody>       
                                    <TableRow>
                                        <TableCell >
                                            <div style={{width: "20px"}} className="flex items-center text-sm">
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
                                                        Staff Name
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">
                                                        Work in Progress
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
                    </div>
                </div>


                {/* Edit Modal */}
                <Modal show={this.state.show} onClose={this.hideModal}>
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

export default BranchManagerPortal