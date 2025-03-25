import classes from './input.module.css';

const Input = (props: React.HTMLProps<HTMLInputElement>) => {
  return (
    <>
      <div className={classes.formGroup}>
        {
          props.label && <label className={classes.label} htmlFor="pName">{props.label}:</label>
        }
        <input
          {...props}
          className={classes.input}
        />
        {/* <span className={classes.error}>{errorsList['name']}</span> */}
      </div>
    </>
  )
}

export default Input;