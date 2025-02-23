const message = (res,status,success,msg) =>{
    return res.status(status).json({success,msg})
}

export default message