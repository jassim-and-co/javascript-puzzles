import { compose, withState } from "recompose";

import React from "react";
import { getCost } from "./helpers";

export default compose(
  withState("valueFrom", "setValueFrom", 0),
  withState("valueTo", "setValueTo", 0)
)(({ valueFrom, valueTo, setValueFrom, setValueTo }) => (
  <div style={{ padding: "40px" }}>
    Value from
    <br />
    <input onChange={e => setValueFrom(e.target.value)} />
    <br />
    Value to
    <br />
    <input onChange={e => setValueTo(e.target.value)} />
    <div>Result</div>
    {getCost(window.parseInt(valueTo), window.parseInt(valueFrom))}
  </div>
));
