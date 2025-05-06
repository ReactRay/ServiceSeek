

export function FormPost() {
    return <div className="landing-page"><h2>
        lets post something!</h2>

        <form >
            <div className="form-group">

                <input type="text" placeholder="title" />

            </div>
            <div className="form-group">


                <input type="text" placeholder="body" />

            </div>

            <button className="btn">Submit</button>
        </form>

    </div>;
}