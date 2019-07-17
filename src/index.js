const babylon = require('babylon');
const generate = require('babel-generator').default;

module.exports = function({types: t}) {
    return {
        visitor: {
            VariableDeclaration(path) {
                path.node.declarations[0].init = babylon.parse(`await (async () => {
                    try {
                        return {
                            result: ${generate(path.node.declarations[0].init).code},
                        }
                    } catch(e) {
                        return {
                            error: e,
                            result: null
                        }
                    }
                })()`)
            }
        }
    }
}
