function AnticipatedSyncFunction(){
  let list;
  const response = fetch("./city.list.json")
  
  while(response === undefined) {
    require('deasync').runLoopOnce();
  }   
  
  list = response.json()
  
  while(list === undefined) {
    require('deasync').runLoopOnce();
  }
  
  return list;    
}


const cityList = AnticipatedSyncFunction();

export {cityList}
