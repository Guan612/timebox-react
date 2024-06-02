import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export default function PhotoCard({ photoUrl, photoName, photoDes }) {
    return (
        <Card
            className="flex flex-col card m-2 hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl bg-gradient-to-r from-transblue to-transpink"
            style={{
                width: 300,
            }}
            cover={
                <img
                    alt="example"
                    src={photoUrl}
                    style={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "5px",
                    }}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta title={photoName} description={photoDes} />
        </Card>
    );
}
