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


class ReportedProblem extends React.Component {


    render() {
        return (
            <div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
                    {/* Table Section */}
                    <div className="sm:col-span-3">
                        {/* Tables */}
                        <TableContainer className="mb-8">
                            <Table>
                                <TableHeader>
                                    <tr>
                                        <TableCell>Equipment</TableCell>
                                        <TableCell>Problem</TableCell>
                                        <TableCell>Issue Occured Date</TableCell>
                                        <TableCell>Issue Occured Time</TableCell>
                                        <TableCell>Assigned To</TableCell>
                                        <TableCell>Status</TableCell>
                                    </tr>
                                </TableHeader>
                                <TableBody>

                                    <TableRow>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Equipmwnt 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Problem 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">2020/01/01</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">12:00</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Asinged Staff 1</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="inline-flex px-3 text-xs rounded-full text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100">
                                                        completed
                                                    </p>
                                                </div>
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

            </div>
        )
    }
}

export default ReportedProblem