import { createContext, useState } from 'react';

export const UserContext = createContext({
    userId: 1
});

export const UserContextProvider = ({ children }) => {
    // now UserContextProvider keeps context state
    const [userId, setUserId] = useState(1);

    return (
        <UserContext.Provider value={{ userId, setUserId } }>
            {children}
        </UserContext.Provider>
    );
};