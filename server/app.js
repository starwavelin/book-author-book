const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({

}));

app.listen(4001, () => {
    console.log('Listening on port 4001');
});
