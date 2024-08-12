import { InputHTMLAttributes, KeyboardEvent } from "react";
import { Input } from "../Input";

interface CurrencyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: number
    onChangeValue?: (value: number) => void
    maximumFractionDigits?: number
    minimumFractionDigits?: number
    fractionDigits?: number
    useGrouping?: boolean
}

function CurrencyInput({
    value,
    onChangeValue,
    fractionDigits,
    maximumFractionDigits,
    minimumFractionDigits,
    useGrouping,
    ...props
}: CurrencyInputProps) {
    
    function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        const char = e.key
        if (!isNaN(parseInt(char))) {
            const newValue = (value || 0) * 10 + parseInt(char)
            return onChangeValue?.(newValue)
        }

        if (char === "Backspace") {
            const newValue = parseInt((value || 0).toString().substring(0, (value || 0).toString().length - 1)) || 0
            return onChangeValue?.(newValue)
        }
    }

    const displayValue =
        ((value || 0) / (10 ** (fractionDigits ?? maximumFractionDigits ?? 2)))
            .toLocaleString('pt-BR', {
                maximumFractionDigits: fractionDigits ?? maximumFractionDigits ?? 2,
                minimumFractionDigits: fractionDigits ?? minimumFractionDigits ?? 0,
                useGrouping
            })

    return (
        <input
            value={displayValue}
            {...props}
            onKeyDown={handleKeyPress}
        />
    )
}

export { CurrencyInput };
