// Central place for external integrations and links.

// Substack publication. The blog is built from `${SUBSTACK_URL}/feed` at build time.
export const SUBSTACK_URL = 'https://bravelittleheart.substack.com';
// Only posts tagged with this value (case-insensitive) are shown on the site.
// Set to '' or undefined to show all posts.
export const SUBSTACK_TAG = 'evera';
export const SUBSTACK_SUBSCRIBE_URL = `${SUBSTACK_URL}/subscribe`;

// Web3Forms (https://web3forms.com) access key for the contact form.
// This is a public key and safe to commit. Replace the placeholder with the
// real key to activate the form.
export const WEB3FORMS_ACCESS_KEY = '9e2fb18e-53de-4cea-8dbd-76e2355b3d81';

export const CONTACT_EMAIL = 'michelle@everamovement.com';

// Social links shown in the portfolio section. '#' = not yet available.
export const SOCIAL_LINKS = [
  { name: 'Substack', url: SUBSTACK_URL },
  { name: 'Instagram', url: '#' },
  { name: 'YouTube', url: '#' },
];
