import { SimpleChanges } from '@angular/core';

export const detectShallowInputChanged = (changeObj: SimpleChanges, prop: string) => {
    return changeObj[prop] && changeObj[prop].previousValue !== changeObj[prop].currentValue;
};
