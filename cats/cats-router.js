// const router = require('express').Router()
const Cats = require('./cats-model')


// Create new cats/cat facts
router.post('/', async (req, res) => {
  try {
    const newCat = await getCats.addNewCat(req.body)
    if (!newCat) {
      res.status(404).json({
        message: 'Invalid information'
      })
    }
    res.status(201).json(newCat)
  } catch(err) {
    console.log('Error: ', err)
  }
})


// Read all cats 
router.get('/', async (req, res) => {
  try {
    const allCats = await Cats.getCats()
    res.status(200).json(allCats)
  } catch(err) {
    console.log('Error: ', err)
  }
})

// need to refactor with next(err)


// Read single cats  by id
router.get('/cats/:id', async (req, res) => {
  try {
    const cat = await Cats.getCatById(req.params.id)
    if (!cat) {
      res.status(404).json({
        message: 'Cat not found'
      })
    }
    res.status(200).json(cat)
  } catch(err) {
    console.log('Error: ', err)
  }
})

// Delete individual cats by id
router.delete('/cats/:id', async (req, res) => {
  try {
    const removed = await catsStats.removeCatsById(req.params.id)
    if (!removed) {
      res.status(404).json({ message: 'Invalid credentials' })
    }
    res.status(201).json({
      message: 'Cat removed'
    })
  } catch(err) {
    console.log('Error: ', err)
  }
})

module.exports = router