const {emitNotifyToArray} = require('../helper')
/**
 * @param {*} io from socket.io library
 */

let addNewContact = (io, data, clients, user) => {
  let notif = {
    message: `${user.lastname} ${user.firstname} wants to add you to contact`,
    picture: user.picture,
    firstname: user.firstname,
    lastname: user.lastname,
  };
  // emit notifications
  if (clients[data.contactId]) {
    emitNotifyToArray(
      clients,
      data.contactId,
      io,
      "res-add-new-contact",
      notif
    );
  }
};

module.exports = addNewContact;