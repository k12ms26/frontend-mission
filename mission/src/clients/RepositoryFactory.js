import GetRepository from './GetRepository';

const repositories = {
  'item': GetRepository,
};

export default {
  get: name => repositories[name],
};
