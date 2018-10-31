import reduxUnhandledAction from "redux-unhandled-action";

const callback = (action) => {
    console.groupCollapsed(`%c 警告`, `color: #FF0000; font-weight: bold`,`${action.type} 未发生状态改变`);
    console.log(`%c Action`, `color: #03A9F4; font-weight: bold`, action);
    console.groupEnd();
};

export default reduxUnhandledAction(callback);