import React, { useState, useEffect } from 'react'
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Button,
    Pagination,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../../icons'

import response from '../../utils/demo/tableData'
import SectionTitle from '../../components/Typography/SectionTitle'
// make a copy of the data, for the second table
const response2 = response.concat([])

export default function Region() {

    // setup pages control for every table
    const [pageTable2, setPageTable2] = useState(1)

    // setup data for every table
    const [dataTable2, setDataTable2] = useState([])

    // pagination setup
    const resultsPerPage = 5
    const totalResults = response.length



    // pagination change control
    function onPageChangeTable2(p) {
        setPageTable2(p)
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
    }, [pageTable2])


    //Opening Modal Function
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    function openEditModal() {
        setIsEditModalOpen(true)
    }

    function closeEditModal() {
        setIsEditModalOpen(false)
    }

    function openDeleteModal() {
        setIsDeleteModalOpen(true)
    }

    function closeDeleteModal(){
        setIsDeleteModalOpen(false)
    }

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
                            <p class="font-bold text-sm uppercase mb-2 text-blue-darker">Item description:</p>
                            <span class="text-grey-darker">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </span>
                            <div class="pt-4">
                                <span class="uppercase bg-green text-white font-bold p-2 text-xs shadow rounded">25% off</span>
                                <span class="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">stock: 3</span>
                            </div>
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
                                {dataTable2.map((user, i) => (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{user.name}</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-4">
                                                <Button onClick={openEditModal} layout="link" size="icon" aria-label="Edit">
                                                    <EditIcon className="w-5 h-5" aria-hidden="true" />
                                                </Button>
                                                <Button onClick={openDeleteModal} layout="link" size="icon" aria-label="Delete">
                                                    <TrashIcon className="w-5 h-5" aria-hidden="true" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TableFooter>
                            <Pagination
                                totalResults={totalResults}
                                resultsPerPage={resultsPerPage}
                                onChange={onPageChangeTable2}
                                label="Table navigation"
                            />
                        </TableFooter>
                    </TableContainer>
                </div>
            </div>


            {/* Edit Modal */}
            <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
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
            </Modal>


            {/* Delete Modal */}
            <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
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
            
        </div>
    )
}
