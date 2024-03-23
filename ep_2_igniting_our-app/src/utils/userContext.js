import { createContext } from "react";


// should we keep all of the data in the context only ? we will also not need to pass props
// not recommened, put only that data which needs to be accessed by different components

const userContext = createContext({
    loggedInUser: 'Default user'
});

export default userContext;






