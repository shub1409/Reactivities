import React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
  errors: any;
}

export default function ValidationError({ errors }: Props) {
  let errorList: string[] = [];

  if (Array.isArray(errors)) {
    errorList = errors;
  } else if (errors && typeof errors === 'object') {
    // Flatten values and ensure we ONLY keep primitive strings (ignoring Axios objects/headers)
    errorList = Object.values(errors)
      .flatMap((val: any) => (Array.isArray(val) ? val : [val]))
      .filter((val): val is string => typeof val === 'string');
  }

  if (errorList.length === 0) {
    return null;
  }

  return (
    <Message error>
      <Message.List>
        {errorList.map((err, i) => (
          <Message.Item key={i}>{err}</Message.Item>
        ))}
      </Message.List>
    </Message>
  );
}