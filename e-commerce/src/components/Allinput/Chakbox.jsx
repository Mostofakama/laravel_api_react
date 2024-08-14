export default function Chakbox({Label,...rest}){
    return (
        <div className="form-group form-check mt-2 ">
            <input type="checkbox" className="form-check-input"  {...rest} />
            <label className="form-check-label " for="exampleCheck1">{Label}</label>
        </div>
    )
}