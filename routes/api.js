const { Router } = require('express')

const router = Router();

router.get('/', (req, res) => {
	res.status(200).send('Welcome to the API endpoint')
})

module.exports = router;