import React from 'react'

import { Drawer, List, Avatar, Divider, Col, Row, Card, Select, DatePicker, Radio, Button, Skeleton } from 'antd';
import { EditFilled } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const { Option } = Select;
const listData = [{
    issueNo: `Issue No #1 (in progress)`,
    hospitalName: 'Hospital name is a hospital name',
    assignedDate: '2020-01-01',
    problem:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
},
{
    issueNo: `Issue No #2 (completed)`,
    hospitalName: 'CMS',
    assignedDate: '2020-01-01',
    problem:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
},
{
    issueNo: `Issue No #3 (in progress)`,
    hospitalName: 'CMC 1',
    assignedDate: '2020-01-01',
    problem:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
},
{
    issueNo: `Issue No #4 (completed)`,
    hospitalName: 'CMS 1',
    assignedDate: '2020-01-01',
    problem:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
},
];



const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">
            {title}: <span>{content}</span>
        </p>
    </div>
);



class CompletedIssues extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }


    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="md:col-span-1">
                        <Select
                            showSearch
                            style={{ width: 300 }}
                            placeholder="Select hospital"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="hospital1">Hospital 1</Option>
                            <Option value="hospital2">Hospital 2</Option>
                            <Option value="hospital3">Hospital 3</Option>
                        </Select>
                    </div>
                    <div className="md:col-span-1">
                        <RangePicker />
                    </div>
                    <div className="md:col-span-1">
                        <Button type="primary">Filter</Button>
                    </div>
                </div>


                <List
                    itemLayout="horizontal"
                    dataSource={listData}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    footer={
                        <div>

                        </div>
                    }
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <a key="">
                                    <Button type="primary" shape="round" icon={<EditFilled />}>
                                        Edit
                                    </Button>
                                </a>
                            ]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        style={{
                                            color: '#f56a00',
                                            backgroundColor: '#fde3cf',
                                        }}
                                        >
                                        !
                                        </Avatar>
                                    }
                                    title={item.issueNo}
                                    description={item.problem}                                />
                                <div className="ml-4"
                                    style={{ width: 250 }}>
                                    <div>
                                        {item.hospitalName}
                                    </div>
                                    <div>
                                        {item.assignedDate}
                                    </div>
                                    <br/>
                                    {<a onClick={this.showDrawer} key={`a-${item.id}`}>
                                        View Details
                                    </a>}
                                </div>
                            </Skeleton>
                        </List.Item>
                    )}
                />

                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p className="site-description-item-profile-p text-base font-semibold" style={{ marginBottom: 24 }}>
                        Problem Report
                    </p>
                    <p className="site-description-item-profile-p font-semibold">Problem Details</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Hospital Name" content="CMC" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Representative Name" content="John Cena" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Machine" content="X-ray Machine" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Machine Type" content="---------" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Fault Occured Date" content="February 2,1900" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Fault Occured Time" content="---------" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Problem"
                                content="Make things as simple as possible but no simpler."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p className="site-description-item-profile-p font-semibold">Assignment Details</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Assigned To" content="Programmer 123" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Assigned Date" content="February 3,1900" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Estimated Date From" content="February 4,1900" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Estimated Date To" content="February 5,1900" />
                        </Col>
                    </Row>
                    <Divider />
                    <p className="site-description-item-profile-p font-semibold">Review On Work Done</p>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Work Done"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Date" content="February 5,1900" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="System Status" content="-------" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <p className="underline">Attended Engineers</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Name" content="AntDesign@example.com" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Date" content="-------" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Arrival Time" content="----------" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Departure Time" content="-------" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Name" content="AntDesign@example.com" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Date" content="-------" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Arrival Time" content="----------" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Departure Time" content="-------" />
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Hospital Email"
                                content="hospitalinfo@gmail.com"
                            />
                        </Col>
                        <Col span={24}>
                            <DescriptionItem
                                title="Reviwed By"
                                content="hospitalinfo"
                            />
                        </Col>
                        <Col span={24}>
                            <a>
                                <Button type="primary" shape="round" icon={<EditFilled />}>
                                    Edit
                                </Button>
                            </a>
                        </Col>
                    </Row>
                </Drawer>

            </div>
        )
    }
}

export default CompletedIssues
