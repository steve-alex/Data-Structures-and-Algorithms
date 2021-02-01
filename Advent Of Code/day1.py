f = open("day1.txt", "r");
entries = f.read().split("\n")

def find_entries():
  entries_seen = {}
  total = 2020

  for entry in entries:
    couple = str(2020 - int(entry));
    
    if couple in entries_seen:
      return int(entry) * int(couple)
    else:
      entries_seen[entry] = True

  

print(print_entries())