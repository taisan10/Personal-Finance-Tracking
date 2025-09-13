import mongoose from "mongoose"

const TransactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"],
    trim : true,
  },
  amount: {
    type: Number,
    required : [true , "Amount is Required"],

  },
  date: {
      type: Date,
      required : [true, "Date is Required"],
  },
  category: {
    type: String,
    required: [true, "Category is Required"],
  },
},
{
  timestamps: true,
}
);

TransactionSchema.methods.isIncome = function (){
  return this.amount>0;
};

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;