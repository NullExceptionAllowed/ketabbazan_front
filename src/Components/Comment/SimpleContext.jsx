import { createContext } from "react";

const SimpleContext = createContext({
    flag:"",
    img:"",
    refresh : "" ,
    comments: [],
    comment: "",
    click : "" ,
    setClick : () => {} ,
    handleCreateNewComment: () => {},
   
    handleSetComment: () => {} , 
    
    clickHandlerToZero : () => {} ,
    Show : () => {} ,
    reshow : () => {},
    setRefresh : () => {},
    setFlag : () => {}
});

export default SimpleContext;