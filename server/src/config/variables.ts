import 'dotenv/config';
const PALABRA = process.env.PALABRA as string;
const PASAR = process.env.PASAR as string;
const URL_DATABASE = process.env.URL_DATABASE as string;
export {
    PALABRA,
    PASAR,
    URL_DATABASE
}