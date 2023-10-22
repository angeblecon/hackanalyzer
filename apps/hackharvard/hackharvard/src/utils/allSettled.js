const allSettled = async promises => (
  Promise.allSettled
    ? await Promise.allSettled(promises)
    : await Promise.all(
      promises.map(p => p
        .then(value => ({
          status: 'fulfilled',
          value
        }))
        .catch(reason => ({
          status: 'rejected',
          reason
        }))
      )
    )
);

export default allSettled;
