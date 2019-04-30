const router = require("express").Router();


// we're inside /api

// /api/currentUser
router.get('/currentUser', (req, res) => {
    console.log(req.user);
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000');
});

module.exports = router;
