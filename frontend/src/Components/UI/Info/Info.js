// import classes from "./Info.module.css";

export default function Info(){
    return(

        <div className={"container-fluid my-5 bg-danger" }>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <p>registrati</p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <p>scegli </p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <p>streamma</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-lg-4">
                        <p>giochi</p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <p>categorie</p>
                    </div>
                    
                    <div className="col-12 col-lg-4">
                        <p>piattaforme</p>
                    </div>
                </div>
            </div>
        </div>

    );
}