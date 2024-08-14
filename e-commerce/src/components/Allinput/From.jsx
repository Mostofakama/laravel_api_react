import classes from '../styles/From.module.css'
export default function From({children,...rest}){
    return (
        <form className={classes.From} {...rest}>
            {children}
        </form>
    )
}