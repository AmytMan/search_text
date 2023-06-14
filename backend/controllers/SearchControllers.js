import fs from 'fs';
import csv from 'csv-parser'
const SearchController = async (req, res) => {
   const input = req.query.q
  const result= []
  try {
   fs.createReadStream('D:/search/backend/SearchTermsDB.csv')
   .pipe(csv())
   .on('data',(chunk)=>{
    const newobj ={"Search Terms":chunk["\ufeffSearch Terms"] , "Num Searches": chunk["Num Searches"]}
    const compareValue = newobj['Search Terms']
    if(compareValue.startsWith(input)){
     result.push(newobj)
    }
  
   })
   .on('end',()=>{
    const sortedArray = result.sort((a,b)=>b['Num Searches'] - a['Num Searches']).slice(0,10)
    res.send(sortedArray)
   })

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export default SearchController;
