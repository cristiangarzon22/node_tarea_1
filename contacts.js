const fs  = require("fs").promises;


const contactsPath ='./db/contacts.json';


function listContacts() {
    return fs.readFile(contactsPath).then((data) => {
      return JSON.parse(data.toString());
    }); 
     
  }
  
  function getContactById(contactId) {
    // ...tu código
    return listContacts().then((list) => {
      const filterContact = list.filter((contact) => contact.id === contactId);
      return filterContact;
  })
}
  
  function removeContact(contactId) {
    return listContacts().then((list) => {
      const filteredList = list.filter((contact) => contact.id !== contactId);
      return fs
        .writeFile(contactsPath, JSON.stringify(filteredList), (err) => {
          if (err) {
            console.err(err);
          }
        })
        .then(() => `Contact with id ${contactId} was successfully removed.`);
    });
  }
  
  function addContact(name, email, phone) {
    // ...tu código
    const  newContact = {

        name,
        email,
        phone
     };
     return listContacts().then((list) => {
        list.push(newContact);
     

     return fs.writeFile(contactsPath,JSON.stringify(list), (err) => {
            if (err) {
              console.err(err);
            }
          })
          .then(() => `Contact with name ${name} was successfully add.`);
        });
  
    }
  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };
  
  