let error404 = {

    render : async () => {
        let view =  `
        
        <div class="loader"></div>
            <div class="error" >
                <h1> Something Went wrong </h1>
                <p>please try again</p>
            </div>
            
        `
       
        return view
    }
    , after_render: async () => {
    }
}
export default error404;