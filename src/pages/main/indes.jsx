
import usePhotoList from "../../hooks/main/usephotolist";
export default function Main() {
    const {photoList} = usePhotoList();
    return (
        <div>
            <h1>Main</h1>
            <div>{photoList.map((item, index) => {
                return <img src={item.photoUrl} key={index} />
            })}</div>
        </div>
    );
}
