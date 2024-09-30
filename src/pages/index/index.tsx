import { ReactElement,ReactNode } from "react";
import HeaderWapper from '../../components/header'
import './index.less'
import { Outlet } from "react-router-dom";

const IndexView = () : ReactElement<ReactNode> => {
    return (
        <div className="index-view">
            <HeaderWapper/>
            <Outlet/>
        </div>
    )
};

export default IndexView;