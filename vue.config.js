
const USER = {
  '张三': '111',
  '李四': '222',
  '王五': '333'
};

module.exports = {
  css: {
    modules: true
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    open: true,
    hot: true,
    port: 10000,
    setup: function (app, server) {
      app.get('/login', function (req, res) {
        let user = req.query['user'];
        let pass = req.query['pass'];
        if (!USER[user]) {
          res.send({ 'status': false, 'msg': "用户不存在" })
        } else {
          if (USER[user] !== pass) {
            res.send({ 'staus': false, "msg": "密码不正确" })
          } else {
            res.send({ 'status': true })
          }
        }

        res.end()
      });
      app.post('/register', function (req, res) {
        res.send({ 'status': true })
        res.end()
      });
    }
  },
}