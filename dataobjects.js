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
        childtitle1: "to demo deep copy",
        hierarchy2: 2,
        stringarry1: ["1", "3", "4", "6"]
    },
    childobj2: {
        childtitle2: "to demo nested nested deep copy",
        hierarchy2: 2,
        stringarry2: ["16", "33", "44", "61"],
        objarray2: [
            {
                grandchild: "yeah grand child play",
                hierarchy3: 3,
                grandObj: {
                    hierarchy: 4,
                    desc: "let beat it"
                }
            }
        ]
    }
}

deepcopyDataX.circular = deepcopyDataX;