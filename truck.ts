function main(a) {
    let index;
    let ans = new Map()
    for (index = 0; index < a.length; ++index) {
        let X = a[index]['x']
        let Y = a[index]['y']
        let coordinate = X +"," + Y
        if (ans.has(coordinate)){
            let count = ans.get(coordinate) + 1
            ans.set(coordinate, count)
        }
        else{
            ans.set(coordinate, 1)
        }
    }
    console.log(ans)
    
};

main([{"x":5,"y":3},
            {"x":0, "y":0},
            {"x":4, "y":3},
            {"x":3, "y":3},
            {"x":2, "y":3},
            {"x":1, "y":3},
            {"x":0, "y":3},
            {"x":-1, "y":3},
            {"x":5, "y":3},
            {"x":0, "y":0},
            {"x":5, "y":3}])