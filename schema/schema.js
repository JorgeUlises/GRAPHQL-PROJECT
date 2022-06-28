const graphql = require('graphql');
var _ = require('lodash');

//dummy data
var usersData = [
    {id: '1', name: 'Juan', age:25},
    {id: '2', name: 'Maria', age:20},
    {id: '3', name: 'Luis', age:22},
    {id: '4', name: 'Pedro', age:35},
]

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql


//Create types
const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user ...',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: graphql.GraphQLString},
        age: {type: GraphQLInt}
    })
});

// RouteQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},

            resolve(parent, args){
                // let user = {
                //     id: '334',
                //     age: 34,
                //     name: 'Paulo'
                // }
                // return user;

                return _.find(usersData, {id: args.id})
                // we resolve with data
                //get and return data from a datasource
            }
        }
    }
});

/** *
{
    user(id: "1"){
        name
        age
        id
    }
}

**/

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
}) 