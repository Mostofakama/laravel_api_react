export default function Textarea({Value,OnChange,Label,...rest}){
    return (
        <div className="form-group mt-2 ">
                        <label  >{Label} </label>
                        <textarea  className="form-control" value={Value} onChange={OnChange} {...rest} >

                            </textarea>
        </div>
    )
}