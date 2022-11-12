class Board{
    constructor(dim=8){
        this.board=[Array(dim),Array(dim)];
    }
}
class Node{
    constructor(data){
        this.data=data;
        this.child=null;
    }
}
class BTree{
    constructor(parent){
        this.root=this.buildTree(parent);
    }
    buildTree(parent){
        let root=new Node(parent);
        root.child=this.createChildren(parent);
        let nextArr=root.child;
        for(let j=0;j<nextArr.length;j++){
            nextArr[j].child=this.createChildren(nextArr[j].data);
            for(let i=0;i<nextArr[j].child.length;i++){
                nextArr[j].child[i].child=this.createChildren(nextArr[j].child[i].data);
            }
        }
        return root;
    }
    createChildren(parent){
        let chidren=[];
        let square=[];
        let temp;
        let add=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
        for(let i=0;i<8;i++){
            if((parent[0]+add[i][0]>0 && parent[0]+add[i][0]<9)&&(parent[0]+add[i][1]>0 && parent[0]+add[i][1]<9)){
                square[0]=parent[0]+add[i][0];
                square[1]=parent[0]+add[i][1];
                temp=new Node(square);
                chidren.push(temp);
                square=[];
            }
        }
        return chidren;
    }
}
let parent=[4,4];
let tree=new BTree(parent);
console.log(tree,tree.root);