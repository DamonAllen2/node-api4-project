

function get() {
    return users;
}
function insert(user) {
    users.push(user);
    return users;
}

module.exports = {
    get,
};