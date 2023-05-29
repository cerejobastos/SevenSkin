/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { HeartRates } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HeartRatesUpdateForm(props) {
  const {
    id: idProp,
    heartRates: heartRatesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    minimum: "",
    maximum: "",
    meanAverage: "",
    dateTim: "",
  };
  const [minimum, setMinimum] = React.useState(initialValues.minimum);
  const [maximum, setMaximum] = React.useState(initialValues.maximum);
  const [meanAverage, setMeanAverage] = React.useState(
    initialValues.meanAverage
  );
  const [dateTim, setDateTim] = React.useState(initialValues.dateTim);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = heartRatesRecord
      ? { ...initialValues, ...heartRatesRecord }
      : initialValues;
    setMinimum(cleanValues.minimum);
    setMaximum(cleanValues.maximum);
    setMeanAverage(cleanValues.meanAverage);
    setDateTim(cleanValues.dateTim);
    setErrors({});
  };
  const [heartRatesRecord, setHeartRatesRecord] =
    React.useState(heartRatesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(HeartRates, idProp)
        : heartRatesModelProp;
      setHeartRatesRecord(record);
    };
    queryData();
  }, [idProp, heartRatesModelProp]);
  React.useEffect(resetStateValues, [heartRatesRecord]);
  const validations = {
    minimum: [],
    maximum: [],
    meanAverage: [],
    dateTim: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          minimum,
          maximum,
          meanAverage,
          dateTim,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            HeartRates.copyOf(heartRatesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HeartRatesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Minimum"
        isRequired={false}
        isReadOnly={false}
        value={minimum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              minimum: value,
              maximum,
              meanAverage,
              dateTim,
            };
            const result = onChange(modelFields);
            value = result?.minimum ?? value;
          }
          if (errors.minimum?.hasError) {
            runValidationTasks("minimum", value);
          }
          setMinimum(value);
        }}
        onBlur={() => runValidationTasks("minimum", minimum)}
        errorMessage={errors.minimum?.errorMessage}
        hasError={errors.minimum?.hasError}
        {...getOverrideProps(overrides, "minimum")}
      ></TextField>
      <TextField
        label="Maximum"
        isRequired={false}
        isReadOnly={false}
        value={maximum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              minimum,
              maximum: value,
              meanAverage,
              dateTim,
            };
            const result = onChange(modelFields);
            value = result?.maximum ?? value;
          }
          if (errors.maximum?.hasError) {
            runValidationTasks("maximum", value);
          }
          setMaximum(value);
        }}
        onBlur={() => runValidationTasks("maximum", maximum)}
        errorMessage={errors.maximum?.errorMessage}
        hasError={errors.maximum?.hasError}
        {...getOverrideProps(overrides, "maximum")}
      ></TextField>
      <TextField
        label="Mean average"
        isRequired={false}
        isReadOnly={false}
        value={meanAverage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              minimum,
              maximum,
              meanAverage: value,
              dateTim,
            };
            const result = onChange(modelFields);
            value = result?.meanAverage ?? value;
          }
          if (errors.meanAverage?.hasError) {
            runValidationTasks("meanAverage", value);
          }
          setMeanAverage(value);
        }}
        onBlur={() => runValidationTasks("meanAverage", meanAverage)}
        errorMessage={errors.meanAverage?.errorMessage}
        hasError={errors.meanAverage?.hasError}
        {...getOverrideProps(overrides, "meanAverage")}
      ></TextField>
      <TextField
        label="Date tim"
        isRequired={false}
        isReadOnly={false}
        value={dateTim}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              minimum,
              maximum,
              meanAverage,
              dateTim: value,
            };
            const result = onChange(modelFields);
            value = result?.dateTim ?? value;
          }
          if (errors.dateTim?.hasError) {
            runValidationTasks("dateTim", value);
          }
          setDateTim(value);
        }}
        onBlur={() => runValidationTasks("dateTim", dateTim)}
        errorMessage={errors.dateTim?.errorMessage}
        hasError={errors.dateTim?.hasError}
        {...getOverrideProps(overrides, "dateTim")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || heartRatesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || heartRatesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
