import * as Behaviour from './Behaviour';
import * as SwapApis from '../../behaviour/swapping/SwapApis';
import SwapSchema from '../../behaviour/swapping/SwapSchema';

export default <any> Behaviour.create({
  fields: SwapSchema,
  name: 'swapping',
  apis: SwapApis
});