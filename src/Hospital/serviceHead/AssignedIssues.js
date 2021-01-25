import React from 'react'

import { Drawer, List, Avatar, Divider, Col, Row, Card, Select, DatePicker, Radio, Button } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
const listData = [{
    issueNo: `Issue No #1 (in progress)`,
    hospitalName: 'CMC',
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

const reviewTabList = [
    {
        key: 'ReviewOne',
        tab: 'Review 1',
    },
    {
        key: 'ReviewTwo',
        tab: 'Review 2',
    },
    {
        key: 'ReviewThree',
        tab: 'Review 3',
    },
];

const reviewContentList1 = [
    {
        workDone: '1. C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.',
        date: '2020-20-20'
    },
]

const reviewContentList = {
    ReviewOne: <p>Review 1</p>,
    ReviewTwo: <p>Review 2</p>,
    ReviewThree: <p>Review 3</p>,
};

class AssignedIssues extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            noTitleKey: 'ReviewOne',
        };
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


    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
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
                        <Radio.Group
                            defaultValue="all"
                            optionType="button"
                            buttonStyle="solid"
                        >
                            <Radio.Button value="all">All</Radio.Button>
                            <Radio.Button value="assigned">Assigned</Radio.Button>
                            <Radio.Button value="completed">Completed</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="md:col-span-1">
                        <Button type="primary">Search</Button>
                    </div>
                </div>


                <List
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
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.issueNo}
                                extra={<a onClick={this.showDrawer} key={`a-${item.id}`}>
                                    View Details
                                    </a>}>
                                <div>
                                    <p className="text-sm font-semibold mb-0">
                                        {item.hospitalName}
                                    </p>
                                    <p className="text-sm font-semibold mb-0">
                                        Assigned on: <span>{item.assignedDate}</span>
                                    </p>
                                    <p className="text-sm mb-0 text-justify">
                                        {item.problem}
                                    </p>
                                </div>
                            </Card>
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
                                title="Github"
                                content="hospitalinfo@gmail.com"
                            />
                        </Col>
                        <Col span={24}>
                            <DescriptionItem
                                title="Reviwed By"
                                content="hospitalinfo"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Card
                                bordered={false}
                                style={{ width: '100%' }}
                                tabList={reviewTabList}
                                activeTabKey={this.state.noTitleKey}
                                onTabChange={key => {
                                    this.onTabChange(key, 'noTitleKey');
                                }}
                            >
                                {reviewContentList[this.state.noTitleKey]}
                                <Row>
                                    <Col span={24}>
                                        <DescriptionItem
                                            title="Work Done"
                                            content={reviewContentList1[this.state.workDone]}
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
                            </Card>
                        </Col>
                    </Row>
                </Drawer>

            </div>
        )
    }
}

export default AssignedIssues
