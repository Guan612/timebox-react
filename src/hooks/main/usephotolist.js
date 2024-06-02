import { useState, useEffect } from "react";
import { getPhotoListAPI } from "../../api/photo";
import { Children } from "react";

export default function usePhotoList() {
    const [photoList, setPhotoList] = useState([]);
    const times = [
        {
            children:2024,
        },
        {
            children:2023,
        },
        {
            children:2022,
        }
    ]
    const getPhotoList = async()=> {
        const {reslut} = await getPhotoListAPI();
        setPhotoList(reslut);
    }
    useEffect(() => {
        getPhotoList();
    }, []);

    return {photoList,times};
}