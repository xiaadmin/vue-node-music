var express=require('express')
var router = express.Router()
var axios = require('axios')
  router.get('/api/getDiscList', function (req, res) {
    // let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag.fcg'
    // 这里url写错
    let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e.response)
    })
  })
  router.get('/api/getSongVkey', function (req, res) {
    // console.log(req.query)
    let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    axios.get(url, {
      headers: {
        referer: 'https://y.qq.com/portal/player.html',
        origin: 'https://y.qq.com'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e.response)
    })
  })
  router.get('/api/getSongLyric', function (req, res) {
    let url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    axios.get(url, {
      headers: {
        origin: 'https://y.qq.com',
        referer: 'https://y.qq.com/portal/player.html'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e.response)
    })
  })
  router.get('/api/getRecDiscSong', function (req, res) {
    let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    axios.get(url, {
      headers: {
        origin: 'https://y.qq.com',
        referer: 'https://y.qq.com/'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e.response)
    })
  })
  router.get('/api/getTopList', function (req, res) {
    let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
    axios.get(url, {
      headers: {
        origin: 'https://y.qq.com',
        referer: 'https://y.qq.com/m/index.html'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e.response)
    })
  })
  router.get('/api/getTopMusicList', function (req, res) {
    let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    axios.get(url, {
      headers: {
        origin: 'https://y.qq.com',
        referer: 'https://y.qq.com/n/yqq/toplist/4.html'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e.response)
    })
  })
  router.get('/api/search', function (req, res) {
    let url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
    axios.get(url, {
      headers: {
        origin: 'https://y.qq.com',
        referer: 'https://y.qq.com/m/index.html'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e.response)
    })
  })

module.exports=router