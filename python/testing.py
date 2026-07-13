lst = [1,2,3]
lst.append(4)
lst.pop(2)
print(lst)
s = set()
s.add(1)
print(s)
d = {1:'A',2:'C'}
for k,v in d.items():
    print(k,v)
def add(a,b):
    return a+b
print(add(5,6))
class first:
    def __init__(self, x):
        self.x = x

    def fn1(self):
        print(self.x)

    def fn2(self, y):
        print(self.x + y)

obj = first(3)
obj.fn1()
obj.fn2(5)

import json
user = {"name":"varsh","age":19}
res = json.dumps(user)
print(res)

with open("user.json", "r") as file:
    data = json.load(file)

print(data)

    #obj = first(3)