import { useEffect, useState } from "react";
import { Image } from "antd";
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

    const getMyPhoto = async () => {
        const { reslut } = await findMyPhotoAPI();
        setPhotoList(reslut);
    };

    useEffect(() => {
        getMyPhoto();
    }, []);

    return (
        <div className="flex flex-row m-5 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photoList.map((photo) => {
                    return (
                        <img
                            className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                            src={photo.photoUrl}
                            style={{ height: 230 }}
                            key={photo.id}
                        ></img>
                    );
                })}
            </div>
        </div>
    );
}
