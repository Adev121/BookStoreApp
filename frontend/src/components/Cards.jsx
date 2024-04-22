import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
      <div >
        <div className="card h-96 w-80 bg-base-100 shadow-xl m-2 text-black">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body  bg-slate-100 rounded-xl">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between cursor-pointer">
              <div className="badge badge-outline cursor-pointer">₹ {item.price}</div>
              <div className="badge badge-outline p-4 cursor-pointer hover:bg-pink-600 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards
