import { useCallback } from 'react';
import useGoFarm from './useGoFarm';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { Lottery } from '../go-farm';

const useLotteryClaim = (lottery: Lottery) => {
  const goFarm = useGoFarm();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleClaim = useCallback((ticket) => {
    handleTransactionReceipt(
      goFarm.lotteryClaim(lottery.depositTokenName,ticket),
      `从 ${lottery.depositTokenName} 奖池领奖`,
    );
  }, [lottery, goFarm,handleTransactionReceipt]);

  return { onClaim: handleClaim };
};

export default useLotteryClaim;
