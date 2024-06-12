export const typeDefs = `#graphql

    type Game {
        id: ID!
        title: String
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    # Entry points to the graph and specify return types (Not optional)
    type Query {
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
        reviews: [Review]
        review(id: ID!): Review
    }

    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!):[Game]
        editGame(id: ID!, edits: EditGameInput! ): Game
    }

    input AddGameInput {
        title: String!
        platform: [String!]!  
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }

`