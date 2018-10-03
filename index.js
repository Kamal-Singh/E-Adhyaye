const   express = require('express'),
        app = express()
        path = require('path'),
        games = require('./gamework1/dummy');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, '/gamework1')));
app.get('/',function(req,res){
    res.render(__dirname+'/gamework1/index.ejs');
})

app.get('/sub',function(req,res){
    res.render(__dirname+'/gamework1/SubOpt.ejs');
})

app.get('/sub/:subject',function(req,res){
    let o={subject: 'science'};
    let temp = req.params;
    if(temp.subject=='math')
        o.subject='math';
    else if(temp.subject=='misc')
        o.subject='misc';
    res.render(__dirname+'/gamework1/GameOpt.ejs',obj={subject:o.subject});
})

app.get('/sub/:subject/:game/level',function(req,res){
    let subject = 'science';
    let game = 'game1';
    let temp = req.params;
    if(temp.subject=='math')
        subject='math';
    else if(temp.subject=='misc')
        subject='misc';
    if(temp.game=='mp')
        game='game2';
    res.render(__dirname+'/gamework1/level.ejs',obj={game:game,subject:subject});
})

app.get('/sub/:subject/:game/:level',function(req,res){
    let subject = 'science';
    let game = 'game1';
    let level = 'level1';
    let temp = req.params;
    if(temp.subject=='math')
        subject='math';
    else if(temp.subject=='misc')
        subject='misc';
    if(temp.game=='mp')
        game='game2';
    if(temp.level=='l2')
        level='level2';
    else if(temp.level=='l3')
        level='level3';
    let trans = games[`${subject}`][`${game}`][`${level}`];
    if(game=='game1')
        res.render(__dirname+'/gamework1/game1.ejs',obj=trans);
    else
        res.render(__dirname+'/gamework1/game2.ejs',obj=trans);

})

app.get('*',function(req,res){
    res.render(__dirname+'/gamework1/index.html');
})

app.listen(process.env.PORT, function(){
    console.log("Server is running on http://localhost:3000/");
});