import {app}  from './app.js';
import dbConnect from './db/dbConnect.js';

//Database Connection
dbConnect.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to database as ID', dbConnect.threadId);
});

app.listen(8800, () => {
    console.log("Sever Running at 8800")
})

