import React from 'react';
import useGlobalHook from 'use-global-hook';

const initialState = {
  lang: 'english',
};

const actions = {
  changeLang: (store, newLang) => {
    const newlangValue = newLang;
    store.setState({ lang: newlangValue });
  },
};

const useGlobal = useGlobalHook(React, initialState, actions);

const Test = () => {
  const [globalState, globalActions] = useGlobal();
  return ( 
    <div>
      <p>
        lang:
        {globalState.lang}
      </p>
      <button value="pigLatin" type="button" onClick={(e) => globalActions.changeLang(e.target.value)}>
        change language
      </button>
    </div>
  );
};
// export const testGlobalState = {globalState.lang};
export default Test;