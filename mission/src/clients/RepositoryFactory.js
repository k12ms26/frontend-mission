import GetRepository from './GetRepository';
import PostRepository from './PostRepository';

const repositories = {
  get: GetRepository,
  post: PostRepository,
};

export default {
  get: (name) => repositories[name],
};
