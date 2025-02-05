const getViewList = () => {
  const storedLists = localStorage.getItem("view-list");
  if (storedLists) {
    const storedList = JSON.parse(storedLists);
    return storedList;
  }
  return [];
};
const addToViewList=(id)=>{
    const stlist=getViewList();
    if(stlist.includes(id)){
        console.log('already exist')
    }else{
        stlist.push(id);
        const stlistConvert=JSON.stringify(stlist)
        localStorage.setItem('view-list',stlistConvert)
    }
}
export {addToViewList}
