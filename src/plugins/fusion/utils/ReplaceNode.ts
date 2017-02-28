export function replaceNode(node: any, target: any) {
    for (let key in node) {
        if (node.hasOwnProperty(key)) {
            if (key !== "start" && key !== "end") {
                delete node[key];
            }

        }
    }

    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            node[key] = target[key];
        }
    }
    console.log("NODe", node);
    console.log('*******');
}