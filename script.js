class Node{
    constructor(data,depth=0,parent=null){
        this.parent=parent;
        this.data=data;
        this.nextArr=null;
        this.depth=depth;
    }
}
function buildBTree(node,count){
    //create children of current node
    node.nextArr=createMoves(node,count);
    let childs=node.nextArr;
    if(count>3){
        return;
    }
    count+=1;
    //traverse every child of the current node
    for(let i=0;i<childs.length;i++){
        buildBTree(childs[i],count);
    }
    return node;
}
function createMoves(root,count){
    let parent=root;
    let chidren=[];
    let square=[];
    let add=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
    for(let i=0;i<8;i++){
        if((parent.data[0]+add[i][0]>0 && parent.data[0]+add[i][0]<9)
            &&(parent.data[1]+add[i][1]>0 && parent.data[1]+add[i][1]<9)){
            square[0]=parent.data[0]+add[i][0];
            square[1]=parent.data[1]+add[i][1];
            
            temp=new Node(square,count,parent);
            chidren.push(temp);
            if(square[0]==dist[0] && square[1]==dist[1]){
                paths.push(temp);
            }
            square=[];
        }
    }
    return chidren;
}
let paths=[];
let dist=[1,2];
let root=new Node([1,1]);
console.log(buildBTree(root,1));
console.log("possible nodes:",paths);


