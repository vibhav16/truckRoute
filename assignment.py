def func(coordinates):
  res = {}
  for coordinate in coordinates:
    X,Y = coordinate['x'],coordinate['y']
    res[("(x:"+str(X)+","+"y:"+str(Y)+")")] = res.get(("(x:"+str(X)+","+"y:"+str(Y)+")"),0) + 1
  return res

print(func([{"x":5,"y":3},
            {"x":0, "y":0},
            {"x":4, "y":3},
            {"x":3, "y":3},
            {"x":2, "y":3},
            {"x":1, "y":3},
            {"x":0, "y":3},
            {"x":-1, "y":3},
            {"x":5, "y":3},
            {"x":0, "y":0},
            {"x":5, "y":3}]
          ))