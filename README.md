# my-blog
野狗+axios+vue-router实现博客的增删改查

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<!-- 野狗地址 -->
https://www.wilddog.com/console/wd2782900809lhvzxe


for循环可以添加方法

vuex   -----数据管理，共享


compted   ------计算属性获取数据    ----自动运行
vuex   ----处理庞大的数据

map遍历

vuex   -----state和getters,mutition---事件触发


翻墙软件   vue.js-detooles


foreach    ----


strtic：true  
 -----严格模式下，不能有和vuex里面的方法相同，不能之前在外部，调用vuex里面的

mutition可在vue-detool中查看实时状态

action   -----控制异步操作，控制两秒之后操作
context  ----类似于this.$sstate
context.commit   ------激活异步操作
this.$store.dispatch("方法"，传参)   ---事件分发   与action一起使用
action   ---可以方便开发者调试方法
也可以传参
payload    -----用于接手参数

commit   ---触发mutition


首先需引入mapGetters和maoActionbs从vuex中import
mapGetters     -------可包含多个Getter
mapActions      -------可包含多个Actions
需要使用上面的mapGetters和mapActions
需要安装babel-preset-stage-2
.babelic文件下对应需添加如下：并重启服务器
    ["stage-2"] 









