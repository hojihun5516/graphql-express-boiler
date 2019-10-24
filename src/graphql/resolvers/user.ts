import { User } from "../../entity/User";
import { ApolloError } from "apollo-server-core";

export default {
    Query: {
        user: async (parent, {id}) => {
            try{
                const findUser: undefined | User = await User.findOne({id});
                if(!findUser) throw new ApolloError('')
                return findUser;
            }
            catch(err){
                throw new ApolloError('loginError', '403');
            }
        },
        users:  async (parent, args) => {
            return await User.find();
        }
    },
    Mutation: {
        join: async (parent, args) => {
            const user = await User.create({...args.input}).save();
            return user
        },
        updateUser: async (parent, args) => {
            return "hello"
        }
    },
  }
   