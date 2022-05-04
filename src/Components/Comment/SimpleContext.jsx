import { createContext } from "react";

const SimpleContext = createContext({
    comments: [],
    comment: "",
    click : "" ,
    setClick : () => {} ,
    handleCreateNewComment: () => {},
   
    handleSetComment: () => {} , 
    
    clickHandlerToZero : () => {} ,
    Show : () => {} ,
    reshow : () => {}
});

export default SimpleContext;