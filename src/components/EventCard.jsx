import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ViewEventModal from "./ViewEventModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { EventContext } from "../contexts/EventContext";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const EventCard = ({ event }) => {
  const { currentUser } = useContext(AuthContext);
  const { deleteEvent } = useContext(EventContext);

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.target.id);
    toast.success("Link copied 👍", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="bg-white w-full rounded-xl border flex justify-between flex-col  items-center space-y-16">
      <div className="w-full space-y-2">
        <div className="flex items-center p-5 justify-between w-full">
          <h1 className="font-Lexend font-light text-2xl text-gray-700">
            {event?.eventName}
          </h1>
          <button
            onClick={() => deleteEvent(event.eventId)}
            className="focus:outline-none text-red-500 text-xl transition px-2 py-1 hover:bg-red-500/10 font-light  rounded duration:200"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="flex justify-between p-5 border-t items-center w-full">
        <p
          onClick={(e) => handleCopy(e)}
          id={`planitio.vercel.app/booking/${currentUser.userId}/${event.eventId}`}
          className="text-sm px-4 py-3 bg-slate-100 rounded-full font-normal  cursor-pointer"
        >
          <ContentCopyIcon className="!text-base" /> Copy Link
        </p>
        <div className="space-x-2 flex items-center">
          <ViewEventModal event={event} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
