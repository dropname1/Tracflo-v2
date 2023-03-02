import React from "react";
import { useDispatch } from "react-redux";
import { addSlice } from "../../Store/StoreSlieces/SlicesSliece";

export default function AddSlce({ activeApp, goalId }) {

    const dispatch = useDispatch()
    function addSlicefunction (e) {
        if(e.code === 'Enter') {
            dispatch(addSlice({title: e.target.value, activeApp: activeApp, goalId: goalId}))
            e.target.value = ''
        }
    }
  return (
    <div className="addSliceWrapper">
      <div className="clearAddSLiceInput">&times;</div>
      <input
        type="text"
        className="addSliceInput"
        placeholder="Enter Slice"
        onKeyUpCapture={(e) => addSlicefunction(e)}
      />
    </div>
  );
}
