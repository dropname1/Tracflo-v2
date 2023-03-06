import React from "react";
import RemovedProject from "../../modules/AppWorkArea/TrashApp/RemovedProject";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeAll } from "../../modules/Store/StoreSlieces/TrashSlice";
import { recoverAll_Trash } from "../../modules/Store/StoreSlieces/ProjectSlice";
import { recoverAll } from "../../modules/Store/StoreSlieces/TrashSlice";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function TrashApp({ isActiveApp }) {
  const trash = useSelector((state) => state.TrashSlice.trash);
  const dispatch = useDispatch();

  function recoverPropjects() {
    dispatch(recoverAll_Trash(trash));
    dispatch(recoverAll());
  }
  return (
    <TransitionGroup>
      <CSSTransition key={isActiveApp} classNames="fade2" timeout={250}>
        <div
          className="trashAppWrapper"
          style={{
            height: isActiveApp === "Trash" ? "initial" : "0",
            overflow: isActiveApp === "Trash" ? "initial" : "hidden",
          }}
        >
          <div className="trashButtons">
            <button
              className="clearTrash"
              onClick={() => dispatch(removeAll())}
            >
              Clear trash
            </button>
            <button className="RecoverTrash" onClick={() => recoverPropjects()}>
              Recover All
            </button>
          </div>
          <div className="trashItemsWrapper">
            <TransitionGroup>
              {trash &&
                trash.map((p) => (
                  <CSSTransition key={p.id} classNames="fade" timeout={250}>
                    <RemovedProject project={p} />
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
