const Twitter = require('twitter');
const Twitters = require('../model/twitter')
const twitterController = {}

var client = new Twitter({
  consumer_key: 'sKRp7KwLYjMJKAARqnkjq3eVP',
  consumer_secret: 'mRbqCCARb7BNjspqmqVFLMVC5w0Q80FfEqzk8Tpvw194MHfXnc',
  access_token_key: '3704561652-yQpjWV946m47ennUtaXQqc1cEBfwnfIzVifmRcc',
  access_token_secret: 'j83PRRs2t1jMmnLBkIbSP1gdUzwLwj2zqlk9r6RUBwvOw'
});

twitterController.list = (req,res) =>{
  const name = req.params.name
  Twitters.findOne({name})
    .then((data)=>{
      if(data){
        res.json(data)
      } else {

        console.log('this is catch part');
        var params = {screen_name: `${name}`};
        client.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=10`, params)
        .then((tweet) =>{
          let tweets = tweet.map(e => e.text)
          const obj = { name ,tweets}
          const twitters = new Twitters(obj)
          twitters.save()
            .then((his_tweets)=>{
              res.json(his_tweets)
            })
            .catch((err)=>{
              res.json(err)
            })
        })
        .catch((error)=>{
          res.json(error)
        }) 


      }
    })
    .catch((err)=>{
        res.json(err)
    })
  
}

module.exports = twitterController