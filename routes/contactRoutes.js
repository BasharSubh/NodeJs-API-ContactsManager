const express = require('express');
const router = express.Router();

const {getAllContacts, createNewContact, getSpecificContact, updateContacts, deleteContacts } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');



// router.route('/').get(getAllContacts).post(createNewContact)

// router.route('/:id').get(getSpecificContact).delete(deleteContacts).put(updateContacts)

router.use(validateToken)

router.get('/', getAllContacts);
router.post('/', createNewContact);

router.get('/:id', getSpecificContact);
router.delete('/:id', deleteContacts);
router.put('/:id', updateContacts);




module.exports = router