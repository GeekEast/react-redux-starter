import {createSelectorCreator, defaultMemoize} from 'reselect';
import { smartStrictEqual } from 'utils';

export const creatSmartEqualSelector = createSelectorCreator(
  defaultMemoize,
  smartStrictEqual
)