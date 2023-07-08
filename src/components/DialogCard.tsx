import React, { ReactNode } from "react";
import Typed from "typed.js";

/**
 * 通用的说话气泡组件
 * @param children 放在气泡里的子组件
 * @param props
 * @constructor
 */
export const DialogCard = ({ children, ...props }: Props) => {
  return (
    <>
      <div className={`border-2 border-amber-200 rounded-2xl p-4`}>
        {children}
      </div>
    </>
  );
};

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
