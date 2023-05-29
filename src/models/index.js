// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HeartRates } = initSchema(schema);

export {
  HeartRates
};