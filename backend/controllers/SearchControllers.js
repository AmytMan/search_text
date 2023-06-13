import mongoose from 'mongoose';

const SearchController = async (req, res) => {
  const input = req.query.q
  try {
    const data = mongoose.connection.db.collection("datainfo");
    const dataArray = await data.find({"Search Terms" :{ $regex: `^${input}`, $options: 'i' }}).toArray();
    const finalvalue = dataArray.sort((a,b)=> b['Num Searches'] - a['Num Searches']).slice(0,10)
    res.send(finalvalue);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export default SearchController;
