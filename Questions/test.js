setImmediate(() => {
  console.log('set immediate');
});

setTimeout(() => {
  console.log('set timeout');
}, 0);
