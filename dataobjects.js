export let shallowcopyDataX = {
    title: "used to copy",
    hierarchy: 1,
    intarray: [1, 3, 4, 6],
    childobj1: {
        childtitle: "to demo shallow copy, fail",
        hierarchy: 2,
        stringarry: ["1", "3", "4", "6"]
    }
}

export let deepcopyDataX = {
    title: "used to copy",
    hierarchy: 1,
    intarray: [1, 3, 4, 6],
    childobj1: {
        childtitle: "to demo deep copy",
        hierarchy: 2,
        stringarry: ["1", "3", "4", "6"]
    },
    childobj2: {
        childtitle: "to demo nested nested deep copy",
        hierarchy: 2,
        stringarry: ["16", "33", "44", "61"],
        objarray: [
            {
                grandchild: "yeah grand child play",
                hierarchy: 3,
                grandObj: {
                    hierarchy: 4,
                    desc: "let beat it"
                }
            }
        ]
    }
}