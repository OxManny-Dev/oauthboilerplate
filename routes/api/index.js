const router = require("express").Router();


// we're inside /api

// /api/currentUser
router.get('/currentUser', (req, res) => {
    console.log(req.user);
    res.send(req.user);
});

module.exports = router;
