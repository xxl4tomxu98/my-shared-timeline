// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

/* There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?


Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible. The two courses are cycled loop


Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5

*/

function adjacencyList(edgesList){
  let adjList = {};
  for(let edge of edgesList){
    let [course, prereq] = edge.map(String);
    if(course in adjList) {
      adjList[course].push(prereq);
    } else {
      adjList[course] = [prereq];
    }
    if(!(prereq in adjList)){
      adjList[prereq] = [];
    }
  }
  return adjList;
}



function canFinish(numCourses, prerequisites) {
  let adjList = adjacencyList(prerequisites);
  totalCourses = Object.keys(adjList).length;
  const visited = new Set();
  // this loop ensures all nodes in graph are included
  let isEligibleCourseAvailable = true;
  while(isEligibleCourseAvailable){
    isEligibleCourseAvailable = false;
    for (let node in adjList) {
      let allPrereqMet = adjList[node].every(ele => visited.has(ele));
      if(allPrereqMet && !(visited.has(node))){
        visited.add(node);
        isEligibleCourseAvailable = true;
      }
    }
  }
  return visited.size===totalCourses;
}


let numCourses = 2;
let prerequisites = [[1,0],[0,1]];
console.log(canFinish(numCourses, prerequisites));
