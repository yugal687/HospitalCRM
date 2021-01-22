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
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label, HelperText,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../../icons'

import { Modal, Button, Collapse, notification, DatePicker, Space } from 'antd';
import { CaretRightOutlined, SettingOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { RangePicker } = DatePicker;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const mystyle = {
    background: "#f9f9f9",
    borderRadius: "4px",
    marginBottom: "20px",
    border: "0px",
    overflow: "hidden"
};

const buttonstyle = {
    color: "#ffffff",
    backgroundColor: "#135200",
    border: "#135200"
}

const genExtra = () => (
    <>
    <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">Available</span>
    <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">On Field</span>
    </>
  );

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Success',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

class IssuesReported extends React.Component {

    state = {
        modalVisible: false,
        expandIconPosition: 'left',
    };

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        const { expandIconPosition } = this.state;

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
                                        <TableCell>Hospital Name</TableCell>
                                        <TableCell>Hospital Representative</TableCell>
                                        <TableCell>Machine</TableCell>
                                        <TableCell>Problem</TableCell>
                                        <TableCell>Issue Occured Date</TableCell>
                                        <TableCell>Issue Occured Time</TableCell>
                                        <TableCell>Review</TableCell>
                                    </tr>
                                </TableHeader>
                                <TableBody>

                                    <TableRow>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Hospital 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Hospital Representative 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">Machine 1</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center text-sm w-60">
                                                <div>
                                                    <p className="font-semibold">
                                                        Lorem ipsum dolor sit amet
                                                    </p>
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
                                                    <p>
                                                        <Button type="primary" onClick={() => this.setModalVisible(true)}>
                                                            Review
                                                        </Button>
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

                        <Modal
                            title="Assign Problem"
                            centered
                            visible={this.state.modalVisible}
                            onOk={() => this.setModalVisible(false)}
                            onCancel={() => this.setModalVisible(false)}
                            width={1000}
                        >
                            {/* Problem Title */}
                            <p className="text-lg font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
                            </p>
                            {/* Staffs Lists */}
                            <Collapse
                                bordered={false}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                expandIconPosition={expandIconPosition}
                            >
                                <Panel header="Staff 1" key="1" style={mystyle} extra={genExtra()}>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Hospital Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Machine Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Modal Number: <span className="font-semibold">---------------</span></p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                        <p className="text-base font-medium">Date: &nbsp;
                                            <span className="font-semibold">
                                                <DatePicker/>
                                            </span></p>
                                        </div>
                                        <div className="col-span-2">
                                        <p className="text-base font-medium">Estimated Time: &nbsp;
                                            <span className="font-semibold">
                                                <Space direction="vertical" size={12}>
                                                    <RangePicker />
                                                </Space>
                                            </span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <Button type="primary" style={buttonstyle} onClick={() => openNotificationWithIcon('success')}>Assign</Button>
                                        </div>
                                    </div>
                                    
                                </Panel>
                                <Panel header="Staff 2" key="2" style={mystyle} extra={genExtra()}>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Hospital Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Machine Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Modal Number: <span className="font-semibold">---------------</span></p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                        <p className="text-base font-medium">Date: &nbsp;
                                            <span className="font-semibold">
                                                <DatePicker/>
                                            </span></p>
                                        </div>
                                        <div className="col-span-2">
                                        <p className="text-base font-medium">Estimated Time: &nbsp;
                                            <span className="font-semibold">
                                                <Space direction="vertical" size={12}>
                                                    <RangePicker />
                                                </Space>
                                            </span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <Button type="primary" style={buttonstyle} onClick={() => openNotificationWithIcon('success')}>Assign</Button>
                                        </div>
                                    </div>
                                  
                                    
                                </Panel>
                                <Panel header="Staff 3" key="3" style={mystyle} extra={genExtra()}>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Hospital Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Machine Name: <span className="font-semibold">---------------</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-base font-medium">Modal Number: <span className="font-semibold">---------------</span></p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-1">
                                        <p className="text-base font-medium">Date: &nbsp;
                                            <span className="font-semibold">
                                                <DatePicker/>
                                            </span></p>
                                        </div>
                                        <div className="col-span-2">
                                        <p className="text-base font-medium">Estimated Time: &nbsp;
                                            <span className="font-semibold">
                                                <Space direction="vertical" size={12}>
                                                    <RangePicker />
                                                </Space>
                                            </span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <Button type="primary" style={buttonstyle} onClick={() => openNotificationWithIcon('success')}>Assign</Button>
                                        </div>
                                    </div>
                                    
                                </Panel>
                            </Collapse>
                        </Modal>
                    </div>
                </div>

            </div>
        )
    }
}

export default IssuesReported