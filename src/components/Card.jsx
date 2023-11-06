function Card({ image, name, status, species, gender, key }) {
    return (  
        <div className="w-96 shadow-2xl rounded-lg overflow-hidden card card-bordered ml-4 mb-2 mt-4">
            <figure>
                <img src={image} alt="R&M" className="w-full h-30 object-cover" />
            </figure>
            <div className="p-4" >
                <p className=" text-xl text-lime-600 text-center">{name}</p>
                <ul className="text-black list-disc pl-4">
                    <li>Status: {status}</li>
                    <li>Species: {species}</li>
                    <li>Gender: {gender}</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Card;