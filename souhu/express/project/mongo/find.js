const {
    find,
} = require('./db');

(async () => {
    // nosql
    const result = await find('NBA-teams');
    // const { name } = await result
    result = result.sort((a, b) => {
        return a._id * 1 - b._id * 1;
    });

})();
