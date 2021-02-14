// Time Complexity: O(countOfNodes + countOfIndexes) = O(N^2), we scan through every node once
// Space Complexity: O(visited) = O(N)

var findCircleNum = function(arr) {
    var visitedCityArr = new Array(arr.length).fill(false)

    // find all connected cities and mark them as visited
    var dfs = (index, node) => {
        if (visitedCityArr[index]) {
            return
        }
        visitedCityArr[index] = true

        for (var i = 0; i < node.length; i++) {
            if (i !== index && node[i] === 1) { // if city is not current and city is connected to current
                dfs(i, arr[i]) //
            }
        }
    }

    var countCircles = 0

    for (var i = 0; i < arr.length; i++) {
        var node = arr[i]
        if (!visitedCityArr[i]) {
            dfs(i, node)
            countCircles++
        }
    }

    return countCircles
};

findCircleNum([
    [1,0,0],
    [0,1,0],
    [0,0,1]
]) //3

findCircleNum([
    [1,1,0],
    [1,1,0],
    [0,0,1]
]) //2

findCircleNum([
    [1,1,0],
    [1,1,1],
    [0,1,1]
]) //1
