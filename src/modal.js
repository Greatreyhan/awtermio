import React,{useEffect} from "react";
import database from "./firebaseinit";


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = React.useState("")
  const [tag, setTag] = React.useState("")
  const [date, setDate] = React.useState()
  const [time, setTime] = React.useState()


  const handleSubmit = (e) =>{

      e.preventDefault();
      if(title != "" && date != undefined && time != undefined){
      setShowModal(false);
      database.ref("reyhan").push({
          title,
          tag,
          date,
          time,
      })
      setTitle("");
      setTag("");
      setDate("");
      setTime("");
      }
  };
  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Activity
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-8/12">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    What's your activity?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto mx-auto">
                  <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg  sm:px-6 md:px-8 lg:px-10">
                    <div className="p-6 mt-8">
                        <div className="flex flex-col mb-2">
                          <div className=" relative ">
                            <input
                              type="text"
                              id="title"
                              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                              name="title"
                              value={title}
                              onChange={e=>setTitle(e.target.value)}
                              placeholder="Title"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className=" relative ">
                            <input
                              type="time"
                              id="time"
                              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                              name="time"
                              value={time}
                              onChange={e=>setTime(e.target.value)}
                              placeholder="Time"
                              required="required"
                            />
                          </div>
                          <div className=" relative ">
                            <input
                              type="date"
                              id="date"
                              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                              name="date"
                              value={date}
                              onChange={e=>setDate(e.target.value)}
                              placeholder="Date"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mb-2">
                          <div className=" relative ">
                            <select className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-center" id="tag" name="tag" value={tag} onChange={e=>setTag(e.target.value)} required="required">
                              <option>no one</option>
                              <option>daily</option>
                              <option>learn</option>
                              <option>event</option>
                              <option>important</option>
                            </select>

                          </div>
                        </div>
                        <div className="flex w-full my-4">
                          <button
                            
                            onClick={handleSubmit}
                            className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            Add
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
