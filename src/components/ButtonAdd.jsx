
import { useNavigate } from "react-router-dom";

const ButtonAdd = () => {
    const navigate = useNavigate()

    return (
        <div className="container-fluid">
            <div className="btnAdd text-end">
                <button type="button" onClick={() => navigate("/add-contact")} className="btn btn-success mb-5">Add new contact</button>
            </div>
        </div>
    )
}

export default ButtonAdd;