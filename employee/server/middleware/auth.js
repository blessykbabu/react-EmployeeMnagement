// // import jwt from "jsonwebtoken";
// const jwt=require('jsonwebtoken')
// const { verify } = jwt;

// async function auth(req, res, next) {
//     try {
//         let token = req.headers.authorization.split(" ")[1];
//         let user = await verify(token, process.env.SECRET_KEY);
//         if(user) {
//             req.user = user;
//             next();
//         }
//     } catch (error) {
//         console.log(error);
//         return res.status(403).send("Unauthorized access");
//     }
// }
// module.exports=auth;

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - Invalid token' });
    }

    req.user = user;
    next();
  });
};

module.exports = auth;
