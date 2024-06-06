import { Timeline } from "antd";
import usePhotoList from "../../hooks/main/usephotolist";
import PhotoCard from "./photocard";
export default function Main() {
    const { photoList, times } = usePhotoList();
    return (
        <div className="flex flex-row">
            <div className="justify-center grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-center">
                {photoList.map((item, index) => {
                    return (
                        <PhotoCard
                            photoUrl={item.photoUrl}
                            photoName={item.photoName}
                            photoDes={item.photoDes}
                            key={item.id}
                        />
                    );
                })}
            </div>
            <Timeline items={times}></Timeline>
        </div>
    );
}
