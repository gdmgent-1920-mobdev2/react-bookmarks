import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProxyContext = createContext();

const ProxyProvider = ({children}) => {
     const getSEO = async (url) => {
        const PROXY_NMD_CRAWLER_SEO_URL = 'https://nodejs-nmd-crawler.herokuapp.com/proxy/seo?url=';
        const response = await fetch(`${PROXY_NMD_CRAWLER_SEO_URL}${url}`);
        const jsonData = response.json();

        return jsonData;
    }

    return (
        <ProxyContext.Provider value={{getSEO}}>
            {children}
        </ProxyContext.Provider>
    )
};

export {
    ProxyContext,
    ProxyProvider,
}