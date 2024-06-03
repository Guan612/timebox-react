import {NavLink} from 'react-router-dom'
export default function IndexSidebar() {
    return (
        <div className="flex flex-col bg-transblue h-screen justify-between">
            <div className="mt-5">
                <NavLink to={"/"}  className="m-5 p-3 bg-transblue rounded-xl hover:bg-transpink transition-all duration-300 cursor-pointer">
                    首页
                </NavLink >
                <div className="m-5 p-3 bg-transblue rounded-xl hover:bg-transpink transition-all duration-300 cursor-pointer">
                    我的照片集
                </div>
                <NavLink to={"/photos"} className="m-5 p-3 bg-transblue rounded-xl hover:bg-transpink transition-all duration-300 cursor-pointer">
                    我的照片
                </NavLink>
                <div className="m-5 p-3 bg-transblue rounded-xl hover:bg-transpink transition-all duration-300 cursor-pointer">
                    最爱精选
                </div>
            </div>
        </div>
    );
}
