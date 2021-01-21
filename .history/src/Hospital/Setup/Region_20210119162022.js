import React, { useState, useEffect } from 'react'
import axios from 'axios';
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

import response from '../../utils/demo/tableData'
import SectionTitle from '../../components/Typography/SectionTitle'

import { Form, Button, Input } from "antd"

//Antreact

// make a copy of the data, for the second table
const response2 = response.concat([])

class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            regions: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/region'
        ).then(resp => {
            this.state.regions = rep.data.regions
        });
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        axios.post('http://127.0.0.1:8000/api/region', {
            region_name: this.state.name
        }).then(resp => {
            alert(resp.data.message);
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
                                <p>Add region</p>
                            </div>
                            {/* Form */}
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">
                                <Form>

                                    <Label>
                                        <span>Region Name</span>
                                        <Form.Item
                                            value={this.state.name} onChange={this.handleChange}
                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Label>

                                    <Form.Item  >
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
                                        <TableCell>Region Name</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </tr>
                                </TableHeader>
                                <TableBody>
{        this.state.regions.map()

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

export default Region