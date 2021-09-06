let error404 = {

    render : async () => {
        let view =  `
        
        <div class="loader"></div>
            <div class="error" >
                <h1> Sorry !!!!! </h1>
                <p>Please try again..........</p>
            </div>
            
        `
       
        return view
    }
    , after_render: async () => {
    }
}
export default error404;