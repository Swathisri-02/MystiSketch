import jwt from 'jsonwebtoken'


const userAuth = async (req, res, next) => {
    const {token} = req.headers;

    if (!token) {
        return res.status(401).json({message: "Access Denied, Login again"});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }
        else{
            return res.status(400).json({message: "Not Authorized. Login Again"});
        }

        next();
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Invalid token"});
    }
}

export default userAuth;