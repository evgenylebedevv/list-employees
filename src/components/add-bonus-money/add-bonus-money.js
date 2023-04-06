import "./add-bonus-money.css"

const AddBonusMoney = () => {
    return(
        <div className="row gap-2 add-bonus-money">
        <div className="d-grid gap-2 col-lg-4 col-sm-6 col-md-5 mx-auto">
            <button className="btn btn-warning" type="button">Дать премию 50%</button>
            <button className="btn btn-danger" type="button">Дать премию 100%</button>
        </div>
        <div className="d-grid gap-2 col-lg-4 col-sm-6 col-md-5 mx-auto">
            <button className="btn btn-success" type="button">Дать премию 200%</button>
            <button className="btn btn-dark" type="button">Дать премию 500%</button>
        </div>
        </div>

    )
}

export default AddBonusMoney;