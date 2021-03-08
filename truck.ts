function main(a) {
    let index;
    // Created a Map to store coordinates of stores
    let ans = new Map()
    if (a === undefined || a.length == 0) {
        console.log("Empty input list")
        return ans
    }
    for (index = 0; index < a.length; ++index) {
        let X = a[index]['x']
        let Y = a[index]['y']
        let coordinate = X +"," + Y
        ans.set(coordinate, 0)
    }
    // Initialize the count of start coordinate to 1
    ans.set(a[0]['x'] +"," + a[0]['y'], 1)
    // Traverse the given list of coordinates
    for(let i = 0; i< a.length-1; i++){
        let x1 = a[i]['x']
        let y1 = a[i]['y']
        let x2 = a[i+1]['x']
        let y2 = a[i+1]['y']
        let slope = null
        let intercept = null
        if(x1!=x2){
            slope = (y2-y1)/(x2-x1)
            intercept = y1 - (slope * x1) 
        }
        // Traverse the Map of distinct coordinates
        for (let [key, value] of ans) {
            let str = key.split(",");
            let eqn_x = (slope * str[0]) + intercept
            let check = x1+","+y1
            if(x1==x2 && str[0]==x1 && str[1]>=Math.min(y1, y2) && str[1]<=Math.max(y1, y2) && check!=key){
                let count = ans.get(key) + 1
                ans.set(key, count)
            }
            if(str[1] == eqn_x && str[0]>=Math.min(x1, x2) && str[0]<=Math.max(x1, x2) && str[1]>=Math.min(y1, y2) && str[1]<=Math.max(y1, y2) && check!=key){
                let count = ans.get(key) + 1
                ans.set(key, count)
            }
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
