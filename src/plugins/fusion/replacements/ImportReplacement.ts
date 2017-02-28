//import { FileAnalysis } from '../../../analysis/FileAnalysis';

//const ast = FileAnalysis.acornParse(`const { a, b } = require("module")`);
//console.log(JSON.stringify(ast, null, 2));

const objectPattern = (props: any[]) => {
    const pattern = {
        "type": "ObjectPattern",
        "start": 6,
        "end": 14,
        "properties": []
    }
    props.forEach(prop => {
        pattern.properties.push({
            "type": "Property",
            "start": 8,
            "end": 9,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "name": prop
            },
            "kind": "init",
            "value": {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "name": prop
            }
        })
    });
    return pattern;
}
export function es6Import(names, moduleName) {
    let template = {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 34,
        "declarations": [
            {
                "type": "VariableDeclarator",
                "start": 6,
                "end": 34,
                "id": {},
                "init": {
                    "type": "CallExpression",
                    "start": 17,
                    "end": 34,
                    "callee": {
                        "type": "Identifier",
                        "start": 17,
                        "end": 24,
                        "name": "require"
                    },
                    "arguments": [
                        {
                            "type": "Literal",
                            "start": 25,
                            "end": 33,
                            "value": moduleName,
                            "raw": `"${moduleName}"`
                        }
                    ]
                }
            }
        ],
        "kind": "const"
    }
    template.declarations[0].id = objectPattern(names);
    return template;
}