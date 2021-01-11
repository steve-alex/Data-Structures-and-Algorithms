class Queue:
  def __init__(self, items):
    self.items = items

  
  def is_empty(self):
    return self.items == []

  def print_items(self):
    for i, item in enumerate(self.items):
      print(len(self.items) - i, item)

  def enqueue(self, item):
    self.items.insert(0, item)
  
  def dequeue(self):
    return self.items.pop()
  
  def size(self):
    return len(self.items)

  
queue = Queue(['Steve', 'Anna', 'Johny', 'Shaini', 'Omana', 'Michael'])
print('is empty?', queue.is_empty())
print(queue.print_items())
