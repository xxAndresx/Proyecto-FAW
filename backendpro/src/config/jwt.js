
const jwt = require("jsonwebtoken");

const secretKey = "pruebadellave";

const verifyToken = (req,res,next) => {
    const token = 
        req.body.token || req.query.token || req.headers["x-access-token"]
    if(!token){
        return res.status(403).json({status: 0, mensaje: "se necesita un token para proceder"});
    }
    try{
        const decoded = jwt.verify(token,secretKey);
    }catch (err) {
        return res.status(401).json({status:0, mensaje: "Token Invalido"});
    }
    return next()
};

module.exports = verifyToken;