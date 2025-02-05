const getStoredReadList=()=>{
    const storedListr=localStorage.getItem('read-list');
    if(storedListr){
        const storedList=JSON.parse(storedListr)
        return storedList
    }else{
return [];
    }

}
const addToStoredReadList=(id)=>{
    const storeList=getStoredReadList();
    if(storeList.includes(id)){
        console.log(id,'already exist in the read list')
    }else{
        storeList.push(id);
        const storeListstr=JSON.stringify(storeList)
        localStorage.setItem('read-list',storeListstr)
    }
}
export {addToStoredReadList}