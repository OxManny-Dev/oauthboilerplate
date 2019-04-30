const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require('./../models');

router.get('/users', async (req, res) => {
    console.log(req.user);
    
    const users = await db.User.find();
    res.json(users);
})

// API Routes
router.use("/api", apiRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
