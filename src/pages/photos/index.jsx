import { useEffect, useState } from "react";
import { Image, message, Popconfirm, Drawer } from "antd";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import {
    findMyPhotoAPI,
    deletePhotoAPI,
    getPhotoListAPI,
    addPhotoCollectionPhotoAPI,
    filterPhotoAPI,
} from "../../api/photo";

export default function Photos() {
    const [photoList, setPhotoList] = useState([]);
    const [open, setOpen] = useState(false);

    const getMyPhoto = async () => {
        const { reslut } = await findMyPhotoAPI();
        setPhotoList(reslut);
    };

    const confirm = (e) => {
        console.log(e);
        setOpen(true);
    };
    const cancel = (e) => {
        console.log(e);
        message.error("Click on No");
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getMyPhoto();
    }, []);

    return (
        <div className="flex flex-row m-5 justify-center">
            <Drawer title="照片详细" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photoList.map((photo) => {
                    return (
                        <div key={photo.id}>
                            <Popconfirm
                                title="详情"
                                description={
                                    photo.photoAndColl.length > 0
                                        ? photo.photoAndColl[0].photoCollection
                                              .photoName
                                        : "还未加入照片集"
                                }
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="详细信息"
                                cancelText="取消"
                            >
                                <img
                                    className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                                    src={photo.photoUrl}
                                    style={{ height: 230 }}
                                ></img>
                            </Popconfirm>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
