<template>
    <div id="left_menu">
        <div class="menu_name">
             <h1>carpli</h1>
        </div>
        <nav>
            <ul>
                <router-link to="/Article">
                    <li class="nav">
                        <span>首页</span>
                    </li>
                </router-link>
                <router-link to="/admin/ArticleList">
                    <li class="nav">
                        <span>管理</span>
                    </li>
                </router-link>
                <router-link to="/admin/ArticleEdit">
                  <li class="nav">
                    <span>写文章</span>
                  </li>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        data () {
            return {
                articleNumber: ''
            }
        },
        mounted: function () {
        },
        methods: {
        }
    }
</script>
<style>
</style>
