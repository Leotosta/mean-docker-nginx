import App from './app';
import dotenv from 'dotenv';

dotenv.config()
const port = process.env.PORT || 5000;

App.listen(port, () => {
    console.log(`Back running on port ${port}`)
});