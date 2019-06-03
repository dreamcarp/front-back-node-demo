<template>
<div id="content">
    <div class="article_wrap" v-if="articleList.length > 0">
        <div  v-for="(item, index) in articleList" @click="handleOpenDetail(item._id)" :key="index" >
          <div class="article_title">{{item.name}}
            <div class="article_info">
                <span class="article_info_date">发表于：{{item.date}}</span>
                <span class="article_info_label">标签：
                    <span v-if="item.labels.length === 0">未分类</span>
                    <el-tag v-else class="tag_margin" type="primary" v-for="(tag, index) in item.labels" :key="index">{{tag}}</el-tag>
                </span>
            </div>
            <div class="article_gist">{{item.gist}}</div>
            <div @click="handleOpenDetail(item._id)" class="article_all">阅读全文</div>
            <div class="article_underline"></div>
          </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'articles',
        data () {
            return {
                articleList: []
            }
        },
        async created () {
            await this.fetchArticleList()
        },
        methods: {
            handleOpenDetail (id) {
                this.$router.push('/ArticleDetail/' + id)
            },
            fetchArticleList () {
                this.$http.get('/api/articleList').then(
                    response => this.articleList = response.body.reverse(),
                    response => console.log(response)
                )
            }
        }
    }
</script>
<style scoped>
    .article_wrap {
    padding: 40px;
  }

  .article_title {
    display: inline-block;
    color: #222;
    font-size: 34px;
    font-weight: 600;
    border-bottom: 1px solid white;
    cursor: pointer;
  }

  .article_title:hover {
    border-bottom: 1px solid #222;
  }

  .article_info {
    color: #999;
    font-size: 14px;
    padding-top: 8px;
  }

  .tag_margin {
    margin: 3px;
  }

  .article_gist {
    text-align: left;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 16px;
  }

  .article_all {
    display: inline-block;
    padding: 3px 12px;
    border: 2px solid #222;
    color: #222;
    font-size: 14px;
    cursor: pointer;
  }

  .article_all:hover {
    color: white;
    background: #000;
    font-weight: 600;
  }

  .article_underline {
    height: 1px;
    width: 40px;
    background: #545455;
    margin: 80px auto 0;
  }
</style>
