import { useEffect, useState } from "react";
import { Button, Drawer, Select, message } from "antd";

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
    const [photoInfo, setPhotoInfo] = useState({});
    const [photoCollOption, setPhotoCollOption] = useState([]);

    const getMyPhoto = async () => {
        const { reslut } = await findMyPhotoAPI();
        setPhotoList(reslut);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const deletePhoto = async (photoId) => {
        await deletePhotoAPI(photoId);
        message.success("照片删除成功");
        getMyPhoto();
        setOpen(false); // 关闭抽屉
    };

    useEffect(() => {
        getMyPhoto();
    }, []);

    return (
        <div className="flex flex-row m-5 justify-center">
            <Drawer title="照片详细" onClose={() => setOpen(false)} open={open}>
                <div>
                    <p>设备品牌：{photoInfo.photoMake}</p>
                    <p>设备型号：{photoInfo.photoModel}</p>
                    <p>拍摄时间：{photoInfo.photoShootTime}</p>
                </div>
                <div>
                    {photoInfo.photoAndColl &&
                    photoInfo.photoAndColl.length > 0 ? (
                        <div>
                            所属照片集合：{photoInfo.photoAndColl[0].photoCollection.photoName}
                        </div>
                    ) : (
                        <div>
                            <div>还未加入照片集，加入照片集</div>
                            <div>
                                <Select
                                    defaultValue="lucy"
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: "jack",
                                            label: "Jack",
                                        },
                                        {
                                            value: "lucy",
                                            label: "Lucy",
                                        },
                                        {
                                            value: "Yiminghe",
                                            label: "yiminghe",
                                        },
                                        {
                                            value: "disabled",
                                            label: "Disabled",
                                            disabled: true,
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-2">
                    <Button
                        type="primary"
                        danger
                        onClick={() => deletePhoto(photoInfo.id)}
                    >
                        删除照片
                    </Button>
                </div>
            </Drawer>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photoList.map((photo) => {
                    return (
                        <div key={photo.id}>
                            <img
                                className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                                src={photo.photoUrl}
                                style={{ height: 230 }}
                                onClick={() => {
                                    setPhotoInfo(photo);
                                    setOpen(true);
                                }}
                            ></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
