import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import article from './components/Article.vue'
import articleDetail from './components/ArticleDetail.vue'
import articleList from './components/admin/ArticleList.vue'
import articleEdit from './components/admin/ArticleEdit.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

// 按需引用element
import { Button, Message, MessageBox, Notification, Popover, Tag, Input } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
const components = [Button, Message, MessageBox, Notification, Popover, Tag, Input]

components.forEach((item) => {
  Vue.component(item.name, item)
})

const MsgBox = MessageBox
Vue.prototype.$msgbox = MsgBox
Vue.prototype.$alert = MsgBox.alert
Vue.prototype.$confirm = MsgBox.confirm
Vue.prototype.$prompt = MsgBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification

// 路由
const router = new VueRouter({
  routes: [
    {path: '/', components: {default: article}},
    {path: '/article', components: {default: article}},
    {path: '/articleDetail/:id', components: {default: articleDetail}},
    {path: '/admin/articleList', components: {default: articleList}},
    {path: '/admin/articleEdit', component: articleEdit},
    {path: '/admin/articleEdit/:id', component: articleEdit}
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
