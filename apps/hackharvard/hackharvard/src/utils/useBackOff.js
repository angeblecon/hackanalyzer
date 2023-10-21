const { backOff } = require('exponential-backoff');

const useBackOff = async func => {
  return await backOff(async () => {
    try {
      return await func();
    } catch (err) {
      return Promise.reject(err);
    }
  }, {
    numOfAttempts: 20,
    timeMultiple: 1.05
  })
    .catch(console.error);
};

export default useBackOff;