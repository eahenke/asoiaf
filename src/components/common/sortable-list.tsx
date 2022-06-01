import React, { useState } from 'react';

type SortFn = (a: any, b: any) => number;

type SortableListProps = {
    title: string;
    items: Record<string, any>[];
    onSort: SortFn;
    valueExtractor: (item: any) => string;
    keyExtractor: (item: any) => string;
};

const ORDERS = {
    ASC: 'ASC',
    DESC: 'DESC'
} as const;

const createSorter = (onSort: SortFn, order: typeof ORDERS.ASC | typeof ORDERS.DESC) => (a: any, b: any) => {
    if (order === ORDERS.ASC) {
        return onSort(a, b);
    } else {
        const ascResult = onSort(a, b);
        if (ascResult < 0) return 1;
        if (ascResult > 0) return -1;
        return 0;
    }
};

export default function SortableList({
    title,
    items,
    keyExtractor,
    valueExtractor,
    onSort
}: SortableListProps): JSX.Element {
    const [sortOrder, setSortOrder] = useState<typeof ORDERS.ASC | typeof ORDERS.DESC>(ORDERS.ASC);

    const sorter = createSorter(onSort, sortOrder);
    const sorted = [...items]
        .sort((a, b) => {
            return sorter(a, b);
        })
        .map((item) => {
            return {
                key: keyExtractor(item),
                value: valueExtractor(item)
            };
        });

    return (
        <div>
            <div>
                <p>{title}</p>
                <button onClick={() => setSortOrder(ORDERS.ASC)}>Asc</button>
                <button onClick={() => setSortOrder(ORDERS.DESC)}>Desc</button>
            </div>

            <ul>
                {sorted.map((item) => {
                    return <li key={item.key}>{item.value}</li>;
                })}
            </ul>
        </div>
    );
}
