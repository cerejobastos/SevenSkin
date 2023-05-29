/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeartRates } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeartRatesUpdateFormInputValues = {
    minimum?: string;
    maximum?: string;
    meanAverage?: string;
    dateTim?: string;
};
export declare type HeartRatesUpdateFormValidationValues = {
    minimum?: ValidationFunction<string>;
    maximum?: ValidationFunction<string>;
    meanAverage?: ValidationFunction<string>;
    dateTim?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeartRatesUpdateFormOverridesProps = {
    HeartRatesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    minimum?: PrimitiveOverrideProps<TextFieldProps>;
    maximum?: PrimitiveOverrideProps<TextFieldProps>;
    meanAverage?: PrimitiveOverrideProps<TextFieldProps>;
    dateTim?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeartRatesUpdateFormProps = React.PropsWithChildren<{
    overrides?: HeartRatesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    heartRates?: HeartRates;
    onSubmit?: (fields: HeartRatesUpdateFormInputValues) => HeartRatesUpdateFormInputValues;
    onSuccess?: (fields: HeartRatesUpdateFormInputValues) => void;
    onError?: (fields: HeartRatesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeartRatesUpdateFormInputValues) => HeartRatesUpdateFormInputValues;
    onValidate?: HeartRatesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeartRatesUpdateForm(props: HeartRatesUpdateFormProps): React.ReactElement;
