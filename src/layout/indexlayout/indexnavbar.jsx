import { NavLink } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;
export default function IndexNavbar() {
    const logoImg =
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dolby_logo_2019.svg";

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className="flex flex-row items-center h-15 md:h-20 bg-gradient-to-r from-transblue to-transpink">
            <div className="basis-1/6 flex justify-center content-center m-2">
                <NavLink to="/">
                    <img
                        src={logoImg}
                        className="bg-center w-20 hover:scale-110 transition-all duration-300"
                    />
                </NavLink>
            </div>
            <div className="flex flex-row basis-5/6">
                <div className="basis-1/3 content-center">
                    <div className="hidden md:block">
                        <Search
                            placeholder="搜索照片"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row basis-2/3 justify-end">

            </div>
        </div>
    );
}
