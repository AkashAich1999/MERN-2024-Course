const home = async (req, res) => {
    try{
        res.status(200).send("Welcome, to Akash Technologies !");
    }
    catch(error){
        console.log(error);
    }
}

const register = async (req, res) => {
    try{
        res.status(200).send("Welcome, to Registration Page !");
    }
    catch(error){
        res.status(400).send({msg:"page not found"});
    }
}

module.exports = { home, register };