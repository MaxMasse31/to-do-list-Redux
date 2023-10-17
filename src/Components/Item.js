export default function Item(props) {

    return (
       <li className="border d-flex justify-content-between align-items-center">

<div className="p-3">{props.txt}</div>

<button className="btn btn-danger p-2" onClick={()=>props.delFunc(props.id) }> Supprimer </button>



       </li>
    )
}