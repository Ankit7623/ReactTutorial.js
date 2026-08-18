

const RightCardContent = (props) => {
  return (
   <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-bold rounded-full h-14 w-14 flex justify-center items-center">{props.id+1}</h2>
        <div>
            <p className="text-shadow-2xs text-lx leading-normal text-white mb-10">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least </p>
            <div className="flex justify-between">
                <button style={{backgroundColor:props.color}} className="text-white font-white font-medium px-8 py-3 rounded-full">{props.tag}</button>
                <button>
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
