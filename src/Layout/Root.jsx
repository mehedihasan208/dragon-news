import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins w-6xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;