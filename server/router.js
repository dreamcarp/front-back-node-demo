const express = require('express')
const router = express.Router()
const db = require('./db')

// 获取所有文章
router.get('/api/articleList', function (req, res) {
    db.Article.find({}, function(err, docs) {
        if (err) {
            console.error(err)
            return
        }
        res.send(docs)
    })
})

// 获取文章详情
router.get('/api/articleDetail/:id', function (req, res) {
    db.Article.findById(req.params.id, function(err, docs) {
        if (err) {
            console.log(err)
            return
        }
        res.send(docs)
    })
})

// 文章保存
router.post('/api/admin/saveArticle', function (req, res) {
    new db.Article(req.body.articleInformation).save(function (err) {
      if (err) {
        res.status(500).send()
        return
      }
      res.send()
    })
  })
  
  // 文章更新
  router.post('/api/admin/updateArticle', function (req, res) {
    let info = req.body.articleInformation
    console.log('info:', info)
    db.Article.find({_id: info.id}, function (err, docs) {
      if (err) {
        return
      }
      docs[0].title = info.title
      docs[0].date = info.date
      docs[0].content = info.content
      docs[0].gist = info.gist
      docs[0].labels = info.labels
      db.Article(docs[0]).save(function (err) {
        if (err) {
          res.status(500).send()
          return
        }
        res.send()
      })
    })
  })
  
  // 文章删除
  router.post('/api/admin/deleteArticle', function (req, res) {
    db.Article.remove({_id: req.body._id}, function (err) {
      if (err) {
        res.status(500).send()
        return
      }
      res.send()
    })
  })
  
  module.exports = router