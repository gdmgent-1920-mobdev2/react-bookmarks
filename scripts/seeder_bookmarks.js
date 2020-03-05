import { admin, app, db } from './firebase';

const createBookmark = async (title, description) => {
    const bookmark = {
        title,
        description,
        createdAt: Date.now()
    };
    await db.collection('bookmarks').add(bookmark);
}

(async () => {
    for (let i = 0; i < 100; i++) {
        await createBookmark(`Title ${i}`, `Description ${i*i}`);
    }
})()