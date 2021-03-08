def main(coordinates):
  res = {}
  for coordinate in coordinates:
    X,Y = coordinate['x'],coordinate['y']
    res[(X,Y)] = 0
  X,Y = coordinates[0]['x'],coordinates[0]['y']
  res[(X,Y)] = res.get((X,Y),0) + 1
  for i in range(len(coordinates)-1):
    x1,y1 = coordinates[i]['x'], coordinates[i]['y']
    x2,y2 = coordinates[i+1]['x'], coordinates[i+1]['y']
    slope = 0
    if x1!=x2:
        slope = (y2-y1)/(x2-x1)
        intercept = y1 - (slope * x1)
    for c in res:
      x,y = c
      eqn_x = (slope * x) + intercept
      if x1==x2 and x==x1 and y in range(min(y1,y2),max(y1,y2)+1) and (x1,y1) != (x,y):
        res[(x,y)] = res.get((x,y),0) + 1
      if y == eqn_x and x in range(min(x1,x2),max(x1,x2)+1) and y in range(min(y1,y2),max(y1,y2)+1) and (x1,y1) != (x,y):
        res[(x,y)] = res.get((x,y),0) + 1
  return res


print(main([{"x":5,"y":3},
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
