import { assertNever } from 'tsoa';

export type OrderPriorityValues = 0 | 1 | 2;

export default function getOrderPriorityString(orderPriority: OrderPriorityValues): string {
    switch (orderPriority) {
        case 0:
            return 'Low';
        case 1:
            return 'Medium';
        case 2:
            return 'High';
        default:
            assertNever(orderPriority);
    }
}
