class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        //to add data a specific index we used length
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        //in a array we delete an item we should shift index of all the others
        this.shiftItems(index);
    }

    shiftItems(index){
        for (let i = index; i<this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        //here we did we shifted until last item but not last item so we need to delete it also
        delete this.data[this.length -1];
    }

}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('!');
newArray.push('bye');
// newArray.pop();
newArray.delete(1);

console.log(newArray);