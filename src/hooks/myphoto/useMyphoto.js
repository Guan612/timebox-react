import { useEffect, useState } from "react";
import { message } from 'antd'
import {
    findMyPhotoAPI,
    deletePhotoAPI,
    getPhotoListAPI,
    addPhotoCollectionPhotoAPI,
    filterPhotoAPI,
} from "../../api/photo";
const useMyphoto = () => {
    const [photoList, setPhotoList] = useState([]);
    const [open, setOpen] = useState(false);
    const [photoInfo, setPhotoInfo] = useState({});
    const [photoCollOption, setPhotoCollOption] = useState([]);
    const [addOption, setAddOption] = useState();

    //初始化加载照片
    const getMyPhoto = async () => {
        const { reslut } = await findMyPhotoAPI();
        setPhotoList(reslut);
    };

    //获取照片集并重新整理
    const getPhotoList = async () => {
        const { reslut } = await getPhotoListAPI();
        const fiterRes = reslut.map((item) => ({
            value: item.id,
            label: item.photoName,
        }));
        setPhotoCollOption(fiterRes);
    };

    //改变选项逻辑
    const handleChange = (value) => {
        setAddOption(value);
    };

    //添加照片到照片集
    const addPhotoCollPhoto = async (photoId) => {
        if (!addOption) {
            message.error("请选择照片集");
            return;
        }
        const res = await addPhotoCollectionPhotoAPI({
            photoId: photoId,
            photoCollectionId: addOption,
        });
        if (res.code == 0) {
            message.success(res.msg);
            setAddOption(null);
            getMyPhoto();
            setOpen(false); // 关闭抽屉
            return
        }
    };

    //删除照片逻辑
    const deletePhoto = async (photoId) => {
        await deletePhotoAPI(photoId);
        message.success("照片删除成功");
        getMyPhoto();
        setOpen(false); // 关闭抽屉
    };

    
    useEffect(() => {
        getMyPhoto();
        getPhotoList();
    }, []);

    return { photoList, open, setOpen, photoInfo, setPhotoInfo, photoCollOption, addOption, setAddOption, handleChange, addPhotoCollPhoto, deletePhoto, }
}

export default useMyphoto;