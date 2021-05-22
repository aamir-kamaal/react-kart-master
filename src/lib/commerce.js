
import Commerce from '@chec/commerce.js';
import keys from './../../env.json'

// in production store the key in .env file use this instead 
// export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

export default new Commerce('pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec', true);