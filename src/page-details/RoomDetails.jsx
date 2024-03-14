import React from "react";
import { useParams } from "react-router-dom";
import { useRoomContext } from "../context/RoomContext";
import Stars from "../components/Stars";
import FormatePrice from "../components/FormatePrice";

const RoomDetails = () => {
  const params = useParams().id;
  const { roome } = useRoomContext();

  const updateRoome = roome.find((itemsRoom) => itemsRoom.id === params);

  if (!updateRoome) {
    return <div>Item not Found</div>;
  }

  const {
    id: extra,
    category,
    description,
    image,
    price,
    reating,
  } = updateRoome;

  return (
    <div className="w-11/12 sm:w-10/12 lg:w-6/12 mx-auto pt-16">
      <h2 className="mb-10 text-center text-2xl xs:text-3xl  lg:text-4xl font-serif font-semibold uppercase text-orange-500">
        {category}
      </h2>
      <div className="flex justify-center mb-14">
        <figure>
          <img src={image} alt={category} className="w-full h-56" />
        </figure>
      </div>
      <div>
        <p className="text-[12px] sm:text-base">
          <span className="text-sm sm:text-lg font-serif font-semibold">
            Category :
          </span>{" "}
          {category}
        </p>
        <p className="text-base my-3">
          <Stars reating={reating} />
        </p>
        <p className="text-[12px] sm:text-base">
          {" "}
          <span className="text-sm sm:text-lg font-serif font-semibold">
            Price :{" "}
          </span>
          <FormatePrice price={price} />
        </p>
        <hr className="my-3" />
        <p className="text-[12px] sm:text-base">
          <span className="text-sm sm:text-lg font-serif font-semibold">
            Description :{" "}
          </span>{" "}
          {description}
        </p>
        <hr className="my-3" />
      </div>
    </div>
  );
};

export default RoomDetails;
