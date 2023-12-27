const accessControl = require('../utils/accesscontrol');

async function  revoke(token) {
    return new Promise(async (resolve, reject) => {
        try {
            if (token == null || token == "null" || token == "" || token == "undefined") {
                reject({ "status": 400, "message": "Invalid Access Token" });
            }
            else {
                //console.log("Reached here ...");
                let saveToken = await accessControl.findOneAndUpdate({ token: token }, { token: token }, { upsert: true, new : true },
               
                
                );

                if(saveToken) {

                    resolve({"status" : 200, "message" : "Logout successful"});
                }else {
                    reject({ "status": 400, "message": "Logout Failed" });
                }
            }
        }
        catch (error) {
            if (process.env.NODE_ENV == "production") reject({ "status": 400, "message": error ? (error.message ? error.message : error) : "Something went wrong" });
            else reject({ "status": 400, "message": error });
        }
    });
}

function checkRevoked (token) {
    return new Promise(async (resolve, reject) => {
        try {
            let revoked = await accessControl.findOne({ token: token });
            if (revoked) resolve(true);
            resolve(false);
        }
        catch (error) {
            if (process.env.NODE_ENV == "production") reject({ "status": 400, "message": error ? (error.message ? error.message : error) : "Something went wrong" });
            else reject({ "status": 400, "message": error });
        }
    })
};
module.exports={
    revoke,
    checkRevoked
}