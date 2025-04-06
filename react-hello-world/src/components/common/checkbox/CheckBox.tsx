import classes from './check-box.module.css';

const CheckBox = (props: React.HTMLProps<HTMLInputElement>) => {
  const { label, ...inputProps } = props;

  return (
    <div className={classes["checkbox-group"]}>
      <input {...inputProps} type="checkbox" id={`chk-lbl-${label}`} />
      {
        label ? (
          <label htmlFor={`chk-lbl-${label}`} className={props.checked ? classes.checked : ''}>
            <span>{label}</span>
            &nbsp;
            {inputProps.required && <span>*</span>}
          </label>
        ) : null
      }
    </div>
  );
};

export default CheckBox;