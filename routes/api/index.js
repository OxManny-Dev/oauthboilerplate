const router = require("express").Router();
const todoRoutes = require('./todoRoutes');

// we're inside /api
router.use('/todos', todoRoutes)

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
