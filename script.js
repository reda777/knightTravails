class Node{
    constructor(data,depth=0,parent=null){
        this.parent=parent;
        this.data=data;
        this.nextArr=null;
        this.depth=depth;
    }
}
function knightMoves(start,dist){
    let nodePath=[];
    let root=new Node(start);
    let maxDepth=5;//most moves the knight could make in 8x8 board
    function buildBTree(node,depth=1){
        //create children of current node
        node.nextArr=createMoves(node,depth);
        let childs=node.nextArr;
        if(depth>=maxDepth){
            return;
        }
        depth+=1;
        //traverse every child of the current node
        for(let i=0;i<childs.length;i++){
            buildBTree(childs[i],depth);
        }
        return node;
    }
    function createMoves(root,depth){
        let parent=root;
        let chidren=[];
        let square=[];
        let weight=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
        for(let i=0;i<8;i++){
            if((parent.data[0]+weight[i][0]>0 && parent.data[0]+weight[i][0]<9)
                &&(parent.data[1]+weight[i][1]>0 && parent.data[1]+weight[i][1]<9)){
                square[0]=parent.data[0]+weight[i][0];
                square[1]=parent.data[1]+weight[i][1];
                temp=new Node(square,depth,parent);
                chidren.push(temp);
                if((square[0]==dist[0] && square[1]==dist[1])){
                    if(nodePath.length==0){
                        nodePath.push(temp);
                    }else{
                        if(nodePath[0].depth>temp.depth){
                            nodePath.pop();
                            nodePath.push(temp);
                        }    
                    }
                    
                }
                square=[];
            }
        }
        return chidren;
    }
    function pathArray(nodes){
        let arrPath=[];
        arrPath.unshift(nodes[0].data);
        let parent=nodes[0].parent;
        while(parent){
            arrPath.unshift(parent.data);
            parent=parent.parent;
        }
        return arrPath;
    }
    buildBTree(root);
    console.log("Path:",pathArray(nodePath));
}
knightMoves([1,1],[1,2]);



