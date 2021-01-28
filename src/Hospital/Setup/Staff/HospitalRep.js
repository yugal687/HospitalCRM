import React from 'react'
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
    Label
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


// import { render } from '@testing-library/react'


class HospitalRep extends React.Component {
    constructor(props) {
        super()
        this.state ={
            Name: '',
            Email: '',
            Address: '',
            ContactNo: '',
            hospitalName: '',
            details: [],
            hospitals: [],
            
        }
    }

    componentDidMount(){
        this.getHospitalRepresentativeDetail();
        this.getHospitalSetup();
    }

    getHospitalSetup() {
        axiosInstance.get('/hospital', 
        ).then((resp) => {
            this.setState({
                hospitals: resp.data.hospitals
             })
        });
    }
    
    getHospitalRepresentativeDetail() {
        axiosInstance.get('/hospital-representative', 
        ).then((resp) => {
            this.setState({
                details: resp.data.hospitalRepresentatives
             })
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' 
        );
        axiosInstance.post('/hospital-representative', {
            // name: this.state.Name,
            // address: this.state.Address,
            // email:  this.state.Email,
            // contact_number: this.state.ContactNo,
            // hospital_name: this.state.hospitalName
            
        }).then((resp) => {
            alert(resp.data.message);
            this.getHospitalRepresentativeDetail();
        });

        event.preventDefault();
    }


// on page change, load new sliced data
// here you would make another server request for new data



//Opening Modal Function
// const [isEditModalOpen, setIsEditModalOpen] = useState(false)
// const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

// function openEditModal() {
//     setIsEditModalOpen(true)
// }

// function closeEditModal() {
//     setIsEditModalOpen(false)
// }

// function openDeleteModal() {
//     setIsDeleteModalOpen(true)
// }

// function closeDeleteModal(){
//     setIsDeleteModalOpen(false)
// }

render() {
    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
                {/* Form Section */}
                <div className="sm:col-span-1">
                    <div className="w-full border-1 shadow-md">
                        {/* Title */}
                        <div className="flex flex-row justify-start px-6 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-md">
                            <p>Hospital Representative</p>
                        </div>
                        {/* Form */}
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
                                             <Option value={this.state.Region}>{}</Option>
                                        
                                            {/* <Option value={this.state.Region}>Jack</Option> */}
                                    </Select>
                                    </Form.Item>
                                    </Label>

                                    <Label>
                                    <Form.Item >
                                        <span> Hospital Name:</span>
                                    <Select defaultValue="" style={{ width: 230 }}
                                    value={this.state.Role}  
                                    onChange = {(e)=> this.setState({hospitalName : e})}>

                                          { this.state.hospitals.map((hospital) => {

                                     return<Option key={hospital.id} value={hospital.id}>{hospital.hospital_name}</Option>    
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
                {/* Table Section */}
                <div className="sm:col-span-2">
                    {/* Tables */}
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Hospital Representative Name</TableCell>
                                    <TableCell>Hospital Name</TableCell>
                                    <TableCell>Actions</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                
                            { this.state.details.map((detail) => {

                                    return<TableRow>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{detail.user[0].name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{detail.hospital.hospital_name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-4">
                                                <Button  layout="link" size="icon" aria-label="Edit">
                                                    <EditIcon className="w-5 h-5" aria-hidden="true" />
                                                </Button>
                                                <Button  layout="link" size="icon" aria-label="Delete">
                                                    <TrashIcon className="w-5 h-5" aria-hidden="true" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                            })}
                            </TableBody>
                        </Table>
                        {/* <TableFooter>
                            <Pagination
                                totalResults={totalResults}
                                resultsPerPage={resultsPerPage}
                                onChange={onPageChangeTable2}
                                label="Table navigation"
                            />
                        </TableFooter> */}
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
            </Modal> */}
            
        </div>
    )
}
}


export default HospitalRep