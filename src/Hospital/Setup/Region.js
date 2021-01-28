import React, {useState, useEffect} from 'react'

import axiosInstance from '../../api'
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
import {EditIcon, TrashIcon} from '../../icons'


import response from '../../utils/demo/tableData'
import SectionTitle from '../../components/Typography/SectionTitle'
import UIfx from 'uifx';

import { Form, Button, Input, notification } from "antd"

const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
        message: message,
        description: description
    });
};






// make a copy of the data, for the second table
const response2 = response.concat([])

const validateMessages = {
    required: '${label} is required',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

class Region extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            regions: [],
             disabledButton: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getAllRegions();
    }

    getAllRegions() {
        axiosInstance.get('/region').then((resp) => {
            this.setState({regions: resp.data.regions})
        });
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

   

    handleSubmit(event) {

         this.setState({disabledButton : true})

            axiosInstance.post('/region', {
            region_name: this.state.name,
            
        }).then(resp => {
            
            if(resp.data.error){
                openNotificationWithIcon('error', 'Error', resp.data.error.region_name);
               
               console.log(resp.data.error); 
            }else {
                openNotificationWithIcon('success', 'Success', resp.data.message);  
                
                this.getAllRegions();
                
        }
        });
        event.preventDefault();
    }

    render() {
        let isButton = this.state.disabledButton;
        const renderButton = () => {
            
                if (!isButton) {
                    return <button onClick={this.handleSubmit} disabled type="primary" htmlType="submit" >
                         Submit
                                </button>
                }
                 return <button onClick={this.handleSubmit}   type="primary" htmlType="submit" >
                      Submit
                                </button>
        };
        
        return (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
                    {/* Form Section */}
                    <div className="sm:col-span-1">
                        <div className="w-full border-1 shadow-md">
                            {/* Title */}
                            <div
                                className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                                <p>Add region</p>
                            </div>
                            {/* Form */}
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400  rounded-b-md">
                                <Form 
                                onFinish={onFinish}
                                validateMessages={validateMessages}>

                                    <Label>
                                        <span>Region Name</span>
                                        <Form.Item
                                            
                                            value={this.state.name} onChange={this.handleChange}
                                            rules={[
                                                {
                                                  required: true,
                                                },
                                              ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Label>

                            {/* <Button disabled onClick={this.handleSubmit} type="primary" htmlType="submit">
                                Submit
                                </Button> */}
                                </Form>
                                {renderButton}

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
                                    {
                                        this.state.regions.map(region => {
                                            return <TableRow key={region.id}>
                                                <TableCell>
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">{region.region_name}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-4">
                                                        <Button layout="link" size="icon" aria-label="Edit">
                                                            <EditIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                        <Button layout="link" size="icon" aria-label="Delete">
                                                            <TrashIcon className="w-5 h-5" aria-hidden="true"/>
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        })

                                    }
                                    {/*                                     
                                    <TableRow >
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">sdsdsd</p>
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
                                    <TableRow >
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">sdsdsd</p>
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
                                    </TableRow> */}


                                </TableBody>
                            </Table>
                            <TableFooter>

                            </TableFooter>
                        </TableContainer>

                        <div>


                        </div>
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
