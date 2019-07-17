module.exports = (func, assert) => {
    assert.doesNotThrow(func);
    // const res = func();
    // assert.hasOwnProperty(res, 'error');
    // assert.hasOwnProperty(res, 'result');
}