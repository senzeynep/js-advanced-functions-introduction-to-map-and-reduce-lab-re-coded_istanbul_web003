// map-like functions

function mapToNegativize(sourceArray) {
    let targetArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        targetArray.push(sourceArray[i] * -1)
    }
    return targetArray
}

function mapToNoChange(sourceArray) {
    let targetArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        targetArray.push(sourceArray[i])
    }
    return targetArray
}

function mapToDouble(sourceArray) {
    let targetArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        targetArray.push(sourceArray[i] * 2)
    }
    return targetArray
}


function mapToSquare(sourceArray) {
    let targetArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        targetArray.push(sourceArray[i] ** 2)
    }
    return targetArray
}

// reduce-like functions

function reduceToTotal(sourceArray, startingPoint) {
    let total = 1
    if (startingPoint!= undefined)
        total += startingPoint
        for (let i = 1; i < sourceArray.length; i++) {
            total += sourceArray[i]
            }
        return total
}

function reduceToAllTrue(sourceArray) {
    let value = false
    for (let i = 0; i < sourceArray.length; i++) {
        if(sourceArray[i])
        value = true
        else {
            value = false
        }
    }
    return value
}


function reduceToAnyTrue(sourceArray) {
    let value = false
    for (let i = 0; i < sourceArray.length; i++) {
        if(sourceArray[i]) 
        return true
        } 
            return false
}