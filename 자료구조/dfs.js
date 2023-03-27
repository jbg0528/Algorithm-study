const graph={
    A:["B","C"],
    B:["A","C","D"],
    C:["A","B","D"],
    D:["B","C"]
};

let visited = [];
let visitedNode = [];
function dfs(start){
    if(!visitedNode.includes(start)){
        visited[start]=true;
        visitedNode.push(start);
    }
    for(let curNode of graph[start]){
        if(!visited[curNode]){
            dfs(curNode);
        }
    }
}
dfs("A");
console.log(visitedNode);

// 백준 백트래킹 문제