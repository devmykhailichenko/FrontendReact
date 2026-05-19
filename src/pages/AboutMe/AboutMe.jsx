import {
    Avatar,
    Button,
    Card,
    Col,
    Divider,
    Flex,
    Layout,
    Progress,
    Row,
    Space,
    Tag,
    Timeline,
    Typography
} from "antd";

import {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    GithubOutlined,
    LinkedinOutlined
} from "@ant-design/icons";

import "antd/dist/reset.css";

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function AboutMe() {
    return (
        <Layout>
            <Header style={{ background: "#1677ff", padding: "24px 48px", height: "auto" }}>
                <Flex align="center" gap={24}>
                    <Avatar size={96}>IM</Avatar>

                    <div>
                        <Title level={1} style={{ color: "white", margin: 0 }}>
                            Ihor Mykhailichenko
                        </Title>

                        <Text style={{ color: "white", fontSize: 18 }}>
                            Junior Frontend Developer
                        </Text>
                    </div>
                </Flex>
            </Header>

            <Content style={{ padding: 48, background: "#f5f5f5" }}>
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                        <Card title="Contacts">
                            <Space direction="vertical" size={12}>
                                <Text>
                                    <MailOutlined /> ihor@example.com
                                </Text>

                                <Text>
                                    <PhoneOutlined /> +380 00 000 00 00
                                </Text>

                                <Text>
                                    <EnvironmentOutlined /> Kyiv, Ukraine
                                </Text>

                                <Text>
                                    <GithubOutlined /> github.com/ihor
                                </Text>

                                <Text>
                                    <LinkedinOutlined /> linkedin.com/in/ihor
                                </Text>
                            </Space>
                        </Card>

                        <Card title="Skills" style={{ marginTop: 24 }}>
                            <Space direction="vertical" style={{ width: "100%" }}>
                                <Text>HTML / CSS</Text>
                                <Progress percent={15} />

                                <Text>JavaScript</Text>
                                <Progress percent={75} />

                                <Text>React</Text>
                                <Progress percent={65} />

                                <Text>Redux</Text>
                                <Progress percent={55} />
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={24} md={16}>
                        <Card title="About me">
                            <Paragraph>
                                I am a frontend developer who studies React, JavaScript,
                                component architecture, routing, state management and modern UI libraries.
                            </Paragraph>

                            <Space wrap>
                                <Tag color="blue">React</Tag>
                                <Tag color="green">JavaScript</Tag>
                                <Tag color="purple">Redux</Tag>
                                <Tag color="orange">Vite</Tag>
                                <Tag color="cyan">Ant Design</Tag>
                            </Space>
                        </Card>

                        <Card title="Experience" style={{ marginTop: 24 }}>
                            <Timeline
                                items={[
                                    {
                                        color: "blue",
                                        children: (
                                            <>
                                                <Title level={4}>Frontend Trainee</Title>
                                                <Text type="secondary">2024 — Present</Text>
                                                <Paragraph>
                                                    Created React components, worked with props,
                                                    state, forms, routing and API requests.
                                                </Paragraph>
                                            </>
                                        )
                                    },
                                    {
                                        color: "green",
                                        children: (
                                            <>
                                                <Title level={4}>HTML/CSS Practice</Title>
                                                <Text type="secondary">2023 — 2024</Text>
                                                <Paragraph>
                                                    Built adaptive layouts using Flexbox, Grid,
                                                    SCSS and CSS Modules.
                                                </Paragraph>
                                            </>
                                        )
                                    }
                                ]}
                            />
                        </Card>

                        <Card title="Education" style={{ marginTop: 24 }}>
                            <Title level={4}>Frontend Development Course</Title>
                            <Text type="secondary">2023 — 2024</Text>

                            <Divider />

                            <Paragraph>
                                Main topics: HTML, CSS, JavaScript, React, Redux,
                                Git, REST API, Vite and UI libraries.
                            </Paragraph>
                        </Card>

                        <Flex justify="end" style={{ marginTop: 24 }}>
                            <Button type="primary" size="large">
                                Download CV
                            </Button>
                        </Flex>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}