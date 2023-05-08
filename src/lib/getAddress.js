const deal = require("../deal.js");
const accesses = require("../accesses.js");
const profiles = require("../profiles.js");

function getContacts() {
  const contactIds = accesses.data.map(({ attributes }) => {
    return attributes.profileId;
  });

  const profiles = getProfiles(contactIds);

  const contacts = accesses.data.reduce(
    (acc, { attributes: { role, side, profileId } }) => {
      if (!profiles[profileId]) return acc;
      return {
        ...acc,
        [profileId]: {
          profileId,
          role,
          side,
          ...profiles[profileId],
        },
      };
    },
    {}
  );

  return contacts;
}

function getProfiles(profileIds) {
  // TODO fetch profiles here

  const profileMap = profiles.data.reduce(
    (acc, { id, attributes, relationships }) => {
      const address = profiles.included.find(
        ({ id }) => id === relationships.address.data.id
      );
      return {
        ...acc,
        [id]: {
          ...attributes,
          address: address.attributes,
        },
      };
    },
    {}
  );

  return profileMap;
}

module.exports = {
  getContacts,
};
