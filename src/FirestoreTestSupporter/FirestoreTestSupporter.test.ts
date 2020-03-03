process.env.FIRESTORE_EMULATOR_HOST = "localhost:58080";

import FirestoreTestSupporter from "./FirestoreTestSupporter";
import * as path from "path";
import * as firebase from "@firebase/testing";

describe("FirestoreTestSupporterの動作チェック", () => {
    const supporter = new FirestoreTestSupporter("my-test-project", path.join(__dirname, "firestore.rules"));

    beforeEach(async () => {
        await supporter.loadRules();
    });

    afterEach(async () => {
        await supporter.cleanup()
    });

    describe('全てのアクセス拒否ルールをチェック', () => {
        test('読み込み拒否', async () => {
            const db = supporter.getFirestore();
            const doc = db.collection('default').doc('dummy');
            await firebase.assertFails(doc.get())
        });

        test('書き込み拒否', async () => {
            const db = supporter.getFirestore();
            const doc = db.collection('default').doc('dummy');
            await firebase.assertFails(doc.set({data: 'dummy'}))
        });

        test('認証付き読み込み拒否', async () => {
            const db = supporter.getFirestoreWithAuth();
            const doc = db.collection('default').doc('dummy');
            await firebase.assertFails(doc.get())
        });

        test('認証付き書き込み拒否', async () => {
            const db = supporter.getFirestoreWithAuth();
            const doc = db.collection('default').doc('dummy');
            await firebase.assertFails(doc.set({data: 'dummy'}))
        });
    });
});
