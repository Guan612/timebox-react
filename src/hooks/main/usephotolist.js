import { useState, useEffect } from "react";
import { getPhotoListAPI } from "../../api/photo";

export default function usePhotoList() {
    const [photoList, setPhotoList] = useState([]);
    const getPhotoList = async()=> {
        const {reslut} = await getPhotoListAPI();
        setPhotoList(reslut);
    }
    useEffect(() => {
        getPhotoList();
    }, []);

    return {photoList};
}