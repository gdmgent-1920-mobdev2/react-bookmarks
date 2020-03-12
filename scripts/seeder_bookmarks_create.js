import fetch from 'node-fetch';

import { admin, app, db } from './firebase';

const urlsToBookmark = [
    'https://github.com/gdmgent-1920-mobdev2/nodejs-nmd-crawler',
    'https://devcenter.heroku.com/articles/getting-started-with-nodejs',
    'https://www.npmjs.com/package/ts-node',
    'https://vuejs.org/',
    'https://svelte.dev',
    'https://angular.io',
    'https://emberjs.com',
    'https://reactjs.org',
    'https://www.webcomponents.org',
    'https://webassembly.org/',
    'https://www.meteor.com',
    'https://hapi.dev',
    'https://nestjs.com',
];

const PROXY_NMD_CRAWLER_SEO_URL = 'https://nodejs-nmd-crawler.herokuapp.com/proxy/seo?url=';

const getSEOFromUrl = async (url) => {
    const response = await fetch(`${PROXY_NMD_CRAWLER_SEO_URL}${url}`);
    const json = await response.json();
    return json;
};  

const createBookmark = async (userId, bookmark) => {
  const bm = {
    ...bookmark,
    createdAt: Date.now(),
    modifiedAt: null
  }
  return await db.collection('bookmarks').doc(userId).collection('folders').doc('uncategorized').collection('references').add(bm);
};

(async () => {
  const userId = 'P563YJ4Pw7RYiwkP3Smgxh89vme2'; // Generated after Facebook login
    urlsToBookmark.forEach(async (url, index) => {
      const metadata = await getSEOFromUrl(url);
      const bookmark = {
        url: metadata.url || null,
        title:  metadata.title || null,
        description:  metadata.description || null,
        provider:  metadata.provider || null,
        icon:  metadata.icon || null,
        image:  metadata.image || null,
        language:  metadata.language || null,
        keywords:  metadata.keywords || null,
        type:  metadata.type || null,
        createdAt: Date.now(),
        modifiedAt: null
      };
      await createBookmark(userId, bookmark);
    });
})()