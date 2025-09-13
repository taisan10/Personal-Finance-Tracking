import Transaction  from "../models/Transaction.js";

export const getTransactions = async (req,res )=>{
  try{
    const transactions = await Transaction.find().sort({createdAt: -1});
    const CheckIncome= transactions.map(txn =>({
      ...txn.toObject(), 
      isIncome: txn.isIncome()
    }));
    res.status(200).json(CheckIncome);

  }
  catch(error){
    res.status(500).json({message: error.message});
  }
};

export const getTransactionById = async (req, res)=>{
  try{
const transaction = await Transaction.findById(req.params.id);
if(!transaction){
  return res.status(404).json({message: "Not found "})
}
res.status(200).json({
  ...transaction.toObject(),
  isIncome: transaction.isIncome()
})
  }
  catch(error){
res.status(500).json({message: error.message});
  }
};

export const createTransaction = async (req, res)=>{
  const { title,amount,date,category }= req.body;
  try{
const newtransaction = new Transaction({title,amount,date,category });
const SavedTransaction = await newtransaction.save();

res.status(200).json({
  ...SavedTransaction.toObject(),
  isIncome: SavedTransaction.isIncome()
});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Transaction Not Updated" });
    }
    res.status(200).json({
      ...updated.toObject(),
      isIncome: updated.isIncome()
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Transaction.findByIdAndDelete(
      req.params.id);
      

    if (!deleted) {
      return res.status(404).json({ message: "Transaction Not Found " });
    }
  res.status(200).json({ message: "Transaction Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

  