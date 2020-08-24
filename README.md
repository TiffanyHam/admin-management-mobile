# admin-management-mobile

## 部署步骤

- 克隆项目到本地

    ```git
    git clone https://github.com/TiffanyHam/admin-management-mobile.git
    ```

- 打开目录安装依赖

    ```node
    npm install
    ```

- 运行项目

    ```node
    npm run serve
    ```
- Compiles and minifies for production

    ```node
    npm run build
    ```    
### 注意事项

- git提交代码时,请逐个添加文件,禁止使用`git add *`或者`git add .`

- git提交到本地仓库时,请逐个为文件添加注释,`git commit -m '文件注释'`

- 更多事项请看[git - 简易指南](https://www.bootcss.com/p/git-guide/)

## 项目目录结构

```javascript
|-- admin-management-mobile
    |-- .browserslistrc
    |-- .eslintrc.js
    |-- .gitignore
    |-- babel.config.js
    |-- jest.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- vue.config.js
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets
    |   |   |-- logo.png
    |   |   |-- image
    |   |       |-- back.png
    |   |       |-- open_button.png
    |   |       |-- setting.png
    |   |-- components
    |   |   |-- Four.vue
    |   |   |-- index.js
    |   |   |-- One.vue
    |   |   |-- Three.vue
    |   |   |-- Two.vue
    |   |   |-- common
    |   |       |-- VButton.vue
    |   |       |-- VDialog.vue
    |   |       |-- VHeader.vue
    |   |       |-- VModule.vue
    |   |       |-- VTab.vue
    |   |-- router
    |   |   |-- index.js
    |   |-- store
    |   |   |-- index.js
    |   |-- style
    |   |   |-- common.scss
    |   |-- views
    |       |-- About.vue
    |       |-- Home.vue
    |-- tests
        |-- unit
            |-- example.spec.js

```