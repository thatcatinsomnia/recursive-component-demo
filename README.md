# React Recursive Component Demo
這個專案展示了如何在 react 中使用 recursive component

# Assignment 
1. 在 ul 中加入 subfolder，使用的資料如下:
```js
const folders = [
  {
    name: 'Document'
  },
  {
    name: 'Downloads'
  },
  {
    name: 'Photos'
  }
];
```

2. subfolder 底下加入 subfolder，修改 ui 可以正確顯示巢狀結構，資料如下:
```js
const folders = [
  {
    name: 'Document',
    folders: [
      { name: 'Movies' },
      { name: 'Music' }
    ]
  },
  {
    name: 'Downloads'
  },
  {
    name: 'Photos'
  }
];
```

3. 將重複部分重構成 component，資料如下:
```js
const folders: Folder[] = [
  {
    name: 'Home',
    folders: [
      {
        name: 'Document',
        folders: [
          { name: 'Movies' },
          { name: 'Music' }
        ]
      },
      {
        name: 'Downloads'
      },
      {
        name: 'Photos'
      }
    ]
  }
];
```
