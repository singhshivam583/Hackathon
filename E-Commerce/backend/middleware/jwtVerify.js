import  jwt  from 'jsonwebtoken';

export const jwtVerify = (req, res, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    if (!token) {
        return res.status(400).json({ Message: "Your are not authenticated" })
    }
    jwt.verify(token, "jwt-secret-key", (err, decode) => {
        if (err) return res.status(402).json({ Error: "Token match failed" });

        req.id = decode.id;
        req.name = decode.name;
        req.email = decode.email;
        next();
    })
}