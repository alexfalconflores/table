```typescript
<Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead className="w-[200px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {invoices.map((invoice) => (
            <TableRow key={invoice.invoiceId}>
                <TableCell className="font-medium">
                    {invoice.invoiceId}
                </TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                    {'S./ '}
                    {invoice.amount.toFixed(2)}
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
    <TableFooter>
        <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
                {'S./ '}
                {totalAmount.toFixed(2)}
            </TableCell>
        </TableRow>
    </TableFooter>
</Table>
```
