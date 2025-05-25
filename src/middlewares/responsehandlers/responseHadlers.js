export default (req, res, next) => {
    try {
        res.status(req.status || 200).json({
            success:true,
            data:req.userData,
            message:req.resultMessage || "Operation compileated !"
        })
    } catch (error) {
        next(error)
    }
}