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


class ReportedProblem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        };
   
    }

    componentDidMount() {
        this.getAllReportedProblem();
    }

    getAllReportedProblem() {
        axios.get('http://127.0.0.1:8000/api/issue-assign'
        ).then(resp => {
            this.setState({ 
                issues : resp.data.issueAssigns
            });
        });
    }

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

                                {
                                    this.state.issues.map( (issue) => {
                                        return<TableRow key={issue.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{issue.machine_name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{issue.problem}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{issue.occurred_date}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{issue.occurred_time}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{issue.assigned_staff}</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="inline-flex px-3 text-xs rounded-full text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100">
                                                        {issue.status}
                                                    </p>
                                                </div>
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

            </div>
        )
    }
}

export default ReportedProblem