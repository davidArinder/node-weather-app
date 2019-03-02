console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000)

setTimeout(() => {
  console.log('Testing zero');
}, 0)

console.log('Finishing up');
