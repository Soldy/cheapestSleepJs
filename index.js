
const sleep = function(seco) {
    return new Promise(
        resolve => {
            setTimeout(
                 ()=>pesolve(true),
                 seco*1000
            );
        }
    );
};

exports.sleep=sleep;
