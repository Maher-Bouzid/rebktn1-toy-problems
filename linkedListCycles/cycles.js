/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

var hasCycle = function(linkedList) {
  var p1 = linkedList;
  var p2 = linkedList;

  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
  // const storage = new Map();
  // while (linkedList) {
  //   if (linkedList.next === null) return false;
  //   if (storage.get(linkedList) === linkedList) return true;
  //   storage.set(linkedList, linkedList);
  //   linkedList = linkedList.next;
  // }
};

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = null;

hasCycle(a);
