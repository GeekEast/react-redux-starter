import { normalize, schema } from "normalizr";
import _ from 'lodash';
import { comment } from "typings/comment";

const commentSchema = new schema.Entity('comments') // 是复数没错
const commentsSchema = [commentSchema];

export const normalizeComments = (comments: [comment]) => {
  const data = normalize(comments, commentsSchema);
  return _.get(data, ['entities', 'comments'], {})
}


