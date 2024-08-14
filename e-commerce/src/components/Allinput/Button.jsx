export default function Buttons({Text,ClassName}){
    return (
        <div className="d-flex justify-content-center mt-3">
            <button  type="submit" className={`btn  ${ClassName} w-100`}>{Text}</button>
        </div>
    )
}