// import classes from "./Info.module.css";

export default function Info(){
    return(

        <div className={"container-fluid my-5" }>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                        <p className="text-light fw-bold fs-3 text-uppercase">registrati</p>
                    </div>

                    <div className="col-12 col-lg-4 text-center">
                        <p className="text-light fw-bold fs-3 text-uppercase">scegli </p>
                    </div>

                    <div className="col-12 col-lg-4 text-center">
                        <p className="text-light fw-bold fs-3 text-uppercase">streamma</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                        <p className="text-light fw-bold fs-3 text-uppercase">giochi</p>
                    </div>

                    <div className="col-12 col-lg-4 text-center">
                        <p className="text-light fw-bold fs-3 text-uppercase">categorie</p>
                    </div>
                    
                    <div className="col-12 col-lg-4 text-center">
                        <p className="text-light fw-bold fs-3 text-uppercase">piattaforme</p>
                    </div>
                </div>
            </div>
        </div>

    );
}