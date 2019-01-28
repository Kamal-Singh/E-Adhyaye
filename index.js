const   express = require('express'),
        app = express()
        path = require('path'),
        games = require('./gamework1/dummy');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, '/gamework1')));
const port = 3000;
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
    if(temp.game=='game2')
        game='game2';
    else if(temp.game=='game3')
        game='game3';
    if(temp.level=='l2')
        level='level2';
    else if(temp.level=='l3')
        level='level3';
    if(game=='game1')
        {
        let trans = games[`${subject}`][`${game}`][`${level}`];
        console.log("game 1 rendered!!!");
        res.render(__dirname+'/gamework1/game1.ejs',obj=trans);
        }
    else if(game=='game2')
    {
        let trans = games[`${subject}`][`${game}`][`${level}`];
        console.log(trans);
        console.log("game 2 rendered!!!");
        res.render(__dirname+'/gamework1/game2.ejs',obj=trans);
    }
    else if(game=='game3')
        res.render(__dirname+'/gamework1/drag-drop-matching-game/index.ejs');
})

// app.get('*',function(req,res){
//     res.render(__dirname+'/gamework1/index.html');
// })

app.listen(port, function(){
    console.log("Server is running on http://localhost:3000/");
});