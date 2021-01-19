'use strict'

// 1. Please write a function that reverses a string
function reverseAString(string = '') {
    return string.split('').reverse().join('')
}

// 2. Please write a function that filters out numbers from a list
function filtersOutNumbers(list = []) {
    if (list.length === 0) {
        return list
    }
    const excludeInfinity = list.filter((element) => element !== Infinity)
    const excludeNaN = excludeInfinity.filter(
        (element) => isNaN(element) !== true
    )
    return excludeNaN.filter((element) => typeof element === 'number')
}

// 3. Please write a function that shows the usage of closures
function usageOfClosures() {
    let counter = 0
    return () => {
        counter += 1
        console.log(counter)
    }
}
let localScopeOne = usageOfClosures()
let localScopeTwo = usageOfClosures()
localScopeOne() //1
localScopeOne() //2
localScopeTwo() //1

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
function flatListOfItems(list = [], outputArray = []) {
    if (list.length === 0) return outputArray

    let firstElement = list.splice(0, 1)[0]

    if (Array.isArray(firstElement)) {
        return flatListOfItems([...firstElement, ...list], outputArray)
    } else {
        outputArray.push(firstElement)
        return flatListOfItems(list, outputArray)
    }
}

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
function findAllCommonElements(arrayOne = [], arrayTwo = []) {
    return arrayOne.filter((element) => arrayTwo.indexOf(element) !== -1)
}

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']
function findAllDifferentElements(arrayOne = [], arrayTwo = []) {
    let firstDifference = arrayOne.filter(
        (element) => arrayTwo.indexOf(element) === -1
    )
    let secondDifference = arrayTwo.filter(
        (element) => arrayOne.indexOf(element) === -1
    )
    return [...firstDifference, ...secondDifference]
}

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]
function transformsObjectToListOfTuples(inputObject = {}) {
    const arrayOfKeys = Object.keys(inputObject)
    return arrayOfKeys.map((key) => [key, inputObject[key]])
}

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

// Jest tests
describe('functions from index.js', () => {
    it('1) reverseAString', () => {
        expect(reverseAString('DOM')).toBe('MOD')
        expect(reverseAString('Metallica')).toBe('acillateM')
    })

    it('2) filtersOutNumbers', () => {
        expect(filtersOutNumbers([])).toEqual([])
        expect(
            filtersOutNumbers([
                Infinity,
                1,
                2,
                'a',
                3.3,
                'b',
                null,
                undefined,
                NaN,
                { a: 3 },
            ])
        ).toEqual([1, 2, 3.3])
    })

    it('4) flatListOfItems', () => {
        expect(
            flatListOfItems([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5])
        ).toEqual([2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5])
        expect(flatListOfItems([1, 2, 3, [4, 5, [6, 7]], 8])).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
        ])
    })
})

it('5) findAllCommonElements', () => {
    expect(
        findAllCommonElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e'])
    ).toEqual(['b', 4, 76])
})

it('6) findAllCommonElements', () => {
    expect(
        findAllDifferentElements(
            ['b', 3, 4, 76, 'c'],
            ['a', 'b', 4, 76, 21, 'e']
        )
    ).toEqual([3, 'c', 'a', 21, 'e'])
    expect(
        findAllDifferentElements([1, 2, 3], ['1', '2', '3', 1, 2, 3, '4', '5'])
    ).toEqual(['1', '2', '3', '4', '5'])
})

it('7) transformsObjectToListOfTuples', () => {
    expect(
        transformsObjectToListOfTuples({ color: 'blue', id: '22', size: 'xl' })
    ).toEqual([
        ['color', 'blue'],
        ['id', '22'],
        ['size', 'xl'],
    ])
})
