
const sleep = function(seco) {
    return new Promise(
        resolve => {
            setTimeout(
                 ()=>resolve(true),
                 seco*1000
            );
        }
    );
};

exports.sleep=sleep;
