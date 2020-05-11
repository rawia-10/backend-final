//on fait un appel d ORM
var mongoose =require('mongoose');
var mongoDB='mongodb://127.0.0.1/consultation';


mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true },
    (err) => {
        if (err) {
          console.log('------------- MongoDB is down -------------------');
          console.error(err);
        } else {
          console.log('+++++++++++++++ MongoDB is up +++++++++++++++++++++');
        }
      }
    );
mongoose.Promise=global.Promise;
// ne fonctionne pas avec un seul router : bd global
//node async donc yebloki tt les instructions yexecuti lmongod apres ykamml


var DB=mongoose.connection;
DB.on('error',console.error.bind(console,'MongoDB connectionn error :'))