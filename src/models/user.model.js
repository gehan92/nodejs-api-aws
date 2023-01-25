console.log("user model-3")
const sql= require ('./db');


const User = function (user) {

    this.name = user.name;
    this.age = user.age;
    this.address = user.address;
}



// console.log("model check --->"+User)

//User Create-   
User.createUser = (newuser, result) => {
    sql.query('INSERT INTO user1 SET ? ', newuser, (err, res) => {
        if(err){
            result(err.message, '');
            return;
        }

        result('', {id:res.insertId, ...newuser});
    });
};


User.userDetailsView = (result) => {
    sql.query('SELECT * FROM user1',(err, res) => {
        if(err){
            result(err.message, '');
            return;
        }
        if(res){
            result("",res);
            return;
        }
    
    });
};

module.exports = User;