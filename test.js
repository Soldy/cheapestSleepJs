const sleep = require('./index.js').sleep;
(async ()=>{
    console.log('stand by for 3 seconds');
    await sleep(3);
    console.log('that was 3 seconds');
})();
