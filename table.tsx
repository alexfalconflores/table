import { forwardRef, RefAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Table = forwardRef<HTMLTableElement, TableProps>(function (
    { className, children, ...props },
    ref
) {
    return (
        <div
            className={twMerge(
                'relative w-full overflow-auto',
                className?.wrapper
            )}
        >
            <table
                className={twMerge(
                    'w-full caption-bottom text-sm',
                    className?.table
                )}
                ref={ref}
                {...props}
            >
                {children}
            </table>
        </div>
    );
}) as TableForwardRef;
type TableForwardRef = React.ForwardRefExoticComponent<
    TableProps & RefAttributes<HTMLTableElement>
> & {
    Header: typeof TableHeader;
    Head: typeof TableHead;
    Row: typeof TableRow;
    Body: typeof TableBody;
    Cell: typeof TableCell;
    CellAction: typeof TableCellAction;
    Caption: typeof TableCaption;
    Footer: typeof TableFooter;
};
Table.displayName = 'Table';
interface TableProps
    extends Omit<React.ComponentPropsWithoutRef<'table'>, 'className'> {
    className?: {
        table?: string;
        wrapper?: string;
    };
}

export const TableHeader = forwardRef<
    HTMLTableSectionElement,
    TableHeaderProps
>(function ({ className, children, ...props }, ref) {
    return (
        <thead
            className={twMerge(
                `[&_tr]:border-b text-zinc-500 dark:text-zinc-400`,
                className
            )}
            ref={ref}
            {...props}
        >
            {/* <tr
                className={twMerge(
                    `border-b border-neutral-400 text-neutral-400 transition-colors hover:bg-neutral-200/50
                    data-[state=selected]:bg-neutral-50`,
                    className?.tr
                )}
            > */}
            {children}
            {/* </tr> */}
        </thead>
    );
});
TableHeader.displayName = 'TableHeader';
interface TableHeaderProps extends React.ComponentPropsWithoutRef<'thead'> {}

export const TableHead = forwardRef<HTMLTableHeaderCellElement, TableHeadProps>(
    function ({ className, children, ...props }, ref) {
        return (
            <th
                className={twMerge(
                    `h-10 px-2 text-left align-middle font-medium
                    [&>:has([type=checkbox])]:pr-0 [&>:has([type=checkbox])]:translate-y-[2px]
                    [&>[role=checkbox]]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </th>
        );
    }
);
TableHead.displayName = 'TableColumn';
interface TableHeadProps extends React.ComponentPropsWithoutRef<'th'> {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
    function ({ className, children, ...props }, ref) {
        return (
            <tbody
                className={twMerge(`[&_tr:last-child]:border-0`, className)}
                ref={ref}
                {...props}
            >
                {children}
            </tbody>
        );
    }
);
TableBody.displayName = 'TableBody';
interface TableBodyProps extends React.ComponentPropsWithoutRef<'tbody'> {}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
    function ({ className, children, selected = false, ...props }, ref) {
        return (
            <tr
                aria-selected={selected}
                data-selected={selected}
                className={twMerge(
                    `hover:bg-gray-200/50 dark:hover:bg-zinc-800/50 border-b border-gray-200 dark:border-zinc-700
                    data-[selected=true]:bg-gray-200/50 dark:data-[selected=true]:bg-zinc-800/50 transition-colors`,
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </tr>
        );
    }
);
TableRow.displayName = 'TableRow';
interface TableRowProps extends React.ComponentPropsWithoutRef<'tr'> {
    selected?: boolean;
}

export const TableCell = forwardRef<HTMLTableDataCellElement, TableCellProps>(
    function ({ className, children, ...props }, ref) {
        return (
            <td
                className={twMerge(
                    `p-2 align-middle [&>([role=checkbox]:checked)]:pr-0 [&>[role=checkbox]:checked]:translate-y-[2px]
                    [&>([type=checkbox]:checked)]:pr-0 [&>[type=checkbox]:checked]:translate-y-[2px]`,
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </td>
        );
    }
);
TableCell.displayName = 'TableCell';
interface TableCellProps extends React.ComponentPropsWithoutRef<'td'> {}

export const TableCellAction = forwardRef<
    HTMLTableDataCellElement,
    TableCellActionProps
>(function ({ children, className, ...props }, ref) {
    return (
        <TableCell
            className={twMerge(
                `*:inline-flex *:items-center *:justify-center *:gap-0.5 *:border-none`,
                className
            )}
            ref={ref}
            {...props}
        >
            <div>{children}</div>
        </TableCell>
    );
});
TableCellAction.displayName = 'TableCellAction';
interface TableCellActionProps extends React.ComponentPropsWithoutRef<'td'> {}

export const TableCaption = forwardRef<HTMLElement, TableCaptionProps>(
    function ({ className, children, ...props }, ref) {
        return (
            <caption
                className={twMerge(
                    `mt-4 tet-sm text-zinc-500 dark:text-zinc-400`,
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </caption>
        );
    }
);
TableCaption.displayName = 'TableCaption';
interface TableCaptionProps extends React.ComponentPropsWithoutRef<'caption'> {}

export const TableFooter = forwardRef<
    HTMLTableSectionElement,
    TableFooterProps
>(function ({ className, children, ...props }, ref) {
    return (
        <tfoot
            className={twMerge(
                `border-t bg-gray-200/50 dark:bg-zinc-800/50 font-medium [&>tr]:last:border-b-0 border-gray-200
                dark:border-zinc-700`,
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </tfoot>
    );
});
TableFooter.displayName = 'TableFooter';
interface TableFooterProps extends React.ComponentPropsWithoutRef<'tfoot'> {}

// export const

Table.Header = TableHeader;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.CellAction = TableCellAction;
Table.Caption = TableCaption;
Table.Footer = TableFooter;
