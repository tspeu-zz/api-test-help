// config.js
const config = {
    app: {
      port: 3000
    },
    db: {
      host: 'localhost',
      port: 27017,
      name: 'rec-ayuda'
    } 
};

module.exports = config;
    
    //,
    // dev : {
    //     ip_address : '0.0.0.0',
    //     port : 8080,
    //     mongo :{
    //         url : "mongodb://localhost:27017/story_box_dev",
    //         options : ""
    //     }
    // },
    // prod : {
    //     ip_address : '0.0.0.0',
    //     port : 3000,
    //     mongo :{
    //         url : "mongodb://localhost:27017/story_box_prod",
    //         options : ""
    //     }
    // }


// module.exports = {
//     url: 'mongodb://<dbUserName>:<dbUserPassword>@ds251002.mlab.com:51002/adeshtestdb',
//     serverport: 3000 
// }