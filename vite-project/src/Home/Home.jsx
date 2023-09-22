import IMG from "./Img/Img";
const Home = () => {
    return (
        <>
            <div className="Home_container">
                <div className="Img_card" style={{ filter: blur('0.5rem') }}> </div>
                <div style={{ Width: '100%' }} className="img_p"><p>What dish are you making today?</p></div>
                <h1 style={{textAlign:'center',padding:'1rem'}}>Todays specials</h1>
                <div className="main_card_container">
                    
                    <div className="Card_img_container">
                        <div className="shadow">
                            <img src={IMG[1].URL} />
                            <div class="card_info">
                                <h4><b>Spicy</b></h4>
                                <p>Add rounded corners to the top left and the top right corner of the image</p>
                                <button>Click for recipe</button>
                            </div>
                        </div>
                    </div>

                    <div className="Card_img_container">
                        <div className="shadow">
                            <img src={IMG[1].URL} />
                            <div class="card_info">
                                <h4><b>Spicy</b></h4>
                                <p>Add rounded corners to the top left and the top right corner of the image</p>
                                <button>Click for recipe</button>
                            </div>
                        </div>
                    </div>
                    <div className="Card_img_container">
                        <div className="shadow">
                            <img src={IMG[1].URL} />
                            <div class="card_info">
                                <h4><b>Spicy</b></h4>
                                <p>Add rounded corners to the top left and the top right corner of the image</p>
                                <button>Click for recipe</button>
                            </div>
                        </div>
                    </div>
                    




                </div>


            </div>
        </>
    )
}
export default Home;