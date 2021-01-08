print("Hello, world!")

print('line1\nline2\nline3');

fruits = ['Orange', 'Pear', 'Lychee']

print("Orange in fruits?: {}".format('Orange' in fruits))

for (i, fruit) in enumerate(fruits):
  print("{} - {}".format(i, fruit))

declaration = 'For the land of the free'
print(declaration.replace('free', 'not so free'))


class Orange:
  def __init__(self, weight, color):
    print("Created an Orange!")
    self.weight = weight
    self.color = color

  def rot(self, days, temp):
    self.mold = days * temp

orange = Orange(60, "Orange")
orange.rot(10, 98)
print(orange.mold)
