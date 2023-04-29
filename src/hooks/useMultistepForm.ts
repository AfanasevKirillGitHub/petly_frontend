import { ReactElement, useState } from 'react';

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const next = () => {
    setCurrentStepIdx(i => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIdx(i => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIdx(index);
  };

  return {
    currentStepIdx,
    step: steps[currentStepIdx],
    steps,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
    next,
    back,
    goTo,
  };
};
