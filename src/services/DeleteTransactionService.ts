import AppError from '../errors/AppError';

import {getCustomRepository} from "typeorm";

import Transaction from "../models/Transaction";

import Transactionsrepository from "../repositories/TransactionsRepository";

class DeleteTransactionService {
  public async execute(): Promise<void> {
    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if(!transaction){
      throw new AppError('Transaction does not exist');
    }
    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
