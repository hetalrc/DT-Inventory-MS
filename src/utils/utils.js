import {defaultpageSize} from '../constants';

export const generateRecords = (startIndex) => {
    const list = [];
    const pageSize = startIndex ? startIndex + 1000 : defaultpageSize;
    for (let index = startIndex || 0; index < pageSize; index++) {
        let precision = 100; // 2 decimals
        let randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1);
        list.push({
        id: index + 1, name: `Item ${index + 1}`, cost: randomnum, added: false, draggable: true, className:'productCard' 
        });
    }
    return list;
};