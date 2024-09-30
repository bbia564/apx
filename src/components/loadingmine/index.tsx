import { Spin } from "antd";
import { ReactElement, ReactNode } from "react";
import './index.less'

const LoadingMine = (): ReactElement<ReactNode> => {
    return (
        <div className="loading-box">
            <Spin size="large" />
        </div>
    )
};

export default LoadingMine;