import React from 'react'
import RemovedProject from '../../modules/AppWorkArea/TrashApp/RemovedProject';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeAll } from '../../modules/Store/StoreSlieces/TrashSlice';
import { recoverAll_Trash } from '../../modules/Store/StoreSlieces/ProjectSlice';
import { recoverAll } from '../../modules/Store/StoreSlieces/TrashSlice';

export default function TrashApp() {
  const trash = useSelector((state) => state.TrashSlice.trash);
  const dispatch = useDispatch()

  function recoverPropjects () {
    dispatch(recoverAll_Trash(trash));
    dispatch(recoverAll());
  }
  return (
    <div className="trashAppWrapper">
      <div className="trashButtons">
        <button className="clearTrash" onClick={() => dispatch(removeAll())}>
          Clear trash
        </button>
        <button
          className="RecoverTrash"
          onClick={() => recoverPropjects()}
        >
          Recover All
        </button>
      </div>
      <div className="trashItemsWrapper">
        {trash && trash.map((p) => <RemovedProject key={p.id} project={p} />)}
      </div>
    </div>
  );
}
