import React from 'react'

import { Drawer, List, Avatar, Divider, Col, Row, Card, Select, DatePicker, Radio, Button, Upload, Modal } from 'antd';
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

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class AssignedIssues extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            noTitleKey: 'ReviewOne',

            //UploadedImageList
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            imageList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                    uid: '-2',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                    uid: '-3',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                    uid: '-4',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
            ],
        };
    }


        //Cancel Image Preview
        handleCancel = () => this.setState({ previewVisible: false });
        //Open Image Preview
        handlePreview = async file => {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
            this.setState({
                previewImage: file.url || file.preview,
                previewVisible: true,
                previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
            });
        };


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

        const { previewVisible, previewImage, previewTitle, imageList } = this.state;

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
                            <Radio.Button value="halt">Halt</Radio.Button>
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
                                extra={
                                    <span>
                                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">pending</span>
                                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-yellow-100 bg-yellow-500 rounded-full">on progress</span>
                                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">completed</span>
                                    </span>
                                }>
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
                                    <p className="mb-0 font-semibold">
                                        <a onClick={this.showDrawer} key={`a-${item.id}`}>
                                            View Details
                                        </a>
                                    </p>
                                </div>
                            </Card>
                        </List.Item>
                    )}
                />





                <Drawer
                    title="Problem Report"
                    height={600}
                    placement="bottom"
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Row>
                        <Col xs={24} md={10}>
                            <p className="site-description-item-profile-p font-semibold">Problem Details</p>
                            <Row>
                                <Col span={12}>
                                    <p><span>Department: </span> Lab </p>
                                </Col>
                                <Col span={12}>
                                    <p><span>Machine: </span> X-Ray Machine </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                <p><span>Serial Number: </span> 00001020 </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <p><span>Fault Occured Date: </span> February 2,1900 </p>
                                </Col>
                                <Col span={24}>
                                    <p><span>Fault Occured Time: </span> ------------ </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <p className="font-bold">Error Images:</p>
                                    <div>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={imageList}
                                            onPreview={this.handlePreview}
                                            onChange={this.handleChange}
                                        >
                                        </Upload>
                                        <Modal
                                            visible={previewVisible}
                                            title={previewTitle}
                                            footer={null}
                                            onCancel={this.handleCancel}
                                        >
                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                        </Modal>
                                    </div>
                                    <p className="font-semibold mb-1">Error Codes</p>
                                    <div>
                                        <ul>
                                            <li>Error Code - 0001</li>
                                            <li>Error Code - 0002</li>
                                        </ul>
                                    </div>
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
                            <p className="site-description-item-profile-p font-semibold">Hospital Details</p>
                            <Row>
                                <Col span={12}>
                                    <p><span>Hospital Name: </span> CMC </p>
                                </Col>
                                <Col span={12}>
                                    <p><span>Representative Name: </span> John Cena </p>
                                </Col>
                            </Row>
                            <p>Contact Person in case of unavailibility</p>
                            <Row>
                                <Col span={12}>
                                    <p><span>Name: </span> ----------- </p>
                                </Col> 
                                <Col span={12}>
                                    <p><span>Contact: </span> ----------- </p>
                                </Col> 
                                <Col span={12}>
                                    <p><span>Department: </span> ----------- </p>
                                </Col> 
                            </Row>
                            <Divider />
                            <p className="site-description-item-profile-p font-semibold">Assignment Details</p>
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem title="Assigned To" content="Programmer 123" />
                                </Col>
                                <Col span={24}>
                                    <DescriptionItem title="Assigned Date" content="February 3,1900" />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem title="Estimated Date From" content="February 4,1900" />
                                </Col>
                                <Col span={24}>
                                    <DescriptionItem title="Estimated Date To" content="February 5,1900" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={14}>
                            <p className="site-description-item-profile-p font-semibold">Review On Work Done</p>
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
                                        {/* Reviewed Data */}
                                        <Row>
                                            <Col span={24}>
                                                <DescriptionItem
                                                    title="Work Done"
                                                    content="This is a report on work done"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}>
                                                <DescriptionItem
                                                    title="Status"
                                                    content="on process | halt | completed"
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
                                        <Row>
                                            <Col span={24}>
                                                <Button type="primary">
                                                    Print
                                                </Button>
                                            </Col>
                                        </Row>
                                        {/* Reviewed Data */}
                                    </Card>
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem
                                        title="Hospital"
                                        content="hospital name"
                                    />
                                </Col>
                                <Col span={24}>
                                    <DescriptionItem
                                        title="Reviwed By"
                                        content="hospital representative name"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Drawer>

            </div>
        )
    }
}

export default AssignedIssues
