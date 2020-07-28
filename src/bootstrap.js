module.exports = async () => {
    const Tweet = require('./models/Tweet');
    const User = require('./models/User');

    User.hasMany(Tweet, {as: "Tweets" });
    Tweet.belongsTo(User, {as: "User", foreignKey: 'userId'});

    const errHandler = err => {
        console.error("Error: ", err);
    };

    // const user = await User.create({
    //     username: "Anoj Madusanka Kuruppu",
    //     password: "1234567"
    // }).catch(errHandler);

    // const tweet = await Tweet.create({
    //     content: "This is the tweet content",
    //     userId: user.id
    // }).catch(errHandler);

    const users = await User.findAll({ where: { id: 34 }, include: [ { model: Tweet, as: "Tweets" } ] }).catch(errHandler);
    users.map((usr)=>{
        console.log(usr.Tweets);
    });

    console.log("....................Tweets......................");
    const tweets = await Tweet.findAll({ include: ["User"] });
    const tweetsA = (tweets);

    tweetsA.map((twt)=>{
        console.log(twt.User.username);
    });
    
}