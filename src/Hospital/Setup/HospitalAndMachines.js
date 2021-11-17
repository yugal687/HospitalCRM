import React from 'react'
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    // Pagination,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // ModalFooter,
    Label, HelperText,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../../icons'
import axios from "axios"



import { Form, Button, Input, Select, DatePicker, InputNumber, Checkbox, Modal } from "antd"



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

class HospitalAndMachines extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hospital: '',
            department: '',
            category: '',
            subCategory: '',
            machine: '',
            serialNumber: '',
            installationDate: '',
            warrantyPeriod: '',
            annualMaintainenceContract: false,
            comprehensiveMaintainenceContract: false,
            AMCPeriod: '',
            CMCPeriod: '',
            machines: [],
            hospitals: [],
            //Details Modal Visibility
            modalVisible: false
        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    detailsModal(modalVisible) {
        this.setState({ modalVisible });
    }

    componentDidMount() {
        this.getAllMachines();
        this.getHospitalSetup();
    }

    getAllMachines() {
        axios.get('http://127.0.0.1:8000/api/machine'
        ).then(resp => {
            this.setState({ machines: resp.data.machines });
        });
    }

    getHospitalSetup() {
        axios.get('http://127.0.0.1:8000/api/hospital',
        ).then((resp) => {
            this.setState({
                hospitals: resp.data.hospitals
            })
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.hospital + this.state.machine
        );


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
                                <p>Hospital And Machine Integration Setup</p>
                            </div>
                            {/* Form */}
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded-b-md">
                                <Form>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="sm:col-span-1">
                                            <Label>
                                                <span>Hospital Name:</span>
                                                <Form.Item>
                                                    <Select
                                                        value={this.state.hospital}
                                                        onChange={(e) => this.setState({ hospital: e.target.value })}>

                                                        {this.state.hospitals.map((hospital) => {

                                                            return <Option key={hospital.id} value={hospital.id}>{hospital.hospital_name}</Option>
                                                        })}


                                                    </Select>
                                                </Form.Item>
                                            </Label>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <Label>
                                                <span>Department:</span>
                                                <Form.Item>
                                                    <Select
                                                        value={this.state.department}
                                                        onChange={(e) => this.setState({ department: e.target.value })}>

                                                            <Option key="" value="">Department 1</Option>

                                                    </Select>
                                                </Form.Item>
                                            </Label>
                                        </div>
                                        {/* Machine Category */}
                                        <div className="sm:col-span-1">
                                            <Label>
                                                <span>Machine Category:</span>
                                                <Form.Item>
                                                    <Select
                                                        value={this.state.category}
                                                        onChange={(e) => this.setState({ category: e.target.value })}>
                                                            
                                                            <Option key="" value="">Machine Cateogry 1</Option>

                                                    </Select>
                                                </Form.Item>
                                            </Label>
                                        </div>
                                        {/* Subcategory */}
                                        <div className="sm:col-span-1">
                                            <Label>
                                                <span>Machine Subcategory:</span>
                                                <Form.Item>
                                                    <Select
                                                        value={this.state.subCategory}
                                                        onChange={(e) => this.setState({ subCategory: e.target.value })}>
                                                            
                                                            <Option key="" value="">Subcategory 1</Option>

                                                    </Select>
                                                </Form.Item>
                                            </Label>
                                        </div>
                                        {/* Machine Name */}
                                        <div className="sm:col-span-1">
                                            <Label>
                                                <span> Machine Name:</span>
                                                <Form.Item>
                                                    <Select
                                                        value={this.state.machine}
                                                        onChange={(e) => this.setState({ machine: e.target.value })}>

                                                        {this.state.machines.map((machine) => {

                                                            return <Option key={machine.id} value={machine.id}>{machine.machine_name}</Option>
                                                        
                                                        })}


                                                    </Select>
                                                </Form.Item>
                                            </Label>
                                        </div>
                                        {/* Machine Serial Number */}
                                        <div className="sm:col-span-1">
                                            <Label>
                                                <span> Machine Serial Number:</span>
                                                <Form.Item>
                                                    <Select 
                                                        value={this.state.machine}
                                                        onChange={(e) => this.setState({ machine: e.target.value })}>

                                                            <Option key="" value="">Serial N0. - 00001</Option>
                                                        
                                                    </Select>
                                                </Form.Item>
                                            </Label>
                                        </div>
                                        
                                        <div className="col-span-1">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="col-span-1">
                                                    <Label>
                                                        <span> Installation Date:</span>
                                                        <Form.Item>
                                                            <DatePicker
                                                                style={{width: "250px"}}
                                                                onChange={(date, dateString) => this.setState({ installationDate: dateString })}
                                                            />
                                                        </Form.Item>
                                                    </Label>
                                                </div>
                                                <div className="col-span-1">
                                                    <Label>
                                                        <span>Warranty Period (in months):</span>
                                                        <Form.Item
                                                            value={this.state.warrantyPeriod}
                                                            onChange={(e) => this.setState({ warrantyPeriod: e.target.value })}
                                                        >
                                                            <InputNumber size="large" min={0} defaultValue={6}/>
                                                        </Form.Item>
                                                    </Label>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="sm:col-span-1">
                                            <div className="grid grid-cols-2">
                                                <div>
                                                    <Form.Item >
                                                        <Checkbox
                                                            onChange={(e) => this.setState({ annualMaintainenceContract: e.target.checked })}
                                                        >
                                                            Annual Maintainence Contract(AMC)
                                                        </Checkbox>
                                                    </Form.Item>
                                                    <Label>
                                                        <span>AMC Period (in years):</span>
                                                        <Form.Item
                                                            value={this.state.warrantyPeriod}
                                                            onChange={(e) => this.setState({ AMCPeriod: e.target.value })}
                                                        >
                                                            <InputNumber size="large" min={0} defaultValue={1}/>
                                                        </Form.Item>
                                                    </Label>
                                                </div>
                                                <div>
                                                    <Form.Item >
                                                        <Checkbox
                                                            onChange={(e) => this.setState({ comprehensiveMaintainenceContract: e.target.checked })}
                                                        >
                                                            Comprehensive Maintainence Contract (CMC)
                                                        </Checkbox>
                                                    </Form.Item>
                                                    <Label>
                                                        <span>CMC Period (in years):</span>
                                                        <Form.Item
                                                            value={this.state.warrantyPeriod}
                                                            onChange={(e) => this.setState({ CMCPeriod: e.target.value })}
                                                        >
                                                            <InputNumber size="large" min={0} defaultValue={1}/>
                                                        </Form.Item>
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    

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
                                        <TableCell>Hospital Name</TableCell>
                                        <TableCell>Department</TableCell>
                                        <TableCell>Machine</TableCell>
                                        <TableCell>Installation Date</TableCell>
                                        <TableCell>Warranty Period</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </tr>
                                </TableHeader>
                                <TableBody>

                                    <TableRow>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{this.state.hospital}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">
                                                        {/* Department */}
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{this.state.machine}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">
                                                        {/* Installation Date */}
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">
                                                        {/* Warranty Period */}
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-4">
                                                <Button layout="link" size="icon" aria-label="Edit" onClick={() => this.detailsModal(true)}>
                                                    Details
                                                </Button>
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
                <Modal
                    title="Hospital - Machines Setup Details"
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.detailsModal(false)}
                    onCancel={() => this.detailsModal(false)}
                    >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>

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

export default HospitalAndMachines