![CI](https://github.com/rightcode/firestore-test-supporter/workflows/CI/badge.svg)

# インストール
```bash
npm install github:rightcode/firestore-test-supporter
```

# 使い方
## インスタンスの作成
```js
const supporter = new FirestoreTestSupporter("project-id", path.join(__dirname, "firestore.rules"));
```
## セキュリティルールの読み込み
```js
supporter.loadRules()
```

## 認証なしFirestoreクライアントの取得
```js
supporter.getFirestore()
```

## 認証付きFirestoreクライアントの取得
```js
supporter.getFirestoreWithAuth("uid","email")
```

## 管理者Firestoreクライアントの取得
```js
supporter.getAdminFirestore()
```

## データのクリーンアップ
```js
supporter.cleanup()
```

