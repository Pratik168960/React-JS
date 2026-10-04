// STEP 1 (Removed): Basic component without props.
// function Card() {

// STEP 2 (Removed): Receiving the entire props object
// function Card(props) {
//   console.log(props.username);

// FINAL CODE: Destructuring props directly with a default value for btnText
function Card({ username, btnText = "visit me" }) {
    
    return (
        <div className="relative h-[400px] w-[300px] rounded-md mb-4">
            {/* STEP 1 (Removed): Standard HTML class and unclosed img tag copied from DevUI */}
            {/* <img class="z-0 h-full w-full rounded-md object-cover" src="..." alt="..." > */}
            
            {/* FINAL CODE: Fixed to className and self-closed the img tag */}
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                
                {/* STEP 1 (Removed): Hardcoded text. */}
                {/* <h1 className="text-lg font-semibold text-white">Delba</h1> */}
                
                {/* STEP 2 (Removed): Using the props object */}
                {/* <h1 className="text-lg font-semibold text-white">{props.username}</h1> */}
                
                {/* FINAL CODE: Using destructured prop */}
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                
                {/* STEP 1 (Removed): Hardcoded button text. */}
                {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black bg-white px-2 py-1 rounded">
                    View Profile →
                </button> */}
                
                {/* FINAL CODE: Using destructured btnText prop */}
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black bg-white px-2 py-1 rounded">
                    {btnText} →
                </button>
            </div>
        </div>
    )
}

export default Card