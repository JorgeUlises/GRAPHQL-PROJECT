const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require('./schema/schema');

const app= express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

// servidor habilitado en puerto 4000
app.listen(4000, ()=>{
    console.log('listening in port 4000');
})