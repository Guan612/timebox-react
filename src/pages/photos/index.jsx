import { Button, Drawer, Select } from "antd";

import useMyphoto from "../../hooks/myphoto/useMyphoto";

export default function Photos() {
    const {
        photoList,
        open,
        setOpen,
        photoInfo,
        setPhotoInfo,
        photoCollOption,
        addOption,
        setAddOption,
        handleChange,
        addPhotoCollPhoto,
        deletePhoto,
    } = useMyphoto();

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
                            所属照片集合：
                            {
                                photoInfo.photoAndColl[0].photoCollection
                                    .photoName
                            }
                        </div>
                    ) : (
                        <div>
                            <div className="m-1">
                                还未加入照片集，加入照片集
                            </div>
                            <div className="m-1">
                                <Select
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    options={photoCollOption}
                                />
                            </div>
                            <Button
                                className="m-1"
                                type="primary"
                                onClick={() => addPhotoCollPhoto(photoInfo.id)}
                            >
                                确定添加
                            </Button>
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
