import React, { createContext, useContext, useState, useMemo } from 'react';

export const Langs = {'lang':'english','stuff':'booger'};
const AppContext = createContext(
    Langs.lang
);

function useAppContext(AppContext) {
    const context = useContext(AppContext);
    return context;
}

// function AppProvider() {
//     const [state, setState] = useState({'lang':'english'});
//     const value =  [state, setState];
//     return <AppContext.Provider value={value} {...props} />;
// }

// export {AppProvider, useApp}
export default AppContext;