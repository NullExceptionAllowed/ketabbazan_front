import { createContext } from "react";

const SimpleContext = createContext({
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
    setRefresh : () => {}
});

export default SimpleContext;