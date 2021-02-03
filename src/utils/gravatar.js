/*instalacion md5 para encriptar email en gravatar
npm install md5 --save*/
import md5 from 'md5';

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    const formattedEmail = (email).trim().toLowerCase();
    const hash = md5(formattedEmail, {encoding: "binary"});
    return `${base}${hash}`
}

export default gravatar;