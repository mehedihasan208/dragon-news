import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins w-9/12 mx-auto m-10">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;