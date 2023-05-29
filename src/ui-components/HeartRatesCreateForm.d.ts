/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeartRatesCreateFormInputValues = {
    minimum?: string;
    maximum?: string;
    meanAverage?: string;
    dateTim?: string;
};
export declare type HeartRatesCreateFormValidationValues = {
    minimum?: ValidationFunction<string>;
    maximum?: ValidationFunction<string>;
    meanAverage?: ValidationFunction<string>;
    dateTim?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeartRatesCreateFormOverridesProps = {
    HeartRatesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    minimum?: PrimitiveOverrideProps<TextFieldProps>;
    maximum?: PrimitiveOverrideProps<TextFieldProps>;
    meanAverage?: PrimitiveOverrideProps<TextFieldProps>;
    dateTim?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeartRatesCreateFormProps = React.PropsWithChildren<{
    overrides?: HeartRatesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HeartRatesCreateFormInputValues) => HeartRatesCreateFormInputValues;
    onSuccess?: (fields: HeartRatesCreateFormInputValues) => void;
    onError?: (fields: HeartRatesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeartRatesCreateFormInputValues) => HeartRatesCreateFormInputValues;
    onValidate?: HeartRatesCreateFormValidationValues;
} & React.CSSProperties>;
export default function HeartRatesCreateForm(props: HeartRatesCreateFormProps): React.ReactElement;
