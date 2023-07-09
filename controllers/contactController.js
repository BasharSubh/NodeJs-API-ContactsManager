const asyncHandler = require("express-async-handler")
const Contact = require('../models/contactModel')


const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})

const createNewContact = asyncHandler(async (req, res) => {
    
      const { name, email, phone } = req.body;
      if (!name || !email || !phone ) {
        res.status(400);
        throw new Error("All fields are mandatory!");
      }
  
      const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
      });
  
      res.status(201).json(contact);
 
  });

const getSpecificContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(400)
        throw new Error('no contact found')
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error('you cant view contact for other users')
    }

    res.status(200).json({contact})
})

const updateContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(400)
        throw new Error('no contact found')
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error('you cant update contact for other users')
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.status(200).json(updatedContact)
})

const deleteContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(400)
        throw new Error('no contact found')
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error('you cant delete contact for other users')
    }

    await Contact.deleteOne({ _id: req.params.id });

    res.status(200).json(contact)
})


module.exports = {getAllContacts, createNewContact, getSpecificContact, updateContacts, deleteContacts}