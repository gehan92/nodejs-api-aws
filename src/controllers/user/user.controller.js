console.log("controller--->2")
const User = require("../../models/user.model");

exports.AddDetails = async function (req, res) {

   
    const newUserDetails = new User ({
        name: req.body.name, 
        age: req.body.age,
        address: req.body.address
    });

    // console.log(res.json(newUserDetails))
    try {
        if(!req.body){
        return res.status(400).send("empty");
        }
        User.createUser(newUserDetails,(err,data)=>{
            if(err){
                return res.status(500).send({message:err.message});
            }
            else{
               return res.status(200).json({
                   succes:true,
                   Data:data,
                   Message:"data inserted.."
               }) ;
            }
        });
    } catch (e) {
        return res.status(400).json({message: e.message});
    }
}


exports.GetUserdetails = async function(req,res){
    try {
        User.userDetailsView((err,data)=>{
            if(err){
                return res.status(500).send({message:err.message});
            }
            else{
               return res.status(200).json({
                   succes:true,
                   Data:data,
                   Message:"all data recived.."
               }) ;

               
            }
        });
    } catch (e) {
        return res.status(400).json({message: e.message});
    }

}


