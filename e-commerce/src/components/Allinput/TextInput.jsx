export default function TextInput({Value,OnChange,Label,...rest}){
    return (
        <div className="form-group mt-2 ">
                        <label  >{Label} </label>
                        <input  className="form-control" value={Value} onChange={OnChange} {...rest} />
        </div>
    )
}