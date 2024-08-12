import { InputHTMLAttributes, KeyboardEvent, useMemo, useState } from "react";
import { Input } from "../Input";
import NumberParser from "../../utils/NumberParser";

interface DecimalInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: number
    onChangeValue?: (value: number) => void
    maximumFractionDigits?: number
    minimumFractionDigits?: number
    fractionDigits?: number
    useGrouping?: boolean
    locale?: string
}

function DecimalInput({
    value,
    onChangeValue,
    fractionDigits,
    maximumFractionDigits,
    minimumFractionDigits,
    useGrouping,
    onChange,
    locale,
    ...props
}: DecimalInputProps) {

    const [temporaryValue, setTemporaryValue] = useState<string>()

    const numberParser = useMemo(() => new NumberParser(locale || window.navigator.language), [locale])

    function handleBlur() {

        // const parsedValue = Number(temporaryValue?.replace(',', '.'))
        const parsedValue = numberParser.parse(temporaryValue ?? '')
        
        if (!isNaN(parsedValue))
            onChangeValue?.(parsedValue)
     
        setTemporaryValue(undefined)
    }

    const displayValue = temporaryValue ?? value?.toLocaleString('pt-BR', {
        minimumFractionDigits: fractionDigits ?? minimumFractionDigits,
        maximumFractionDigits: fractionDigits ?? maximumFractionDigits,
        useGrouping: useGrouping,
    }) ?? ''

    return (
        <input
            value={displayValue}
            {...props}
            onChange={e => setTemporaryValue(e.target.value)}
            onBlur={handleBlur}
        />
    )
}

export { DecimalInput };
