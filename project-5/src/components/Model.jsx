import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="top-0 absolute backdrop-blur h-screen w-screen flex items-center justify-center">
          <div className="bg-white-500 absolute flex flex-col items-center justify-center h-[250px] w-[400px] rounded-xl bg-white">
            <div
              onClick={onClose}
              className="text-black absolute top-2 cursor-pointer right-2"
            >
              <RxCross1 className="text-xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Model;
